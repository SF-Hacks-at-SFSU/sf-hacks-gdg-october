import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const APPLY_URL = "https://app.sfhacks.io/";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://gdg.sfhacks.io/", {
      headers: { accept: "text/html", host: "gdg.sfhacks.io" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the October event landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SF Hacks × GDG — AI Hackathon<\/title>/i);
  assert.match(html, /One day\. One team\. Build with AI\./);
  assert.match(html, /Oct 02/);
  assert.match(html, /San Francisco State University, Annex 1/);
  assert.match(html, /https:\/\/gdg\.sfhacks\.io\/og-v2\.png/);
});

test("all Apply buttons point to the event-manager applicant portal", async () => {
  const response = await render();
  const html = await response.text();
  const escapedApplyUrl = APPLY_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const applyLinks = html.match(new RegExp(`href=["']${escapedApplyUrl}["']`, "g")) ?? [];

  assert.equal(applyLinks.length, 3);
  assert.doesNotMatch(html, /tally\.so/i);

  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, new RegExp(`const APPLY_URL = ["']${escapedApplyUrl}["']`));
});
