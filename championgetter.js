const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://na.leagueoflegends.com/en/game-info/champions/');

  const champions = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll(' li .champ-name a'))
    return tds.map(li => li.innerHTML)
  });

  console.log(champions)
  await browser.close();
})();