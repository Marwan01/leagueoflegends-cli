const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://na.leagueoflegends.com/en/game-info/champions/');

  var champions = await page.evaluate(() => {
    var tds = Array.from(document.querySelectorAll(' li .champ-name a'))
    return tds.map(li => li.innerHTML)
  });

  let i=0;
  champions.forEach(champ => {
      if(champ.includes(" ") || champ.includes("\'")){
          champ = champ.replace(' ', '')
          champ = champ.replace('\'', '')
          champ = champ.replace('&amp; ', '')
      }

      console.log(i++ + ") " + champ)
  })
  await browser.close();
})();