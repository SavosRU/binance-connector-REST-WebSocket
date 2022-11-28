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
     * @param {CoinmTime} [params]
     */
    async time(params) {
        return await this.http.publicGET("/dapi/v1/time", params)
    }

    /**
     * @param {CoinmExchangeInfo} [params]
     */
    async exchangeInfo(params) {
        return await this.http.publicGET("/dapi/v1/exchangeInfo", params)
    }

    /**
     * @param {CoinmDepth} [params]
     */
    async depth(params) {
        return await this.http.publicGET("/dapi/v1/depth", params)
    }
    
    /**
     * @param {CoinmTrades} [params]
     */
    async trades(params) {
        return await this.http.publicGET("/dapi/v1/trades", params)
    }
    
    /**
     * @param {CoinmHistoricalTrades} [params]
     */
    async historicalTrades(params) {
        return await this.http.publicGET("/dapi/v1/historicalTrades", params)
    }
    
    /**
     * @param {CoinmAggTrades} [params]
     */
    async aggTrades(params) {
        return await this.http.publicGET("/dapi/v1/aggTrades", params)
    }
    
    /**
     * @param {CoinmPremiumIndex} [params]
     */
    async premiumIndex(params) {
        return await this.http.publicGET("/dapi/v1/premiumIndex", params)
    }
    
    /**
     * @param {CoinmFundingRate} [params]
     */
    async fundingRate(params) {
        return await this.http.publicGET("/dapi/v1/fundingRate", params)
    }
    
    /**
     * @param {CoinmKlines} [params]
     */
    async klines(params) {
        return await this.http.publicGET("/dapi/v1/klines", params)
    }
    
    /**
     * @param {CoinmContinuousKlines} [params]
     */
    async continuousKlines(params) {
        return await this.http.publicGET("/dapi/v1/continuousKlines", params)
    }
    
    /**
     * @param {CoinmIndexPriceKlines} [params]
     */
    async indexPriceKlines(params) {
        return await this.http.publicGET("/dapi/v1/indexPriceKlines", params)
    }
    
    /**
     * @param {CoinmMarkPriceKlines} [params]
     */
    async markPriceKlines(params) {
        return await this.http.publicGET("/dapi/v1/markPriceKlines", params)
    }
    
    /**
     * @param {CoinmTicker24hr} [params]
     */
    async ticker24hr(params) {
        return await this.http.publicGET("/dapi/v1/ticker/24hr", params)
    }
    
    /**
     * @param {CoinmTickerPrice} [params]
     */
    async tickerPrice(params) {
        return await this.http.publicGET("/dapi/v1/ticker/price", params)
    }
   
    /**
     * @param {CoinmTickerBookTicker} [params]
     */
    async tickerBookTicker(params) {
        return await this.http.publicGET("/dapi/v1/ticker/bookTicker", params)
    }
    
    /**
     * @param {CoinmOpenInterest} [params]
     */
    async openInterest(params) {
        return await this.http.publicGET("/dapi/v1/openInterest", params)
    }
    
    /**
     * @param {CoinmFuturesDataOpenInterestHist} [params]
     */
    async dataOpenInterestHist(params) {
        return await this.http.publicGET("/futures/data/openInterestHist", params)
    }
    
    /**
     * @param {CoinmFuturesDataTopLongShortAccountRatio} [params]
     */
    async dataTopLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortAccountRatio", params)
    }
    
    /**
     * @param {CoinmFuturesDataTopLongShortPositionRatio} [params]
     */
    async dataTopLongShortPositionRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortPositionRatio", params)
    }
    
    /**
     * @param {CoinmFuturesDataGlobalLongShortAccountRatio} [params]
     */
    async dataGlobalLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/globalLongShortAccountRatio", params)
    }
    
    /**
     * @param {CoinmFuturesDataTakerBuySellVol} [params]
     */
    async dataTakerBuySellVol(params) {
        return await this.http.publicGET("/futures/data/takerBuySellVol", params)
    }
    
    /**
     * @param {CoinmFuturesDataBasis} [params]
     */
    async dataBasis(params) {
        return await this.http.publicGET("/futures/data/basis", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * @param {CoinmPostPositionSideDual} [params]
     */
     async updatePositionSideDual(params) {
        return await this.http.privatePOST("/dapi/v1/positionSide/dual", params)
    }

    /**
     * @param {CoinmPositionSideDual} [params]
     */
     async positionSideDual(params) {
        return await this.http.privateGET("/dapi/v1/positionSide/dual", params)
    }

    /**
     * @param {CoinmPostOrder} [params]
     */
     async newOrder(params) {
        return await this.http.privatePOST("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmPutOrder} [params]
     */
     async updateOrder(params) {
        return await this.http.privatePUT("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmPostBatchOrders} [params]
     */
     async newBatchOrders(params) {
        return await this.http.privatePOST("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {CoinmPutBatchOrders} [params]
     */
     async updateBatchOrders(params) {
        return await this.http.privatePUT("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {CoinmOrderAmendment} [params]
     */
     async orderAmendment(params) {
        return await this.http.privateGET("/dapi/v1/orderAmendment", params)
    }

    /**
     * @param {CoinmOrder} [params]
     */
     async order(params) {
        return await this.http.privateGET("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmDeleteOrder} [params]
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmDeleteAllOpenOrders} [params]
     */
     async deleteAllOpenOrders(params) {
        return await this.http.privateDELETE("/dapi/v1/allOpenOrders", params)
    }

    /**
     * @param {CoinmDeleteBatchOrders} [params]
     */
     async deleteBatchOrders(params) {
        return await this.http.privateDELETE("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {CoinmPostCountDownCancelAll} [params]
     */
     async newCountDownCancelAll(params) {
        return await this.http.privatePOST("/dapi/v1/countdownCancelAll", params)
    }

    /**
     * @param {CoinmOpenOrder} [params]
     */
     async openOrder(params) {
        return await this.http.privateGET("/dapi/v1/openOrder", params)
    }

    /**
     * @param {CoinmOpenOrders} [params]
     */
     async openOrders(params) {
        return await this.http.privateGET("/dapi/v1/openOrders", params)
    }

    /**
     * @param {CoinmAllOrders} [params]
     */
     async allOrders(params) {
        return await this.http.privateGET("/dapi/v1/allOrders", params)
    }

    /**
     * @param {CoinmBalance} [params]
     */
     async balance(params) {
        return await this.http.privateGET("/dapi/v1/balance", params)
    }

    /**
     * @param {CoinmAccount} [params]
     */
     async account(params) {
        return await this.http.privateGET("/dapi/v1/account", params)
    }

    /**
     * @param {CoinmPostLeverage} [params]
     */
     async updateLeverage(params) {
        return await this.http.privatePOST("/dapi/v1/leverage", params)
    }

    /**
     * @param {CoinmPostMarginType} [params]
     */
     async updateMarginType(params) {
        return await this.http.privatePOST("/dapi/v1/marginType", params)
    }

    /**
     * @param {CoinmPostPositionMargin} [params]
     */
     async updatePositionMargin(params) {
        return await this.http.privatePOST("/dapi/v1/positionMargin", params)
    }

    /**
     * @param {CoinmPositionMarginHistory} [params]
     */
     async positionMarginHistory(params) {
        return await this.http.privateGET("/dapi/v1/positionMargin/history", params)
    }

    /**
     * @param {CoinmPositionRisk} [params]
     */
     async positionRisk(params) {
        return await this.http.privateGET("/dapi/v1/positionRisk", params)
    }

    /**
     * @param {CoinmUserTrades} [params]
     */
     async userTrades(params) {
        return await this.http.privateGET("/dapi/v1/userTrades", params)
    }

    /**
     * @param {CoinmIncome} [params]
     */
     async income(params) {
        return await this.http.privateGET("/dapi/v1/income", params)
    }

    /**
     * @param {CoinmLeverageBracket} [params]
     */
     async leverageBracket(params) {
        return await this.http.privateGET("/dapi/v1/leverageBracket", params)
    }

    /**
     * @param {CoinmLeverageBracket} [params]
     */
     async leverageBracket(params) {
        return await this.http.privateGET("/dapi/v2/leverageBracket", params)
    }

    /**
     * @param {CoinmForceOrders} [params]
     */
     async forceOrders(params) {
        return await this.http.privateGET("/dapi/v1/forceOrders", params)
    }

    /**
     * @param {CoinmAdlQuantile} [params]
     */
     async adlQuantile(params) {
        return await this.http.privateGET("/dapi/v1/adlQuantile", params)
    }

    /**
     * @param {CoinmCommissionRate} [params]
     */
     async commissionRate(params) {
        return await this.http.privateGET("/dapi/v1/commissionRate", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Private
    /**
     * @param {CoinmPmExchangeInfo} [params]
     */
     async pmExchangeInfo(params) {
        return await this.http.publicGET("/dapi/v1/pmExchangeInfo", params)
    }
 
    /**
     * @param {CoinmPmAccountInfo} [params]
     */
     async pmAccountInfo(params) {
        return await this.http.publicGET("/dapi/v1/pmAccountInfo", params)
    }
}