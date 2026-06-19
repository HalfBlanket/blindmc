import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT = 10;
const WINDOW_MS  = 60 * 60 * 1000; // 1 hour

// ip -> list of request timestamps within current window
const ipLog = new Map<string, number[]>();

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now  = Date.now();
  const hits = (ipLog.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  if (hits.length >= RATE_LIMIT) return false;
  ipLog.set(ip, [...hits, now]);
  return true;
}

export async function POST(req: NextRequest) {
  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: "Not configured" }, { status: 500 });

  const ip = getIp(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const fd = await req.formData();
  const item     = fd.get("item")     as string | null;
  const price    = fd.get("price")    as string | null;
  const type     = fd.get("type")     as string | null;
  const username = fd.get("username") as string | null;
  const notes    = fd.get("notes")    as string | null;
  const method   = fd.get("method")   as string | null;
  const proof    = fd.get("proof")    as File   | null;

  if (!item || !price || !username || !method || !proof) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const methodColors: Record<string, number> = {
    esewa:        0x60bb46,
    khalti:       0x5c2d91,
    fonepay:      0xe31837,
    "visa-master":0x1a1f71,
  };

  const ext      = proof.name.split(".").pop() ?? "png";
  const filename = `proof.${ext}`;

  const embed = {
    title: `🛒 New Purchase — ${item}`,
    color: methodColors[method] ?? 0xdc2626,
    fields: [
      { name: "Item",               value: item,                 inline: true  },
      { name: "Type",               value: type ?? "—",          inline: true  },
      { name: "Price",              value: `Rs. ${price}`,       inline: true  },
      { name: "Minecraft Username", value: username,             inline: false },
      { name: "Payment Method",     value: method.toUpperCase(), inline: true  },
      { name: "IP Address",         value: `\`${ip}\``,          inline: true  },
      ...(notes ? [{ name: "Notes", value: notes, inline: false }] : []),
    ],
    image: { url: `attachment://${filename}` },
    timestamp: new Date().toISOString(),
    footer: { text: "blindmc.fun" },
  };

  const discordFd = new FormData();
  discordFd.append("payload_json", JSON.stringify({ content: "<@926107353873518602>", embeds: [embed] }));
  discordFd.append("files[0]", proof, filename);

  const res = await fetch(webhook, { method: "POST", body: discordFd });

  if (!res.ok) return NextResponse.json({ error: "Webhook failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
