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
        return await this.http.publicGET("/eapi/v1/ping", params)
    }

    /**
     * @param {} [params]
     */
    async time(params) {
        return await this.http.publicGET("/eapi/v1/time", params)
    }

    /**
     * @param {} [params]
     */
    async exchangeInfo(params) {
        return await this.http.publicGET("/eapi/v1/exchangeInfo", params)
    }

    /**
     * @param {} [params]
     */
    async depth(params) {
        return await this.http.publicGET("/eapi/v1/depth", params)
    }

    /**
     * @param {} [params]
     */
    async trades(params) {
        return await this.http.publicGET("/eapi/v1/trades", params)
    }

    /**
     * @param {} [params]
     */
    async historicalTrades(params) {
        return await this.http.publicGET("/eapi/v1/historicalTrades", params)
    }

    /**
     * @param {} [params]
     */
    async klines(params) {
        return await this.http.publicGET("/eapi/v1/klines", params)
    }

    /**
     * @param {} [params]
     */
    async mark(params) {
        return await this.http.publicGET("/eapi/v1/mark", params)
    }

    /**
     * @param {} [params]
     */
    async ticker(params) {
        return await this.http.publicGET("/eapi/v1/ticker", params)
    }

    /**
     * @param {} [params]
     */
    async index(params) {
        return await this.http.publicGET("/eapi/v1/index", params)
    }

    /**
     * @param {} [params]
     */
    async exerciseHistory(params) {
        return await this.http.publicGET("/eapi/v1/exerciseHistory", params)
    }

    /**
     * @param {} [params]
     */
    async openInterest(params) {
        return await this.http.publicGET("/eapi/v1/openInterest", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * @param {} [params]
     */
     async account(params) {
        return await this.http.privateGET("/eapi/v1/account", params)
    }

    /**
     * @param {} [params]
     */
     async newTransfer(params) {
        return await this.http.privatePOST("/eapi/v1/transfer", params)
    }

    /**
     * @param {} [params]
     */
     async newOrder(params) {
        return await this.http.privatePOST("/eapi/v1/order", params)
    }

    /**
     * @param {} [params]
     */
     async newBatchOrders(params) {
        return await this.http.privatePOST("/eapi/v1/batchOrders", params)
    }

    /**
     * @param {} [params]
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/eapi/v1/order", params)
    }

    /**
     * @param {} [params]
     */
     async deleteBatchOrders(params) {
        return await this.http.privateDELETE("/eapi/v1/batchOrders", params)
    }

    /**
     * @param {} [params]
     */
     async deleteAllOpenOrders(params) {
        return await this.http.privateDELETE("/eapi/v1/allOpenOrders", params)
    }

    /**
     * @param {} [params]
     */
     async deleteAllOpenOrdersByUnderlying(params) {
        return await this.http.privateDELETE("/eapi/v1/allOpenOrdersByUnderlying", params)
    }

    /**
     * @param {} [params]
     */
     async openOrders(params) {
        return await this.http.privateGET("/eapi/v1/openOrders", params)
    }

    /**
     * @param {} [params]
     */
     async historyOrders(params) {
        return await this.http.privateGET("/eapi/v1/historyOrders", params)
    }

    /**
     * @param {} [params]
     */
     async position(params) {
        return await this.http.privateGET("/eapi/v1/position", params)
    }

    /**
     * @param {} [params]
     */
     async userTrades(params) {
        return await this.http.privateGET("/eapi/v1/userTrades", params)
    }

    /**
     * @param {} [params]
     */
     async exerciseRecord(params) {
        return await this.http.privateGET("/eapi/v1/exerciseRecord", params)
    }

    /**
     * @param {} [params]
     */
     async bill(params) {
        return await this.http.privateGET("/eapi/v1/bill", params)
    }
    // ########################################### Market Maker Endpoints
    // ########### Private
    /**
     * @param {} [params]
     */
     async marginAccount(params) {
        return await this.http.privateGET("/eapi/v1/marginAccount", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMmpSet(params) {
        return await this.http.privatePOST("/eapi/v1/mmpSet", params)
    }
    
    /**
     * @param {} [params]
     */
     async mmp(params) {
        return await this.http.privateGET("/eapi/v1/mmp", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMmpReset(params) {
        return await this.http.privatePOST("/eapi/v1/mmpReset", params)
    }
    
    /**
     * @param {} [params]
     */
     async newCountdownCancelAll(params) {
        return await this.http.privatePOST("/eapi/v1/countdownCancelAll", params)
    }
    
    /**
     * @param {} [params]
     */
     async countdownCancelAll(params) {
        return await this.http.privateGET("/eapi/v1/countdownCancelAll", params)
    }
    
    /**
     * @param {} [params]
     */
     async newCountdownCancelAllHeartBeat(params) {
        return await this.http.privateGET("/eapi/v1/countdownCancelAllHeartBeat", params)
    }
}