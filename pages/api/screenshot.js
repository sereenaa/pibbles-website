// pages/api/screenshot.js
import puppeteer from 'puppeteer';

export default async (req, res) => {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  await page.goto('https://dune.com/0xpibs/artichoke', { waitUntil: 'networkidle2' });
  const screenshot = await page.screenshot();
  await browser.close();

  res.setHeader('Content-Type', 'image/png');
  res.send(screenshot);
}
