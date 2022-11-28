import { Websocket } from "./websocket.js"
import("../types/blvtstream.type.js")

export class BlvtStream {
    
    ApiMap = {
        baseURL: "",
        baseURLTest: "",
        wsBaseURL: "wss://nbstream.binance.com/lvt-p",
        wsBaseURLTest: "",
    }

    timestamp = Date.now()

    /**
     * @param {BlvtStreamConstructor} options
     */
    constructor(options = {}) {

        let OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.api_key    = options.api_key
        this.api_secret = options.api_secret
        this.recvWindow = options.recvWindow
        this.isTestNet  = options.isTestNet

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        this.isTestNet  = this.isTestNet  ?? false
        
        if (!OPTIONS.recvWindow) {
            OPTIONS.recvWindow = this.recvWindow
        }

        // Websocket
        this.ws = new Websocket(OPTIONS)
    }
}