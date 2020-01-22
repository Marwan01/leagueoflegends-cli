const puppeteer = require('puppeteer');

let userChamp = process.argv[2];


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
      if(champ.includes(" ") || champ.includes("\'")){
          champ = champ.replace(' ', '')
          champ = champ.replace('\'', '')
          champ = champ.replace('&amp; ', '')
      }
  })
  if(Number.isInteger(parseInt(userChamp)) ) {
    await page.goto('https://lolcounter.com/champions/' + champions[userChamp]);
  } else {
    await page.goto('https://lolcounter.com/champions/' + userChamp);
  }
  
  var counters = await page.evaluate(() => {
    var tds = Array.from(document.querySelectorAll(' .weak-block .name'))
    return tds.map(li => li.innerHTML)
  });
  counters = counters.slice(0,10)
  console.log(counters)
  await browser.close();
})();