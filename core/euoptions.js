import { Websocket } from "./websocket.js"
import { Http } from "./http.js"
import("../types/euoptions.type.js")

export class EuOptions {
    
    ApiMap = {
        baseURL: "https://eapi.binance.com",
        wsBaseURL: "wss://nbstream.binance.com/eoptions/",
    }

    timestamp = Date.now()

    /**
     * @param { EuOptionsConstructor } options
     */
    constructor(options = {}) {

        options.isTestNet = false

        let OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.api_key    = options.api_key
        this.api_secret = options.api_secret
        this.recvWindow = options.recvWindow

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        
        if (!OPTIONS.recvWindow) {
            OPTIONS.recvWindow = this.recvWindow
        }

        // Websocket
        this.ws = new Websocket(OPTIONS)
        
        // Utils
        this.http = new Http(OPTIONS)
    }

    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * @param {} [params]
     */
    async ping(params) {
        return await this.http.privateGET("/eapi/v1/ping", params)
    }

    /**
     * @param {} [params]
     */
    async time(params) {
        return await this.http.privateGET("/eapi/v1/time", params)
    }

    /**
     * @param {} [params]
     */
    async test(params) {
        return await this.http.privateGET("/eapi/v1/klines", params)
        // return await this.http.privateGET("/eapi/v1/exchangeInfo", params)
    }
    // ########### Private
    
    // ########################################### Account/Trades Endpoints
    // ########### Public
    // ########### Private

    // ########################################### Market Maker Endpoints
    // ########### Public
    // ########### Private
}