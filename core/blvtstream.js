import { Websocket } from "./websocket.js"
import("../types/blvtstream.type.js")

/**
 * @namespace
 */
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
        this.recvWindow = options.recvWindow

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        
        if (!OPTIONS.recvWindow) {
            OPTIONS.recvWindow = this.recvWindow
        }

        // Websocket
        this.ws = new Websocket(OPTIONS)
    }
}