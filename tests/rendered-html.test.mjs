import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("contains the October event content and production hostname", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /AI<\/span>/);
  assert.match(page, /Hackathon<\/span>/);
  assert.match(page, /Oct 02/);
  assert.match(page, /San Francisco State University, Annex 1/);
  assert.match(layout, /SF Hacks × GDG — AI Hackathon/);
  assert.match(layout, /gdg\.sfhacks\.io/);
});

test("does not show application links after applications close", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Applications closed/);
  assert.doesNotMatch(page, /APPLY_URL|app\.sfhacks\.io|Apply(?: to hack| now)?/);
});
