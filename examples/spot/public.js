import { Spot } from "../../index.js"

const spot = new Spot()

async function Run() {
    
    // ##### Rest
    let test = await spot.exchangeInfo()
    console.log(test)
    // let depth = await spot.depth({
    //     symbol: "BTCUSDT",
    //     limit: 10,
    // })

    // // ##### Websocket
    // spot.ws.subscribe(["btcusdt@kline_1m"], 1)

    // spot.ws.addListener("DATA", (socket) => {
    //     socket.addEventListener("message", (event) => {
    //         // Raw
    //         let data = event.data

    //         // Parsed
    //         data = JSON.parse(data)
    //     })
    // })
}
Run()