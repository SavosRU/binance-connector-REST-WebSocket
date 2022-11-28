import { CoinM } from "../../index.js"

const coin = new CoinM()

// Rest
coin.depth({
    symbol: "BTCUSD_PERP",
    limit: 10,
})

// Websocket
coin.ws.subscribe(["BTCUSD_200626@kline_1m"], 1)

coin.ws.addListener("DATA", (socket) => {
    socket.addEventListener("message", (event) => {
        // Raw
        let data = event.data

        // Parsed
        data = JSON.parse(data)
    })
})