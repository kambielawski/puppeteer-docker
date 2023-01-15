const puppeteer = require('puppeteer');

exports.screenshot = async (req, res) => {
    const url = req.query.url;

    if (!url) {
      return res.send('Please provide URL as GET parameter, for example: <a href="?url=https://example.com">?url=https://example.com</a>');
    }

    const browser = await puppeteer.launch({
        headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--single-process',
                "--disable-web-security",
                '--no-zygote'
            ]
    });

    res.send('dawg');
    const page = await browser.newPage();
    await page.goto(url);
    const imageBuffer = await page.screenshot();
    browser.close();

    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  };