import { Futures } from "../../index.js"
import { config } from "../../config.js"

const futures = new Futures({
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

async function Run() {
    
    // ##### Rest
    let accountInfo = await futures.account()

    // ##### Websocket
    // 1- listenKey
    let newListenKey = await futures.newListenKey()
    let listenKey    = newListenKey.listenKey

    // 2- subscribe
    futures.ws.userStream(listenKey, "USER_DATA")

    // 3- data
    futures.ws.addListener("USER_DATA", (socket, options) => {
        socket.addEventListener("message", (event) => {
            // Raw
            let data = event.data

            // Parsed
            data = JSON.parse(data)
        })
    })
}
Run()