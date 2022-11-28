import { Websocket } from "./websocket.js"
import { Http } from "./http.js"
import("../types/spot.types.js")

export class Spot {
    
    ApiMap = {
        baseURL: "https://api.binance.com",
        baseURLTest: "https://testnet.binance.vision",
        wsBaseURL: "wss://stream.binance.com:443",
        wsBaseURLTest: "wss://testnet.binance.vision",
    }

    timestamp = Date.now()

    /**
     * @param {SpotConstructor} options
     */
    constructor(options = {}) {

        switch (options.changeBaseURL) {
            case 1:
                this.ApiMap.baseURL = "https://api1.binance.com"
                break;
            case 2:
                this.ApiMap.baseURL = "https://api2.binance.com"
                break;
            case 3:
                this.ApiMap.baseURL = "https://api3.binance.com"
                break;
            default:
                break;
        }

        if (options.changeWsStream) {
            this.ApiMap.wsBaseURL = "wss://stream.binance.com:9443"
        }

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

    // ########################################### Wallet Endpoints
    // ########### Public
    /**
     * @param {SpotSystemStatus} [params]
     */
    async systemStatus(params) {
        return await this.http.publicGET("/sapi/v1/system/status", params)
    }
    
    // ########### Private
    /**
     * @param {SpotCapitalConfigGetall} [params]
     */
    async capitalConfigGetAll(params) {
        return await this.http.privateGET("/sapi/v1/capital/config/getall", params)
    }


    /**
     * @param {SpotAccountSnapshot} params
     */
    async accountSnapshot(params) {
        return await this.http.privateGET("/sapi/v1/accountSnapshot", params)
    }

    /**
     * @param {SpotPostAccountDisableFastWithdrawSwitch} [params]
     */
    async accountDisableFastWithdrawSwitch(params) {
        return await this.http.privatePOST("/sapi/v1/account/disableFastWithdrawSwitch", params)
    }

    /**
     * @param {SpotPostAccountEnableFastWithdrawSwitch} [params]
     */
    async newAccountEnableFastWithdrawSwitch(params) {
        return await this.http.privatePOST("/sapi/v1/account/enableFastWithdrawSwitch", params)
    }

    /**
     * @param {SpotPostCapitalWithdrawApply} params
     */
    async newCapitalWithdrawApply(params) {
        return await this.http.privatePOST("/sapi/v1/capital/withdraw/apply", params)
    }

    /**
     * @param {SpotCapitalDepositHisrec} params
     */
    async capitalDepositHisrec(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/hisrec", params)
    }

    /**
     * @param {SpotCapitalWithdrawHistory} params
     */
    async capitalWithdrawHistory(params) {
        return await this.http.privateGET("/sapi/v1/capital/withdraw/history", params)
    }

    /**
     * @param {SpotCapitalDepositAddress} params
     */
    async capitalDepositAddress(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/address", params)
    }

    /**
     * @param {SpotAccountStatus} [params]
     */
    async accountStatus(params) {
        return await this.http.privateGET("/sapi/v1/account/status", params)
    }

    /**
     * @param {SpotAccountApiTradingStatus} [params]
     */
    async accountApiTradingStatus(params) {
        return await this.http.privateGET("/sapi/v1/account/apiTradingStatus", params)
    }

    /**
     * @param {SpotAssetDribblet} params
     */
    async assetDribblet(params) {
        return await this.http.privateGET("/sapi/v1/asset/dribblet", params)
    }

    /**
     * @param {SpotPostAssetDustBtc} [params]
     */
    async newAssetDustBTC(params) {
        return await this.http.privatePOST("/sapi/v1/asset/dust-btc", params)
    }

    /**
     * @param {SpotPostAssetDust} params
     */
    async newAssetDust(params) {
        return await this.http.privatePOST("/sapi/v1/asset/dust", params)
    }

    /**
     * @param {SpotAssetAssetDividend} params
     */
    async assetAssetDividend(params) {
        return await this.http.privateGET("/sapi/v1/asset/assetDividend", params)
    }
    
    /**
     * @param {SpotAssetAssetDetail} params
     */
    async assetAssetDetail(params) {
        return await this.http.privateGET("/sapi/v1/asset/assetDetail", params)
    }

    /**
     * @param {SpotAssetTradeFee} params
     */
    async assetTradeFee(params) {
        return await this.http.privateGET("/sapi/v1/asset/tradeFee", params)
    }

    /**
     * @param {SpotPostAssetTransfer} params
     */
    async newAssetTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/asset/transfer", params)
    }

    /**
     * @param {SpotAssetTransfer} params
     */
    async assetTransfer(params) {
        return await this.http.privateGET("/sapi/v1/asset/transfer", params)
    }

    /**
     * @param {SpotPostAssetGetFundingAsset} params
     */
    async assetGetFundingAsset(params) {
        return await this.http.privatePOST("/sapi/v1/asset/get-funding-asset", params)
    }

    /**
     * @param {SpotPostAssetGetUserAsset} params
     */
    async assetGetUserAsset(params) {
        return await this.http.privatePOST("/sapi/v3/asset/getUserAsset", params)
    }

