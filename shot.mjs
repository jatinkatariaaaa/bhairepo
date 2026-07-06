// Screenshot harness for visual auditing. Usage:
//   node shot.mjs <url> <label> [outDir]
// Steps through the whole page (driving Lenis if present) and captures each
// viewport at desktop (1440) and mobile (390).
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const url = process.argv[2];
const label = process.argv[3];
const outDir = process.argv[4] || "shots";
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "d", width: 1440, height: 900 },
  { name: "m", width: 390, height: 844 },
];

const browser = await chromium.launch({
  executablePath:
    "/playwright/chromium_headless_shell-1208/chrome-headless-shell-linux64/chrome-headless-shell",
});
for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
  } catch {
    /* analytics may keep the socket open — proceed anyway */
  }
  await page.waitForTimeout(4200); // let the preloader finish + layout settle

  const total = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.round(vp.height * 0.9);
  let i = 0;
  for (let y = 0; y < total && i <= 16; y += step) {
    await page.evaluate((yy) => {
      // drive Lenis if this site uses our instance, else native instant scroll
      if (window.__lenis) window.__lenis.scrollTo(yy, { immediate: true });
      window.scrollTo({ top: yy, behavior: "instant" });
    }, y);
    await page.waitForTimeout(650);
    await page.screenshot({
      path: `${outDir}/${label}-${vp.name}-${String(i).padStart(2, "0")}.png`,
    });
    i++;
  }
  await ctx.close();
  console.log(`${label} ${vp.name}: ${i} shots`);
}
await browser.close();
console.log("done", label);
