const base = "https://res.cloudinary.com/dudkrsokf/image/upload";

// Test a small batch first - we know Solaya3 works with _kowhyt suffix
// This means filenames have random suffixes. Let's use the Admin API differently.
const apiKey = "932626876892996";
const apiSecret = "8R0CwjwomqLmWjjUVusPa0uipyo";
const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

// Use Admin API to get resources with derived=false and type=upload
const url = `https://api.cloudinary.com/v1_1/dudkrsokf/resources/search`;
const res = await fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    expression: "resource_type:image",
    max_results: 50,
    sort_by: [{ created_at: "desc" }],
    with_field: ["context", "tags"],
  }),
});

const data = await res.json();
console.log("[v0] Status:", res.status);
console.log("[v0] Total:", data.total_count);
console.log("[v0] Resources count:", data.resources?.length);

if (data.resources) {
  for (const r of data.resources.slice(0, 50)) {
    console.log("[v0] IMG:", r.public_id, "|", r.format, "|", r.secure_url);
  }
}

if (data.error) {
  console.log("[v0] Error:", JSON.stringify(data.error));
}

console.log("[v0] Rate limit:", JSON.stringify(data.rate_limit_allowed));
