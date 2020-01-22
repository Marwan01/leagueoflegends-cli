const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://na.leagueoflegends.com/en-us/champions/');

  var champions = await page.evaluate(() => {
    var tds = Array.from(document.querySelectorAll(' .style__Text-sc-12h96bu-3'))
    return tds.map(li => li.innerHTML)
  });

  let i=0;
  champions.forEach(champ => {
      console.log(i++ + ") " + champ)
  })
  
  await browser.close();
})();