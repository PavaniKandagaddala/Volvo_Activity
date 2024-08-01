exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--incognito', '--disable-infobars']
        },
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.volvocars.com/intl/v/car-safety/a-million-more',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        ['image-comparison', {
            baselineFolder: 'baseline/',
            formatImageName: '{tag}-{browserName}',
            screenshotPath: 'screenshots/',
            savePerInstance: true,
            autoSaveBaseline: true
        }]
    ],
    framework: 'mocha',
    reporters: ['spec', 'dot', ['junit', {
        outputDir: './results',
        outputFileFormat: function(options) {
            return `results-${options.cid}.xml`
        }
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: async function (capabilities, specs) {
        await browser.setWindowSize(1920, 1080);
    }
};
