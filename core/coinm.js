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
     * @param {CoinmPing} [params]
     */
    async ping(params) {
        return await this.http.publicGET("/dapi/v1/ping", params)
    }

    /**
     * @param {} [params]
     */
    async time(params) {
        return await this.http.publicGET("/dapi/v1/time", params)
    }

    /**
     * @param {} [params]
     */
    async exchangeInfo(params) {
        return await this.http.publicGET("/dapi/v1/exchangeInfo", params)
    }

    /**
     * @param {} [params]
     */
    async depth(params) {
        return await this.http.publicGET("/dapi/v1/depth", params)
    }
    
    /**
     * @param {} [params]
     */
    async trades(params) {
        return await this.http.publicGET("/dapi/v1/trades", params)
    }
    
    /**
     * @param {} [params]
     */
    async historicalTrades(params) {
        return await this.http.publicGET("/dapi/v1/historicalTrades", params)
    }
    
    /**
     * @param {} [params]
     */
    async aggTrades(params) {
        return await this.http.publicGET("/dapi/v1/aggTrades", params)
    }
    
    /**
     * @param {} [params]
     */
    async premiumIndex(params) {
        return await this.http.publicGET("/dapi/v1/premiumIndex", params)
    }
    
    /**
     * @param {} [params]
     */
    async fundingRate(params) {
        return await this.http.publicGET("/dapi/v1/fundingRate", params)
    }
    
    /**
     * @param {} [params]
     */
    async klines(params) {
        return await this.http.publicGET("/dapi/v1/klines", params)
    }
    
    /**
     * @param {} [params]
     */
    async continuousKlines(params) {
        return await this.http.publicGET("/dapi/v1/continuousKlines", params)
    }
    
    /**
     * @param {} [params]
     */
    async indexPriceKlines(params) {
        return await this.http.publicGET("/dapi/v1/indexPriceKlines", params)
    }
    
    /**
     * @param {} [params]
     */
    async markPriceKlines(params) {
        return await this.http.publicGET("/dapi/v1/markPriceKlines", params)
    }
    
    /**
     * @param {} [params]
     */
    async ticker24hr(params) {
        return await this.http.publicGET("/dapi/v1/ticker/24hr", params)
    }
    
    /**
     * @param {} [params]
     */
    async tickerPrice(params) {
        return await this.http.publicGET("/dapi/v1/ticker/price", params)
    }
   
    /**
     * @param {} [params]
     */
    async tickerBookTicker(params) {
        return await this.http.publicGET("/dapi/v1/ticker/bookTicker", params)
    }
    
    /**
     * @param {} [params]
     */
    async openInterest(params) {
        return await this.http.publicGET("/dapi/v1/openInterest", params)
    }
    
    /**
     * @param {} [params]
     */
    async dataOpenInterestHist(params) {
        return await this.http.publicGET("/futures/data/openInterestHist", params)
    }
    
    /**
     * @param {} [params]
     */
    async dataTopLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortAccountRatio", params)
    }
    
    /**
     * @param {} [params]
     */
    async dataTopLongShortPositionRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortPositionRatio", params)
    }
    
    /**
     * @param {} [params]
     */
    async dataGlobalLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/globalLongShortAccountRatio", params)
    }
    
    /**
     * @param {} [params]
     */
    async dataTakerBuySellVol(params) {
        return await this.http.publicGET("/futures/data/takerBuySellVol", params)
    }
    
    /**
     * @param {} [params]
     */
    async dataBasis(params) {
        return await this.http.publicGET("/futures/data/basis", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * @param {} [params]
     */
     async updatePositionSideDual(params) {
        return await this.http.privatePOST("/dapi/v1/positionSide/dual", params)
    }

    /**
     * @param {} [params]
     */
     async positionSideDual(params) {
        return await this.http.privateGET("/dapi/v1/positionSide/dual", params)
    }

    /**
     * @param {} [params]
     */
     async newOrder(params) {
        return await this.http.privatePOST("/dapi/v1/order", params)
    }

    /**
     * @param {} [params]
     */
     async updateOrder(params) {
        return await this.http.privatePUT("/dapi/v1/order", params)
    }

    /**
     * @param {} [params]
     */
     async neBatchOrders(params) {
        return await this.http.privatePOST("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {} [params]
     */
     async updateBatchOrders(params) {
        return await this.http.privatePUT("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {} [params]
     */
     async orderAmendment(params) {
        return await this.http.privateGET("/dapi/v1/orderAmendment", params)
    }

    /**
     * @param {} [params]
     */
     async order(params) {
        return await this.http.privateGET("/dapi/v1/order", params)
    }

    /**
     * @param {} [params]
     */
     async f(params) {
        return await this.http.privateGET("", params)
    }

    /**
     * @param {} [params]
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/dapi/v1/order", params)
    }

    /**
     * @param {} [params]
     */
     async deleteAllOpenOrders(params) {
        return await this.http.privateDELETE("/dapi/v1/allOpenOrders", params)
    }

    /**
     * @param {} [params]
     */
     async deleteBatchOrders(params) {
        return await this.http.privateDELETE("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {} [params]
     */
     async newCountDownCancelAll(params) {
        return await this.http.privatePOST("/dapi/v1/countdownCancelAll", params)
    }

    /**
     * @param {} [params]
     */
     async openOrder(params) {
        return await this.http.privateGET("/dapi/v1/openOrder", params)
    }

    /**
     * @param {} [params]
     */
     async openOrders(params) {
        return await this.http.privateGET("/dapi/v1/openOrders", params)
    }

    /**
     * @param {} [params]
     */
     async allOrders(params) {
        return await this.http.privateGET("/dapi/v1/allOrders", params)
    }

    /**
     * @param {} [params]
     */
     async balance(params) {
        return await this.http.privateGET("/dapi/v1/balance", params)
    }

    /**
     * @param {} [params]
     */
     async account(params) {
        return await this.http.privateGET("/dapi/v1/account", params)
    }

    /**
     * @param {} [params]
     */
     async updateLeverage(params) {
        return await this.http.privatePOST("/dapi/v1/leverage", params)
    }

    /**
     * @param {} [params]
     */
     async updateMarginType(params) {
        return await this.http.privatePOST("/dapi/v1/marginType", params)
    }

    /**
     * @param {} [params]
     */
     async updatePositionMargin(params) {
        return await this.http.privatePOST("/dapi/v1/positionMargin", params)
    }

    /**
     * @param {} [params]
     */
     async positionMarginHistory(params) {
        return await this.http.privateGET("/dapi/v1/positionMargin/history", params)
    }

    /**
     * @param {} [params]
     */
     async positionRisk(params) {
        return await this.http.privateGET("/dapi/v1/positionRisk", params)
    }

    /**
     * @param {} [params]
     */
     async userTrades(params) {
        return await this.http.privateGET("/dapi/v1/userTrades", params)
    }

    /**
     * @param {} [params]
     */
     async income(params) {
        return await this.http.privateGET("/dapi/v1/income", params)
    }

    /**
     * @param {} [params]
     */
     async leverageBracket(params) {
        return await this.http.privateGET("/dapi/v1/leverageBracket", params)
    }

    /**
     * @param {} [params]
     */
     async leverageBracket(params) {
        return await this.http.privateGET("/dapi/v2/leverageBracket", params)
    }

    /**
     * @param {} [params]
     */
     async forceOrders(params) {
        return await this.http.privateGET("/dapi/v1/forceOrders", params)
    }

    /**
     * @param {} [params]
     */
     async adlQuantile(params) {
        return await this.http.privateGET("/dapi/v1/adlQuantile", params)
    }

    /**
     * @param {} [params]
     */
     async commissionRate(params) {
        return await this.http.privateGET("/dapi/v1/commissionRate", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Private
    /**
     * @param {} [params]
     */
     async pmExchangeInfo(params) {
        return await this.http.publicGET("/dapi/v1/pmExchangeInfo", params)
    }
 
    /**
     * @param {} [params]
     */
     async pmAccountInfo(params) {
        return await this.http.publicGET("/dapi/v1/pmAccountInfo", params)
    }
}