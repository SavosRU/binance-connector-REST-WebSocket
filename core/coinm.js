import { Websocket } from "./websocket.js"
import { Http } from "./http.js"
import("../types/coinm.type.js")

export class CoinM {
    
    ApiMap = {
        baseURL: "https://dapi.binance.com",
        baseURLTest: "https://testnet.binancefuture.com",
        wsBaseURL: "wss://dstream.binance.com",
        wsBaseURLTest: "wss://dstream.binancefuture.com",
    }

    timestamp = Date.now()

    /**
     * @param { CoinMConstructor } options
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
        
        // Utils
        this.http = new Http(OPTIONS)
    }

    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * @param {} [params]
     */
    async ping(params) {
        return await this.http.privateGET("/dapi/v1/ping", params)
    }

    /**
     * @param {} [params]
     */
    async time(params) {
        return await this.http.privateGET("/dapi/v1/time", params)
    }
    // ########### Private
    
    // ########################################### Account/Trades Endpoints
    // ########### Public
    // ########### Private

    // ########################################### Portfolio Margin Endpoints
    // ########### Public
    // ########### Private
}