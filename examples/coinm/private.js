import { CoinM, Futures } from "../../index.js"

new Futures().newListenKey

const coin = new CoinM()

// Rest
coin.account()

// Websocket
async function Run() {

    // 1- listenKey
    let newListenKey = coin.lis

    // - data
    coin.ws.addListener("DATA", (socket) => {
        socket.addEventListener("message", (event) => {
            // Raw
            let data = event.data

            // Parsed
            data = JSON.parse(data)
        })
})
}