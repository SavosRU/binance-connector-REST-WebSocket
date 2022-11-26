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
    // let a = await euoptions.test({
    //     symbol: "ETH-221209-1000-P",
    //     interval: "1m",
    //     limit: 10
    // })
    // console.log(a)

    // euoptions.ws.subscribe(["ETH-221209-1000-P@kline_1m"], 1)

    // euoptions.ws.addListener("DATA", (socket) => {
    //     socket.addEventListener("message", (event) => {
    //         console.log(event.data)
    //     })
    // })

}
Run()