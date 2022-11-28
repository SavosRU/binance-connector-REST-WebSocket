import { Spot, Futures, CoinM, EuOptions } from "./index.js"
import { config } from "./config.js"

let euoptions = new EuOptions({})

let coinm = new CoinM({})

let spot = new Spot({
    isTestNet: false,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

let fu = new Futures({
    isTestNet: true,
    api_key: config.TEST_API_KEY,
    api_secret: config.TEST_API_SECRET,
})

async function Run() {
    let a = spot.klines({
        
    })

}
Run()