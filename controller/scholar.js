const {Browser, Builder, By, until } = require('selenium-webdriver');
const {Options, ServiceBuilder} = require('selenium-webdriver/chrome');



exports.getScholarLinks = async(req, res) => {
    console.log(req.body);
    const url = `https://scholar.google.com/`;
    var options = null;
    var serviceBuilder = null;

    options = new Options();

    options.addArguments("--headless");
    options.addArguments("--disable-gpu");
    options.addArguments("--no-sandbox");

    //for running locally use following
    require('chromedriver');
    serviceBuilder = new ServiceBuilder();

    //for running on heroku use following
    // options.setChromeBinaryPath(process.env.GOOGLE_CHROME_BIN);
    // serviceBuilder = new ServiceBuilder(process.env.CHROMEDRIVER_PATH);

    
    console.log(`inside getScholarLinks()`);
    let driver = null;
    var scholarLinks = [];
    try{
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .setChromeService(serviceBuilder)
            .build();
        await driver.get(`${url}scholar?q=${req.body.inputt}`);
        let page_no = 1;
	    let pages_limit = 4;
        while(page_no<pages_limit){
            await driver.wait(until.elementsLocated(By.xpath(`//div[@class='gs_or_ggsm']`)), 12000);
            let divs = await driver.findElements(By.xpath(`//div[@class='gs_or_ggsm']`))
            console.log(divs.length);
            for(let i = 0; i <divs.length; i++) {
                var arr = await divs[i].findElements(By.tagName('a'));
                console.log(arr.length);
                for(let j = 0; j < arr.length; j++) {

                    try{

                        let att = await arr[j].getAttribute('href');
                        if(att != null || att != 'null' || att != undefined)
                            scholarLinks.push(att)

                    }catch(e) {
                        console.log(e.message);
                    }
                }
            }
            page_no=page_no+1
            // await driver.findElement(By.xpath("//span[@class='gs_ico gs_ico_nav_next']")).click();
        }
        console.log(scholarLinks);
        res.json({links: scholarLinks, success: true});
    }catch(e){
        console.log(e.message);
        res.json({links: e.message, success: false});

    }

}