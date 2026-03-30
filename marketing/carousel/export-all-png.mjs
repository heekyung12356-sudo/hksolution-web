/**
 * 전체 캐러셀 PNG 변환 — 8개 카테고리 일괄 처리
 * 사용법: node export-all-png.mjs
 */
import puppeteer from 'puppeteer';
import { readdir, mkdir } from 'fs/promises';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WIDTH = 1080;
const HEIGHT = 1350;

const CATEGORIES = [
  'investment-ma',
  'competitive-intel',
  'enterprise-procurement',
  'legal-litigation',
  'product-engineering',
  'ai-automation',
  'e2e-testing',
  'sales-outbound',
];

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let totalCount = 0;

  for (const cat of CATEGORIES) {
    const catDir = join(__dirname, cat);
    const files = (await readdir(catDir))
      .filter(f => f.startsWith('slide') && f.endsWith('.html'))
      .sort();

    console.log(`\n📁 ${cat} (${files.length} slides)`);

    for (const file of files) {
      const filePath = resolve(catDir, file);
      const page = await browser.newPage();
      await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
      await page.goto(`file://${filePath}`, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 1000));

      const outputName = file.replace('.html', '.png');
      const outputPath = join(catDir, outputName);

      await page.screenshot({
        path: outputPath,
        type: 'png',
        clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
      });

      console.log(`  ✅ ${file} → ${outputName}`);
      totalCount++;
      await page.close();
    }
  }

  await browser.close();
  console.log(`\n🎉 Done! ${totalCount} PNGs across ${CATEGORIES.length} categories.`);
}

main().catch(console.error);
