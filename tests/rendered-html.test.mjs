import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const APPLY_URL = "https://app.sfhacks.io/";

test("contains the October event content and production hostname", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /One day\. One team\. Build with AI\./);
  assert.match(page, /Oct 02/);
  assert.match(page, /San Francisco State University, Annex 1/);
  assert.match(layout, /SF Hacks × GDG — AI Hackathon/);
  assert.match(layout, /gdg\.sfhacks\.io/);
});

test("all Apply buttons point to the event-manager applicant portal", async () => {
  const escapedApplyUrl = APPLY_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, new RegExp(`const APPLY_URL = ["']${escapedApplyUrl}["']`));
  assert.equal((page.match(/href=\{APPLY_URL\}/g) ?? []).length, 3);
  assert.doesNotMatch(page, /tally\.so/i);
});
