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

  
  champions.forEach(champ => {
      if(champ.includes(" ") || champ.includes("\'")){
          champ = champ.replace(' ', '')
          champ = champ.replace('\'', '')
          champ = champ.replace('&amp; ', '')
      }
  })
  if(Number.isInteger(parseInt(userChamp)) ) {
    await page.goto('https://lolcounter.com/champions/' + champions[userChamp]);
    console.log("The 10 top counters for " + champions[userChamp] + " are:")
  } else {
    await page.goto('https://lolcounter.com/champions/' + userChamp);
    console.log("The 10 top counters for " + userChamp + " are:")
  }
  
  var counters = await page.evaluate(() => {
    var tds = Array.from(document.querySelectorAll(' .weak-block .name'))
    return tds.map(li => li.innerHTML)
  });
  counters = counters.slice(0,10)
  let i=1;
  counters.forEach(champ => {
    console.log(i++ + "/ "+ champ)
})
  await browser.close();
})();