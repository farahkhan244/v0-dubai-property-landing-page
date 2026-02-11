// List all images in Cloudinary account using the Admin API
const cloudName = "dudkrsokf";
const apiKey = "932626876892996";
const apiSecret = "8R0CwjwomqLmWjjUVusPa0uipyo";

const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

async function listResources(nextCursor = null) {
  let url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=500`;
  if (nextCursor) {
    url += `&next_cursor=${nextCursor}`;
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  if (!res.ok) {
    console.error("Error:", res.status, await res.text());
    return;
  }

  const data = await res.json();

  for (const resource of data.resources) {
    console.log(`${resource.public_id} | ${resource.secure_url}`);
  }

  if (data.next_cursor) {
    await listResources(data.next_cursor);
  }
}

listResources();