    /**
     * @param {SpotPostAssetConvertTransfer} params
     */
    async newAssetConvertTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/asset/convert-transfer", params)
    }

    /**
     * @param {SpotAssetConvertTransferQueryByPage} params
     */
    async assetConvertTransferQueryByPage(params) {
        return await this.http.privateGET("/sapi/v1/asset/convert-transfer/queryByPage", params)
    }

    /**
     * @param {SpotAssetLedgerTransferCloudMiningQueryByPag} params
     */
    async assetLedgerTransferCloudMiningQueryByPage(params) {
        return await this.http.privateGET("/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage", params)
    }

    /**
     * @param {SpotAccountApiRestrictions} [params]
     */
    async accountApiRestrictions(params) {
        return await this.http.privateGET("/sapi/v1/account/apiRestrictions", params)
    }
    
    // ########################################### Sub-Account Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {SpotPostSubAccountVirtualSubAccount} params
     */
    async newSubAccountVirtualSubAccount(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/virtualSubAccount", params)
    }

    /**
     * @param {SpotSubAccountList} params
     */
    async subAccountList(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/list", params)
    }
 
    /**
     * @param {SpotSubAccountSubTransferHistory} params
     */
    async subAccountSubTransferHistory(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/sub/transfer/history", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesInternalTransfer} params
     */
    async subAccountFuturesInternalTransfer(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/internalTransfer", params)
    }
 
    /**
     * @param {SpotPostSubAccountFuturesInternalTransfer} params
     */
    async newSubAccountFuturesInternalTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/internalTransfer", params)
    }
 
    /**
     * @param {SpotSubAccountAssets} params
     */
    async subAccountAssets(params) {
        return await this.http.privateGET("/sapi/v3/sub-account/assets", params)
    }
 
    /**
     * @param {SpotSubAccountSpotSummary} params
     */
    async subAccountSpotSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/spotSummary", params)
    }
 
    /**
     * @param {SpotCapitalDepositSubAddress} params
     */
    async capitalDepositSubAddress(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subAddress", params)
    }
 
    /**
     * @param {SpotCapitalDepositSubHisrec} params
     */
    async capitalDepositSubHisrec(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subHisrec", params)
    }
 
    /**
     * @param {SpotSubAccountStatus} params
     */
    async subAccountStatus(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/status", params)
    }
 
    /**
     * @param {SpotPostSubAccountMarginEnable} params
     */
    async newSubAccountMarginEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/enable", params)
    }
 
    /**
     * @param {SpotSubAccountMarginAccount} params
     */
    async subAccountMarginAccount(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/account", params)
    }
 
    /**
     * @param {SpotSubAccountMarginAccountSummary} [params]
     */
    async subAccountMarginAccountSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/accountSummary", params)
    }
 
    /**
     * @param {SpotPostSubAccountFuturesEnable} params
     */
    async newSubAccountFuturesEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/enable", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesAccount} params
     */
    async subAccountFuturesAccount(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/account", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesAccountSummary} [params]
     */
    async subAccountFuturesAccountSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/accountSummary", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesPositionRisk} params
     */
    async subAccountFuturesPositionRisk(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/positionRisk", params)
    }
   
    /**
     * @param {SpotPostSubAccountFuturesTransfer} params
     */
    async newSubAccountFuturesTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/transfer", params)
    }
   
    /**
     * @param {SpotPostSubAccountMarginTransfer} params
     */
    async newSubAccountMarginTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/transfer", params)
    }
   
    /**
     * @param {SpotPostSubAccountTransferSubToSub} params
     */
    async newSubAccountTransferSubToSub(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToSub", params)
    }
   
    /**
     * @param {SpotPostSubAccountTransferSubToMaster} params
     */
    async newSubAccountTransferSubToMaster(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToMaster", params)
    }
   
    /**
     * @param {SpotSubAccountTransferSubUserHistory} params
     */
    async subAccountTransferSubUserHistory(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/transfer/subUserHistory", params)
    }
   
    /**
     * @param {SpotPostSubAccountUniversalTransfer} params
     */
    async newSubAccountUniversalTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/universalTransfer", params)
    }
   
    /**
     * @param {SpotSubAccountUniversalTransfer} params
     */
    async subAccountUniversalTransfer(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/universalTransfer", params)
    }
   
    /**
     * @param {SpotSubAccountFuturesAccount} params
     */
    async subAccountFuturesAccount(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/account", params)
    }
   
    /**
     * @param {SpotSubAccountFuturesAccountSummary} [params]
     */
    async subAccountFuturesAccountSummary(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/accountSummary", params)
    }
   
    /**
     * @param {SpotSubAccountFuturesPositionRisk} params
     */
    async subAccountFuturesPositionRisk(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/positionRisk", params)
    }
   
    /**
     * @param {SpotPostSubAccountBlvtEnable} params
     */
    async newSubAccountBlvtEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/blvt/enable", params)
    }
   
    /**
     * @param {SpotPostSubAccountSubAccountApiIpRestriction} params
     */
    async newSubAccountSubAccountApiIpRestriction(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {SpotPostSubAccountSubAccountApiIpRestrictionIpList} params
     */
    async newSubAccountSubAccountApiIpRestrictionIpList(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }
   
    /**
     * @param {SpotSubAccountSubAccountApiIpRestriction} params
     */
    async subAccountSubAccountApiIpRestriction(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {SpotDeleteSubAccountSubAccountApiIpRestrictionIpList} params
     */
    async deleteSubAccountSubAccountApiIpRestrictionIpList(params) {
        return await this.http.privateDELETE("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }
   
    /**
     * @param {SpotSubAccountApiRestrictionsIpRestrictionThirdPartyList} [params]
     */
    async subAccountApiRestrictionsIpRestrictionThirdPartyList(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/apiRestrictions/ipRestriction/thirdPartyList", params)
    }
   
    /**
     * @param {SpotPostSubAccountSubAccountApiIpRestriction} params
     */
    async updateSubAccountSubAccountApiIpRestriction(params) {
        return await this.http.privatePOST("/sapi/v2/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {SpotPostManagedSubaccountDeposit} params
     */
    async newManagedSubaccountDeposit(params) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/deposit", params)
    }

    /**
     * @param {SpotManagedSubaccountAsset} params
     */
    async managedSubaccountAsset(params) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/asset", params)
    }

    /**
     * @param {SpotPostManagedSubaccountWithdraw} params
     */
    async newManagedSubaccountWithdraw(params) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/withdraw", params)
    }

    /**
     * @param {SpotManagedSubaccountAccountSnapshot} params
     */
    async managedSubaccountAccountSnapshot(params) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/accountSnapshot", params)
    }
    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * @param {SpotPing} [params]
     */
     async ping() {
        return await this.http.simplePublicGET("/api/v3/ping", {})
    }

    /**
     * @param {SpotTime} [params]
     */
     async time() {
        return await this.http.simplePublicGET("/api/v3/time", {})
    }

    /**
     * @param {SpotExchangeInfo} params
     */
     async exchangeInfo(params) {
        return await this.http.simplePublicGET("/api/v3/exchangeInfo", params)
    }

    /**
     * @param {SpotDepth} params
     */
     async depth(params) {
        return await this.http.simplePublicGET("/api/v3/depth", params)
    }

    /**
     * @param {SpotTrades} params
     */
     async trades(params) {
        return await this.http.simplePublicGET("/api/v3/trades", params)
    }

    /**
     * @param {SpotHistoricalTrades} params
     */
     async historicalTrades(params) {
        return await this.http.simplePublicGET("/api/v3/historicalTrades", params)
    }

    /**
     * @param {SpotAggTrades} params
     */
     async aggTrades(params) {
        return await this.http.simplePublicGET("/api/v3/aggTrades", params)
    }

    /**
     * @param {SpotKlines} params
     */
     async klines(params) {
        return await this.http.simplePublicGET("/api/v3/klines", params)
    }

    /**
     * @param {SpotUiKlines} params
     */
     async uiKlines(params) {
        return await this.http.simplePublicGET("/api/v3/uiKlines", params)
    }

    /**
     * @param {SpotAvgPrice} params
     */
     async avgPrice(params) {
        return await this.http.simplePublicGET("/api/v3/avgPrice", params)
    }

    /**
     * @param {SpotTicker24hr} params
     */
     async ticker24hr(params) {
        return await this.http.simplePublicGET("/api/v3/ticker/24hr", params)
    }

    /**
     * @param {SpotTickerPrice} params
     */
     async tickerPrice(params) {
        return await this.http.simplePublicGET("/api/v3/ticker/price", params)
    }

    /**
     * @param {SpotTickerBookTicker} params
     */
     async tickerBookTicker(params) {
        return await this.http.simplePublicGET("/api/v3/ticker/bookTicker", params)
    }

    /**
     * @param {SpotTicker} params
     */
     async ticker(params) {
        return await this.http.simplePublicGET("/api/v3/ticker", params)
    }
    // ########################################### Spot Account/Trade
    // ########### Private
    /**
     * @param {SpotPostOrderTest} params
     */
     async newOrderTest(params) {
        return await this.http.privatePOST("/api/v3/order/test", params)
    }

    /**
     * @param {SpotPostOrder} params
     */
     async newOrder(params) {
        return await this.http.privatePOST("/api/v3/order", params)
    }

    /**
     * @param {SpotDeleteOrder} params
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/api/v3/order", params)
    }

    /**
     * @param {SpotDeleteOpenOrders} params
     */
     async deleteOpenOrders(params) {
        return await this.http.privateDELETE("/api/v3/openOrders", params)
    }

    /**
     * @param {SpotOrder} params
     */
     async order(params) {
        return await this.http.privateGET("/api/v3/order", params)
    }

    /**
     * @param {SpotPostOrderCancelReplace} params
     */
     async newOrderCancelReplace(params) {
        return await this.http.privatePOST("/api/v3/order/cancelReplace", params)
    }

    /**
     * @param {SpotOpenOrders} params
     */
     async openOrders(params) {
        return await this.http.privateGET("/api/v3/openOrders", params)
    }

    /**
     * @param {SpotAllOrders} params
     */
     async allOrders(params) {
        return await this.http.privateGET("/api/v3/allOrders", params)
    }

    /**
     * @param {SpotPostOrderOco} params
     */
     async newOrderOco(params) {
        return await this.http.privatePOST("/api/v3/order/oco", params)
    }

    /**
     * @param {SpotDeleteOrderList} params
     */
     async deleteOrderList(params) {
        return await this.http.privateDELETE("/api/v3/orderList", params)
    }

    /**
     * @param {SpotOrderList} params
     */
     async orderList(params) {
        return await this.http.privateGET("/api/v3/orderList", params)
    }

    /**
     * @param {SpotAllOrderList} params
     */
     async allOrderList(params) {
        return await this.http.privateGET("/api/v3/allOrderList", params)
    }

    /**
     * @param {SpotOpenOrderList} [params]
     */
     async openOrderList(params) {
        return await this.http.privateGET("/api/v3/openOrderList", params)
    }

    /**
     * @param {SpotAccount} [params]
     */
     async account(params) {
        return await this.http.privateGET("/api/v3/account", params)
    }

    /**
     * @param {SpotMyTrades} params
     */
     async myTrades(params) {
        return await this.http.privateGET("/api/v3/myTrades", params)
    }

    /**
     * @param {SpotRateLimitOrder} params
     */
     async rateLimitOrder(params) {
        return await this.http.privateGET("/api/v3/rateLimit/order", params)
    }
    // ########################################### Margin Account/Trade
    // ########### Private
    /**
     * @param {SpotPostMarginTransfer} params
     */
     async newMarginTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/margin/transfer", params)
    }
    
    /**
     * @param {SpotPostMarginLoan} params
     */
     async newMarginLoan(params) {
        return await this.http.privatePOST("/sapi/v1/margin/loan", params)
    }
    
    /**
     * @param {SpotPostMarginRepay} params
     */
     async newMarginRepay(params) {
        return await this.http.privatePOST("/sapi/v1/margin/repay", params)
    }
    
    /**
     * @param {SpotMarginAsset} params
     */
     async marginAsset(params) {
        return await this.http.privateGET("/sapi/v1/margin/asset", params)
    }
    
    /**
     * @param {SpotMarginPair} params
     */
     async marginPair(params) {
        return await this.http.privateGET("/sapi/v1/margin/pair", params)
    }
    
    /**
     * @param {SpotMarginAllAssets} [params]
     */
     async marginAllAssets(params) {
        return await this.http.privateGET("/sapi/v1/margin/allAssets", params)
    }
    
    /**
     * @param {SpotMarginAllPairs} [params]
     */
     async marginAllPairs(params) {
        return await this.http.privateGET("/sapi/v1/margin/allPairs", params)
    }
    
    /**
     * @param {SpotMarginPriceIndex} params
     */
     async marginPriceIndex(params) {
        return await this.http.privateGET("/sapi/v1/margin/priceIndex", params)
    }
    
    /**
     * @param {SpotPostMarginOrder} params
     */
     async newMarginOrder(params) {
        return await this.http.privatePOST("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {SpotDeleteMarginOrder} params
     */
     async deleteMarginOrder(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {SpotDeleteMarginOpenOrders} params
     */
     async deleteMarginOpenOrders(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/openOrders", params)
    }
    
    /**
     * @param {SpotMarginTransfer} params
     */
     async marginTransfer(params) {
        return await this.http.privateGET("/sapi/v1/margin/transfer", params)
    }
    
    /**
     * @param {SpotMarginLoan} params
     */
     async marginLoan(params) {
        return await this.http.privateGET("/sapi/v1/margin/loan", params)
    }
    
    /**
     * @param {SpotMarginRepay} params
     */
     async marginRepay(params) {
        return await this.http.privateGET("/sapi/v1/margin/repay", params)
    }
    
    /**
     * @param {SpotMarginInterestHistory} params
     */
     async marginInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/margin/interestHistory", params)
    }
    
    /**
     * @param {SpotMarginForceLiquidationRec} params
     */
     async marginForceLiquidationRec(params) {
        return await this.http.privateGET("/sapi/v1/margin/forceLiquidationRec", params)
    }
    
    /**
     * @param {SpotMarginAccount} [params]
     */
     async marginAccount(params) {
        return await this.http.privateGET("/sapi/v1/margin/account", params)
    }
    
    /**
     * @param {SpotMarginOrder} params
     */
     async marginOrder(params) {
        return await this.http.privateGET("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {SpotMarginOpenOrders} params
     */
     async marginOpenOrders(params) {
        return await this.http.privateGET("/sapi/v1/margin/openOrders", params)
    }
    
    /**
     * @param {SpotMarginAllOrders} params
     */
     async marginAllOrders(params) {
        return await this.http.privateGET("/sapi/v1/margin/allOrders", params)
    }
    
    /**
     * @param {SpotPostMarginOrderOco} params
     */
     async newMarginOrderOco(params) {
        return await this.http.privatePOST("/sapi/v1/margin/order/oco", params)
    }
    
    /**
     * @param {SpotDeleteMarginOrderList} params
     */
     async deleteMarginOrderList(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/orderList", params)
    }
    
    /**
     * @param {SpotMarginOrderList} params
     */
     async marginOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/orderList", params)
    }
    
    /**
     * @param {SpotMarginAllOrderList} params
     */
     async marginAllOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/allOrderList", params)
    }
    
    /**
     * @param {SpotMarginOpenOrderList} params
     */
     async marginOpenOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/openOrderList", params)
    }
    
    /**
     * @param {SpotMarginMyTrades} params
     */
     async marginMyTrades(params) {
        return await this.http.privateGET("/sapi/v1/margin/myTrades", params)
    }
    
    /**
     * @param {SpotMarginMaxBorrowable} params
     */
     async marginMaxBorrowable(params) {
        return await this.http.privateGET("/sapi/v1/margin/maxBorrowable", params)
    }
    
    /**
     * @param {SpotMarginMaxTransferable} params
     */
     async marginMaxTransferable(params) {
        return await this.http.privateGET("/sapi/v1/margin/maxTransferable", params)
    }
    
    /**
     * @param {SpotMarginTradeCoeff} [params]
     */
     async marginTradeCoeff(params) {
        return await this.http.privateGET("/sapi/v1/margin/tradeCoeff", params)
    }
    
    /**
     * @param {SpotPostMarginIsolatedTransfer} params
     */
     async newMarginIsolatedTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/transfer", params)
    }
    
    /**
     * @param {SpotMarginIsolatedTransfer} params
     */
     async marginIsolatedTransfer(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/transfer", params)
    }
    
    /**
     * @param {SpotMarginIsolatedAccount} params
     */
     async marginIsolatedAccount(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {SpotDeleteMarginIsolatedAccount} params
     */
     async deleteMarginIsolatedAccount(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {SpotPostMarginIsolatedAccount} params
     */
     async newMarginIsolatedAccount(params) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {SpotMarginIsolatedAccountLimit} [params]
     */
     async marginIsolatedAccountLimit(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/accountLimit", params)
    }
    
    /**
     * @param {SpotMarginIsolatedPair} params
     */
     async marginIsolatedPair(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/pair", params)
    }
    
    /**
     * @param {SpotMarginIsolatedAllPairs} [params]
     */
     async marginIsolatedAllPairs(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/allPairs", params)
    }
    
    /**
     * @param {SpotPostBnbBurn} params
     */
     async newBnbBurn(params) {
        return await this.http.privatePOST("/sapi/v1/bnbBurn", params)
    }
    
    /**
     * @param {SpotBnbBurn} [params]
     */
     async bnbBurn(params) {
        return await this.http.privateGET("/sapi/v1/bnbBurn", params)
    }
    
    /**
     * @param {SpotMarginInterestRateHistory} params
     */
     async marginInterestRateHistory(params) {
        return await this.http.privateGET("/sapi/v1/margin/interestRateHistory", params)
    }
    
    /**
     * @param {SpotMarginCrossMarginData} params
     */
     async marginCrossMarginData(params) {
        return await this.http.privateGET("/sapi/v1/margin/crossMarginData", params)
    }
    
    /**
     * @param {SpotMarginIsolatedMarginData} params
     */
     async marginIsolatedMarginData(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginData", params)
    }
    
    /**
     * @param {SpotMarginIsolatedMarginTier} params
     */
     async marginIsolatedMarginTier(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginTier", params)
    }
    
    /**
     * @param {SpotMarginRateLimitOrder} params
     */
     async marginRateLimitOrder(params) {
        return await this.http.privateGET("/sapi/v1/margin/rateLimit/order", params)
    }
    
    /**
     * @param {SpotMarginDribblet} params
     */
     async marginDribblet(params) {
        return await this.http.privateGET("/sapi/v1/margin/dribblet", params)
    }
    // ########################################### Savings Endpoints
    // ########### Private
    /**
     * @param {SpotLendingDailyProductList} params
     */
     async lendingDailyProductList(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/product/list", params)
    }

    /**
     * @param {SpotLendingDailyUserLeftQuota} params
     */
     async lendingDailyUserLeftQuota(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userLeftQuota", params)
    }

    /**
     * @param {SpotPostLendingDailyPurchase} params
     */
     async newLendingDailyPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/purchase", params)
    }

    /**
     * @param {SpotLendingDailyUserRedemptionQuota} params
     */
     async lendingDailyUserRedemptionQuota(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userRedemptionQuota", params)
    }

    /**
     * @param {SpotPostLendingDailyRedeem} params
     */
     async newLendingDailyRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/redeem", params)
    }

    /**
     * @param {SpotLendingDailyTokenPosition} params
     */
     async lendingDailyTokenPosition(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/token/position", params)
    }

    /**
     * @param {SpotLendingProjectList} params
     */
     async lendingProjectList(params) {
        return await this.http.privateGET("/sapi/v1/lending/project/list", params)
    }

    /**
     * @param {SpotPostLendingCustomizedFixedPurchase} params
     */
     async newLendingCustomizedFixedPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/lending/customizedFixed/purchase", params)
    }

    /**
     * @param {SpotLendingProjectPositionList} params
     */
     async lendingProjectPositionList(params) {
        return await this.http.privateGET("/sapi/v1/lending/project/position/list", params)
    }

    /**
     * @param {SpotLendingUnionAccount} [params]
     */
     async lendingUnionAccount(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/account", params)
    }

    /**
     * @param {SpotLendingUnionPurchaseRecord} params
     */
     async lendingUnionPurchaseRecord(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/purchaseRecord", params)
    }

    /**
     * @param {SpotLendingUnionRedemptionRecord} params
     */
     async lendingUnionRedemptionRecord(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/redemptionRecord", params)
    }

    /**
     * @param {SpotLendingUnionInterestHistory} params
     */
     async lendingUnionInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/interestHistory", params)
    }

    /**
     * @param {SpotPostLendingPositionChanged} params
     */
     async newLendingPositionChanged(params) {
        return await this.http.privatePOST("/sapi/v1/lending/positionChanged", params)
    }
    // ########################################### Stacking Endpoints
    // ########### Private
    /**
     * @param {SpotStakingProductList} params
     */
     async stakingProductList(params) {
        return await this.http.privateGET("/sapi/v1/staking/productList", params)
    }

    /**
     * @param {SpotPostStakingPurchase} params
     */
     async newStakingPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/staking/purchase", params)
    }

    /**
     * @param {SpotPostStakingRedeem} params
     */
     async newStakingRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/staking/redeem", params)
    }

    /**
     * @param {SpotStakingPosition} params
     */
     async stakingPosition(params) {
        return await this.http.privateGET("/sapi/v1/staking/position", params)
    }

    /**
     * @param {SpotStakingStakingRecord} params
     */
     async stakingStakingRecord(params) {
        return await this.http.privateGET("/sapi/v1/staking/stakingRecord", params)
    }

    /**
     * @param {SpotPostStakingSetAutoStaking} params
     */
     async newStakingSetAutoStaking(params) {
        return await this.http.privatePOST("/sapi/v1/staking/setAutoStaking", params)
    }

    /**
     * @param {SpotStakingPersonalLeftQuota} params
     */
     async stakingPersonalLeftQuota(params) {
        return await this.http.privateGET("/sapi/v1/staking/personalLeftQuota", params)
    }
    // ########################################### Mining Endpoints
    // ########### Private
    /**
     * @param {SpotMiningPubAlgoList} [params]
     */
     async miningPubAlgoList(params) {
        return await this.http.privateGET("/sapi/v1/mining/pub/algoList", params)
    }

    /**
     * @param {SpotMiningPubCoinList} [params]
     */
     async miningPubCoinList(params) {
        return await this.http.privateGET("/sapi/v1/mining/pub/coinList", params)
    }

    /**
     * @param {SpotMiningWorkerDetail} params
     */
     async miningWorkerDetail(params) {
        return await this.http.privateGET("/sapi/v1/mining/worker/detail", params)
    }

    /**
     * @param {SpotMiningWorkerList} params
     */
     async miningWorkerList(params) {
        return await this.http.privateGET("/sapi/v1/mining/worker/list", params)
    }

    /**
     * @param {SpotMiningPaymentList} params
     */
     async miningPaymentList(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/list", params)
    }

    /**
     * @param {SpotMiningPaymentOther} params
     */
     async miningPaymentOther(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/other", params)
    }

    /**
     * @param {SpotMiningHashTransferConfigDetailsList} params
     */
     async miningHashTransferConfigDetailsList(params) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/config/details/list", params)
    }

    /**
     * @param {SpotMiningHashTransferProfitDetails} params
     */
     async miningHashTransferProfitDetails(params) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/profit/details", params)
    }

    /**
     * @param {SpotPostMiningHashTransferConfig} params
     */
     async newMiningHashTransferConfig(params) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config", params)
    }

    /**
     * @param {SpotPostMiningHashTransferConfigCancel} params
     */
     async deleteMiningHashTransferConfigCancel(params) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config/cancel", params)
    }

    /**
     * @param {SpotMiningStatisticsUserStatus} params
     */
     async miningStatisticsUserStatus(params) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/status", params)
    }

    /**
     * @param {SpotMiningStatisticsUserList} params
     */
     async miningStatisticsUserList(params) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/list", params)
    }

    /**
     * @param {SpotMiningPaymentUid} params
     */
     async miningPaymentUid(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/uid", params)
    }
    // ########################################### Futures
    // ########### Private
    /**
     * @param {SpotPostFuturesTransfer} params
     */
     async newFuturesTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/futures/transfer", params)
    }

    /**
     * @param {SpotFuturesTransfer} params
     */
     async futuresTransfer(params) {
        return await this.http.privateGET("/sapi/v1/futures/transfer", params)
    }

    /**
     * @param {SpotFuturesLoanBorrowHistory} params
     */
     async futuresLoanBorrowHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/borrow/history", params)
    }

    /**
     * @param {SpotFuturesLoanRepayHistory} params
     */
     async futuresLoanRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/repay/history", params)
    }

    /**
     * @param {SpotFuturesLoanWallet} [params]
     */
     async futuresLoanWallet(params) {
        return await this.http.privateGET("/sapi/v2/futures/loan/wallet", params)
    }

    /**
     * @param {SpotFuturesLoanAdjustCollateralHistory} params
     */
     async futuresLoanAdjustCollateralHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/adjustCollateral/history", params)
    }

    /**
     * @param {SpotFuturesLoanLiquidationHistory} params
     */
     async futuresLoanLiquidationHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/liquidationHistory", params)
    }

    /**
     * @param {SpotFuturesLoanInterestHistory} params
     */
     async futuresLoanInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/interestHistory", params)
    }
    // ########################################### Futures Algo Endpoints
    // ########### Private
    /**
     * @param {SpotPostAlgoFuturesNewOrderVp} params
     */
     async newAlgoFuturesNewOrderVp(params) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderVp", params)
    }

    /**
     * @param {SpotPostAlgoFuturesNewOrderTwap} params
     */
     async newAlgoFuturesNewOrderTwap(params) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderTwap", params)
    }

    /**
     * @param {SpotDeleteAlgoFuturesOrder} params
     */
     async deleteAlgoFuturesOrder(params) {
        return await this.http.privateDELETE("/sapi/v1/algo/futures/order", params)
    }

    /**
     * @param {SpotAlgoFuturesOpenOrders} [params]
     */
     async algoFuturesOpenOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/openOrders", params)
    }

    /**
     * @param {SpotAlgoFuturesHistoricalOrders} params
     */
     async algoFuturesHistoricalOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/historicalOrders", params)
    }

    /**
     * @param {SpotAlgoFuturesSubOrders} params
     */
     async algoFuturesSubOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/subOrders", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Private
    /**
     * @param {SpotPortfolioAccount} [params]
     */
     async portfolioAccount(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/account", params)
    }

    /**
     * @param {SpotPortfolioCollateralRate} [params]
     */
     async portfolioCollateralRate(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/collateralRate", params)
    }

    /**
     * @param {SpotPortfolioPmLoan} [params]
     */
     async portfolioPmLoan(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/pmLoan", params)
    }

    /**
     * @param {SpotPostPortfolioRepay} [params]
     */
     async newPortfolioRepay(params) {
        return await this.http.privatePOST("/sapi/v1/portfolio/repay", params)
    }
    // ########################################### BLVT Endpoints
    // ########### Private
    /**
     * @param {SpotBlvtTokenInfo} params
     */
     async blvtTokenInfo(params) {
        return await this.http.privateGET("/sapi/v1/blvt/tokenInfo", params)
    }

    /**
     * @param {SpotPostBlvtSubscribe} params
     */
     async newBlvtSubscribe(params) {
        return await this.http.privatePOST("/sapi/v1/blvt/subscribe", params)
    }

    /**
     * @param {SpotBlvtSubscribeRecord} params
     */
     async blvtSubscribeRecord(params) {
        return await this.http.privateGET("/sapi/v1/blvt/subscribe/record", params)
    }

    /**
     * @param {SpotPostBlvtRedeem} params
     */
     async newBlvtRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/blvt/redeem", params)
    }

    /**
     * @param {SpotBlvtRedeemRecord} params
     */
     async blvtRedeemRecord(params) {
        return await this.http.privateGET("/sapi/v1/blvt/redeem/record", params)
    }

    /**
     * @param {SpotBlvtUserLimit} params
     */
     async blvtUserLimit(params) {
        return await this.http.privateGET("/sapi/v1/blvt/userLimit", params)
    }
    // ########################################### BSwap Endpoints
    // ########### Private
    /**
     * @param {SpotBswapPools} [params]
     */
     async bswapPools(params) {
        return await this.http.privateGET("/sapi/v1/bswap/pools", params)
    }

    /**
     * @param {SpotBswapLiquidity} params
     */
     async bswapLiquidity(params) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidity", params)
    }

    /**
     * @param {SpotPostBswapLiquidityAdd} params
     */
     async newBswapLiquidityAdd(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityAdd", params)
    }

    /**
     * @param {SpotPostBswapLiquidityRemove} params
     */
     async deleteBswapLiquidityRemove(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityRemove", params)
    }

    /**
     * @param {SpotBswapLiquidityOps} params
     */
     async bswapLiquidityOps(params) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidityOps", params)
    }

    /**
     * @param {SpotBswapQuote} params
     */
     async bswapQuote(params) {
        return await this.http.privateGET("/sapi/v1/bswap/quote", params)
    }

    /**
     * @param {SpotPostBswapSwap} params
     */
     async newBswapSwap(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/swap", params)
    }

    /**
     * @param {SpotBswapSwap} params
     */
     async bswapSwap(params) {
        return await this.http.privateGET("/sapi/v1/bswap/swap", params)
    }

    /**
     * @param {SpotBswapPoolConfigure} params
     */
     async bswapPoolConfigure(params) {
        return await this.http.privateGET("/sapi/v1/bswap/poolConfigure", params)
    }

    /**
     * @param {SpotBswapAddLiquidityPreview} params
     */
     async bswapAddLiquidityPreview(params) {
        return await this.http.privateGET("/sapi/v1/bswap/addLiquidityPreview", params)
    }

    /**
     * @param {SpotBswapRemoveLiquidityPreview} params
     */
     async bswapRemoveLiquidityPreview(params) {
        return await this.http.privateGET("/sapi/v1/bswap/removeLiquidityPreview", params)
    }

    /**
     * @param {SpotBswapUnclaimedRewards} params
     */
     async bswapUnclaimedRewards(params) {
        return await this.http.privateGET("/sapi/v1/bswap/unclaimedRewards", params)
    }

    /**
     * @param {SpotPostBswapClaimRewards} params
     */
     async newBswapClaimRewards(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/claimRewards", params)
    }

    /**
     * @param {SpotBswapClaimedHistory} params
     */
     async bswapClaimedHistory(params) {
        return await this.http.privateGET("/sapi/v1/bswap/claimedHistory", params)
    }
    // ########################################### Fiat Endpoints
    // ########### Private
    /**
     * @param {SpotFiatOrders} params
     */
     async fiatOrders(params) {
        return await this.http.privateGET("/sapi/v1/fiat/orders", params)
    }

    /**
     * @param {SpotFiatPayments} params
     */
     async fiatPayments(params) {
        return await this.http.privateGET("/sapi/v1/fiat/payments", params)
    }
    // ########################################### C2C Endpoints
    // ########### Private
    /**
     * @param {SpotC2cOrderMatchListUserOrderHistory} params
     */
     async c2cOrderMatchListUserOrderHistory(params) {
        return await this.http.privateGET("/sapi/v1/c2c/orderMatch/listUserOrderHistory", params)
    }
    // ########################################### VIP Loans Endpoints
    // ########### Private
    /**
     * @param {SpotLoanVipOngoingOrders} params
     */
     async loanVipOngoingOrders(params) {
        return await this.http.privateGET("/sapi/v1/loan/vip/ongoing/orders", params)
    }

    /**
     * @param {SpotPostLoanVipRepay} params
     */
     async newLoanVipRepay(params) {
        return await this.http.privatePOST("/sapi/v1/loan/vip/repay", params)
    }

    /**
     * @param {SpotLoanVipRepayHistory} params
     */
     async loanVipRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/vip/repay/history", params)
    }
    // ########################################### Crypto Loans Endpoints
    // ########### Private
    /**
     * @param {SpotLoanIncome} params
     */
     async loanIncome(params) {
        return await this.http.privateGET("/sapi/v1/loan/income", params)
    }

    /**
     * @param {SpotPostLoanBorrow} params
     */
     async newLoanBorrow(params) {
        return await this.http.privatePOST("/sapi/v1/loan/borrow", params)
    }

    /**
     * @param {SpotLoanBorrowHistory} params
     */
     async loanBorrowHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/borrow/history", params)
    }

    /**
     * @param {SpotLoanOngoingOrders} params
     */
     async loanOngoingOrders(params) {
        return await this.http.privateGET("/sapi/v1/loan/ongoing/orders", params)
    }

    /**
     * @param {SpotPostLoanRepay} params
     */
     async newLoanRepay(params) {
        return await this.http.privatePOST("/sapi/v1/loan/repay", params)
    }

    /**
     * @param {SpotLoanRepayHistory} params
     */
     async loanRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/repay/history", params)
    }

    /**
     * @param {SpotPostLoanAdjustLtv} params
     */
     async newLoanAdjustLtv(params) {
        return await this.http.privatePOST("/sapi/v1/loan/adjust/ltv", params)
    }

    /**
     * @param {SpotLoanLtvAdjustmentHistory} params
     */
     async loanLtvAdjustmentHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/ltv/adjustment/history", params)
    }

    /**
     * @param {SpotLoanLoanableData} params
     */
     async loanLoanableData(params) {
        return await this.http.privateGET("/sapi/v1/loan/loanable/data", params)
    }

    /**
     * @param {SpotLoanCollateralData} params
     */
     async loanCollateralData(params) {
        return await this.http.privateGET("/sapi/v1/loan/collateral/data", params)
    }

    /**
     * @param {SpotLoanRepayCollateralRate} params
     */
     async loanRepayCollateralRate(params) {
        return await this.http.privateGET("/sapi/v1/loan/repay/collateral/rate", params)
    }

    /**
     * @param {SpotPostLoanCustomizeMarginCall} params
     */
     async newLoanCustomizeMarginCall(params) {
        return await this.http.privatePOST("/sapi/v1/loan/customize/margin_call", params)
    }
    // ########################################### Pay Endpoints
    // ########### Private
    /**
     * @param {SpotPayTransactions} params
     */
     async payTransactions(params) {
        return await this.http.privateGET("/sapi/v1/pay/transactions", params)
    }
    // ########################################### Convert Endpoints
    // ########### Private
    /**
     * @param {SpotConvertExchangeInfo} params
     */
     async convertExchangeInfo(params) {
        return await this.http.privateGET("/sapi/v1/convert/exchangeInfo", params)
    }

    /**
     * @param {SpotConvertAssetInfo} [params]
     */
     async convertAssetInfo(params) {
        return await this.http.privateGET("/sapi/v1/convert/assetInfo", params)
    }

    /**
     * @param {SpotPostConvertGetQuote} params
     */
     async newConvertGetQuote(params) {
        return await this.http.privatePOST("/sapi/v1/convert/getQuote", params)
    }

    /**
     * @param {SpotPostConvertAcceptQuote} params
     */
     async newConvertAcceptQuote(params) {
        return await this.http.privatePOST("/sapi/v1/convert/acceptQuote", params)
    }

    /**
     * @param {SpotConvertOrderStatus} params
     */
     async convertOrderStatus(params) {
        return await this.http.privateGET("/sapi/v1/convert/orderStatus", params)
    }

    /**
     * @param {SpotConvertTradeFlow} params
     */
     async convertTradeFlow(params) {
        return await this.http.privateGET("/sapi/v1/convert/tradeFlow", params)
    }
    // ########################################### Rebate Endpoints
    // ########### Private
    /**
     * @param {SpotRebateTaxQuery} params
     */
     async rebateTaxQuery(params) {
        return await this.http.privateGET("/sapi/v1/rebate/taxQuery", params)
    }
    // ########################################### NFT Endpoints
    // ########### Private
    /**
     * @param {SpotNftHistoryTransactions} params
     */
     async nftHistoryTransactions(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/transactions", params)
    }

    /**
     * @param {SpotNftHistoryDeposit} params
     */
     async nftHistoryDeposit(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/deposit", params)
    }

    /**
     * @param {SpotNftHistoryWithdraw} params
     */
     async nftHistoryWithdraw(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/withdraw", params)
    }

    /**
     * @param {SpotNftUserGetAsset} params
     */
     async nftUserGetAsset(params) {
        return await this.http.privateGET("/sapi/v1/nft/user/getAsset", params)
    }
    // ########################################### Binance Code Endpoints
    // ########### Private
    /**
     * @param {SpotPostGiftcardCreateCode} params
     */
     async newGiftcardCreateCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/createCode", params)
    }

    /**
     * @param {SpotPostGiftcardRedeemCode} params
     */
     async newGiftcardRedeemCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/redeemCode", params)
    }

    /**
     * @param {SpotGiftcardVerify} params
     */
     async giftCardVerify(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/verify", params)
    }

    /**
     * @param {SpotGiftcardCryptographyRsaPublicKey} [params]
     */
     async giftCardCryptographyRsaPublicKey(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/cryptography/rsa-public-key", params)
    }

    /**
     * @param {SpotPostGiftcardBuyCode} params
     */
     async newGiftCardBuyCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/buyCode", params)
    }

    /**
     * @param {SpotGiftcardBuyCodeTokenLimit} params
     */
     async giftcardBuyCodeTokenLimit(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/buyCode/token-limit", params)
    }

    // ################# Listen Key
    // ###### Listen Key - SPOT
    /**
     * @param { SpotPostListenKeySPOT } [params]
     */
    async newListenKeySPOT(params) {
        return await this.http.simplePublicPOST("/api/v3/userDataStream", params)
    }

    /**
     * @param { SpotPutListenKeySPOT} [params]
     */
    async keepAliveListenKeySPOT(params) {
        return await this.http.simplePublicPUT("/api/v3/userDataStream", params)
    }

    /**
     * @param { SpotDeleteListenKeySPOT } [params]
     */
    async deleteListenKeySPOT(params) {
        return await this.http.simplePublicDELETE("/api/v3/userDataStream", params)
    }
    // ###### Listen Key - Margin
    /**
     * @param { SpotPostListenKeyMARGIN } [params]
     */
     async newListenKeyMARGIN(params) {
        return await this.http.simplePublicPOST("/sapi/v1/userDataStream", params)
    }

    /**
     * @param { SpotPutListenKeyMARGIN } [params]
     */
    async keepAliveListenKeyMARGIN(params) {
        return await this.http.simplePublicPUT("/sapi/v1/userDataStream", params)
    }

    /**
     * @param { SpotDeleteListenKeyMARGIN } [params]
     */
    async deleteListenKeyMARGIN(params) {
        return await this.http.simplePublicDELETE("/sapi/v1/userDataStream", params)
    }
    // ###### Listen Key - Isolated Margin
    /**
     * @param { SpotPostListenKeyISOMARGIN } [params]
     */
     async newListenKeyISOMARGIN(params) {
        return await this.http.simplePublicPOST("/sapi/v1/userDataStream/isolated", params)
    }

    /**
     * @param { SpotPutListenKeyISOMARGIN } [params]
     */
    async keepAliveListenKeyISOMARGIN(params) {
        return await this.http.simplePublicPUT("/sapi/v1/userDataStream/isolated", params)
    }

    /**
     * @param { SpotDeleteListenKeyISOMARGIN } [params]
     */
    async deleteListenKeyISOMARGIN(params) {
        return await this.http.simplePublicDELETE("/sapi/v1/userDataStream/isolated", params)
    }
}