import { Websocket } from "./websocket.js"
import { Http } from "./http.js"
import("../types/spot.types.js")

/**
 * @TODO https://binance-docs.github.io/apidocs/spot/en/#websocket-blvt-info-streams
 */

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
     * @param {SpotJustRecvWindow} [params]
     */
    async systemStatus(params) {
        return await this.http.publicGET("/sapi/v1/system/status", params)
    }
    
    // ########### Private
    /**
     * @param {} [params]
     */
    async capitalConfigGetAll(params) {
        return await this.http.privateGET("/sapi/v1/capital/config/getall", params)
    }


    /**
     * @param {} [params]
     */
    async accountSnapshot(params) {
        return await this.http.privateGET("/sapi/v1/accountSnapshot", params)
    }

    /**
     * @param {} [params]
     */
    async accountDisableFastWithdrawSwitch(params) {
        return await this.http.privateGET("/sapi/v1/account/disableFastWithdrawSwitch", params)
    }

    /**
     * @param {} [params]
     */
    async newAccountEnableFastWithdrawSwitch(params) {
        return await this.http.privatePOST("/sapi/v1/account/enableFastWithdrawSwitch", params)
    }

    /**
     * @param {} [params]
     */
    async newCapitalWithdrawApply(params) {
        return await this.http.privatePOST("/sapi/v1/capital/withdraw/apply", params)
    }

    /**
     * @param {} [params]
     */
    async capitalDepositHisrec(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/hisrec", params)
    }

    /**
     * @param {} [params]
     */
    async capitalWithdrawHistory(params) {
        return await this.http.privateGET("/sapi/v1/capital/withdraw/history", params)
    }

    /**
     * @param {} [params]
     */
    async capitalDepositAddress(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/address", params)
    }

    /**
     * @param {} [params]
     */
    async accountStatus(params) {
        return await this.http.privateGET("/sapi/v1/account/status", params)
    }

    /**
     * @param {} [params]
     */
    async accountApiTradingStatus(params) {
        return await this.http.privateGET("/sapi/v1/account/apiTradingStatus", params)
    }

    /**
     * @param {} [params]
     */
    async assetDribblet(params) {
        return await this.http.privateGET("/sapi/v1/asset/dribblet", params)
    }

    /**
     * @param {} [params]
     */
    async newAssetDustBTC(params) {
        return await this.http.privatePOST("/sapi/v1/asset/dust-btc", params)
    }

    /**
     * @param {} [params]
     */
    async newAssetDust(params) {
        return await this.http.privatePOST("/sapi/v1/asset/dust", params)
    }

    /**
     * @param {} [params]
     */
    async assetAssetDividend(params) {
        return await this.http.privateGET("/sapi/v1/asset/assetDividend", params)
    }
    
    /**
     * @param {} [params]
     */
    async assetAssetDetail(params) {
        return await this.http.privateGET("/sapi/v1/asset/assetDetail", params)
    }

    /**
     * @param {} [params]
     */
    async assetTradeFee(params) {
        return await this.http.privateGET("/sapi/v1/asset/tradeFee", params)
    }

    /**
     * @param {} [params]
     */
    async newAssetTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/asset/transfer", params)
    }

    /**
     * @param {} [params]
     */
    async assetTransfer(params) {
        return await this.http.privateGET("/sapi/v1/asset/transfer", params)
    }

    /**
     * @param {} [params]
     */
    async assetGetFundingAsset(params) {
        return await this.http.privatePOST("/sapi/v1/asset/get-funding-asset", params)
    }

    /**
     * @param {} [params]
     */
    async assetGetUserAsset(params) {
        return await this.http.privatePOST("/sapi/v3/asset/getUserAsset", params)
    }

    /**
     * @param {} [params]
     */
    async newAssetConvertTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/asset/convert-transfer", params)
    }

    /**
     * @param {} [params]
     */
    async assetConvertTransferQueryByPage(params) {
        return await this.http.privateGET("/sapi/v1/asset/convert-transfer/queryByPage", params)
    }

    /**
     * @param {} [params]
     */
    async assetLedgerTransferCloudMiningQueryByPage(params) {
        return await this.http.privateGET("/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage", params)
    }

    /**
     * @param {} [params]
     */
    async accountApiRestrictions(params) {
        return await this.http.privateGET("/sapi/v1/account/apiRestrictions", params)
    }
    
    // ########################################### Sub-Account Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
    async newSubAccountVirtualSubAccount(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/virtualSubAccount", params)
    }

    /**
     * @param {} [params]
     */
    async subAccountList(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/list", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountSubTransferHistory(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/sub/transfer/history", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountFuturesInternalTransfer(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/internalTransfer", params)
    }
 
    /**
     * @param {} [params]
     */
    async newSubAccountFuturesInternalTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/internalTransfer", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountAssets(params) {
        return await this.http.privateGET("/sapi/v3/sub-account/assets", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountSpotSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/spotSummary", params)
    }
 
    /**
     * @param {} [params]
     */
    async capitalDepositSubAddress(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subAddress", params)
    }
 
    /**
     * @param {} [params]
     */
    async capitalDepositSubHisrec(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subHisrec", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountStatus(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/status", params)
    }
 
    /**
     * @param {} [params]
     */
    async newSubAccountMarginEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/enable", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountMarginAccount(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/account", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountMarginAccountSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/accountSummary", params)
    }
 
    /**
     * @param {} [params]
     */
    async newSubAccountFuturesEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/enable", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountFuturesAccount(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/account", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountFuturesAccountSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/accountSummary", params)
    }
 
    /**
     * @param {} [params]
     */
    async subAccountFuturesPositionRisk(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/positionRisk", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountFuturesTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/transfer", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountMarginTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/transfer", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountTransferSubToSub(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToSub", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountTransferSubToMaster(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToMaster", params)
    }
   
    /**
     * @param {} [params]
     */
    async subAccountTransferSubUserHistory(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/transfer/subUserHistory", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountUniversalTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/universalTransfer", params)
    }
   
    /**
     * @param {} [params]
     */
    async subAccountUniversalTransfer(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/universalTransfer", params)
    }
   
    /**
     * @param {} [params]
     */
    async subAccountFuturesAccount(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/account", params)
    }
   
    /**
     * @param {} [params]
     */
    async subAccountFuturesAccountSummary(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/accountSummary", params)
    }
   
    /**
     * @param {} [params]
     */
    async subAccountFuturesPositionRisk(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/positionRisk", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountBlvtEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/blvt/enable", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountSubAccountApiIpRestriction(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {} [params]
     */
    async newSubAccountSubAccountApiIpRestrictionIpList(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }
   
    /**
     * @param {} [params]
     */
    async subAccountSubAccountApiIpRestriction(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {} [params]
     */
    async deleteSubAccountSubAccountApiIpRestrictionIpList(params) {
        return await this.http.privateDELETE("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }
   
    /**
     * @param {} [params]
     */
    async subAccountApiRestrictionsIpRestrictionThirdPartyList(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/apiRestrictions/ipRestriction/thirdPartyList", params)
    }
   
    /**
     * @param {} [params]
     */
    async updateSubAccountSubAccountApiIpRestriction(params) {
        return await this.http.privatePOST("/sapi/v2/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {} [params]
     */
    async newManagedSubaccountDeposit(params) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/deposit", params)
    }

    /**
     * @param {} [params]
     */
    async managedSubaccountAsset(params) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/asset", params)
    }

    /**
     * @param {} [params]
     */
    async newManagedSubaccountWithdraw(params) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/withdraw", params)
    }

    /**
     * @param {} [params]
     */
    async managedSubaccountAccountSnapshot(params) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/accountSnapshot", params)
    }
    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * @param {} [params]
     */
     async ping(params) {
        return await this.http.publicGET("/api/v3/ping", params)
    }

    /**
     * @param {} [params]
     */
     async time(params) {
        return await this.http.publicGET("/api/v3/time", params)
    }

    /**
     * @param {} [params]
     */
     async exchangeInfo(params) {
        return await this.http.publicGET("/api/v3/exchangeInfo", params)
    }

    /**
     * @param {} [params]
     */
     async depth(params) {
        return await this.http.publicGET("/api/v3/depth", params)
    }

    /**
     * @param {} [params]
     */
     async trades(params) {
        return await this.http.publicGET("/api/v3/trades", params)
    }

    /**
     * @param {} [params]
     */
     async historicalTrades(params) {
        return await this.http.publicGET("/api/v3/historicalTrades", params)
    }

    /**
     * @param {} [params]
     */
     async aggTrades(params) {
        return await this.http.publicGET("/api/v3/aggTrades", params)
    }

    /**
     * @param {} [params]
     */
     async klines(params) {
        return await this.http.publicGET("/api/v3/klines", params)
    }

    /**
     * @param {} [params]
     */
     async uiKlines(params) {
        return await this.http.publicGET("/api/v3/uiKlines", params)
    }

    /**
     * @param {} [params]
     */
     async avgPrice(params) {
        return await this.http.publicGET("/api/v3/avgPrice", params)
    }

    /**
     * @param {} [params]
     */
     async ticker24hr(params) {
        return await this.http.publicGET("/api/v3/ticker/24hr", params)
    }

    /**
     * @param {} [params]
     */
     async tickerPrice(params) {
        return await this.http.publicGET("/api/v3/ticker/price", params)
    }

    /**
     * @param {} [params]
     */
     async tickerBookTicker(params) {
        return await this.http.publicGET("/api/v3/ticker/bookTicker", params)
    }

    /**
     * @param {} [params]
     */
     async ticker(params) {
        return await this.http.publicGET("/api/v3/ticker", params)
    }
    // ########### Private

    // ########################################### Spot Account/Trade
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async newOrderTest(params) {
        return await this.http.privatePOST("/api/v3/order/test", params)
    }

    /**
     * @param {} [params]
     */
     async newOrder(params) {
        return await this.http.privatePOST("/api/v3/order", params)
    }

    /**
     * @param {} [params]
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/api/v3/order", params)
    }

    /**
     * @param {} [params]
     */
     async deleteOpenOrders(params) {
        return await this.http.privateDELETE("/api/v3/openOrders", params)
    }

    /**
     * @param {} [params]
     */
     async order(params) {
        return await this.http.privateGET("/api/v3/order", params)
    }

    /**
     * @param {} [params]
     */
     async newOrderCancelReplace(params) {
        return await this.http.privatePOST("/api/v3/order/cancelReplace", params)
    }

    /**
     * @param {} [params]
     */
     async openOrders(params) {
        return await this.http.privateGET("/api/v3/openOrders", params)
    }

    /**
     * @param {} [params]
     */
     async allOrders(params) {
        return await this.http.privateGET("/api/v3/allOrders", params)
    }

    /**
     * @param {} [params]
     */
     async newOrderOco(params) {
        return await this.http.privatePOST("/api/v3/order/oco", params)
    }

    /**
     * @param {} [params]
     */
     async deleteOrderList(params) {
        return await this.http.privateDELETE("/api/v3/orderList", params)
    }

    /**
     * @param {} [params]
     */
     async orderList(params) {
        return await this.http.privateGET("/api/v3/orderList", params)
    }

    /**
     * @param {} [params]
     */
     async allOrderList(params) {
        return await this.http.privateGET("/api/v3/allOrderList", params)
    }

    /**
     * @param {} [params]
     */
     async openOrderList(params) {
        return await this.http.privateGET("/api/v3/openOrderList", params)
    }

    /**
     * @param {} [params]
     */
     async account(params) {
        return await this.http.privateGET("/api/v3/account", params)
    }

    /**
     * @param {} [params]
     */
     async myTrades(params) {
        return await this.http.privateGET("/api/v3/myTrades", params)
    }

    /**
     * @param {} [params]
     */
     async rateLimitOrder(params) {
        return await this.http.privateGET("/api/v3/rateLimit/order", params)
    }
    // ########################################### Margin Account/Trade
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async newMarginTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/margin/transfer", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMarginLoan(params) {
        return await this.http.privatePOST("/sapi/v1/margin/loan", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMarginRepay(params) {
        return await this.http.privatePOST("/sapi/v1/margin/repay", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginAsset(params) {
        return await this.http.privateGET("/sapi/v1/margin/asset", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginPair(params) {
        return await this.http.privateGET("/sapi/v1/margin/pair", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginAllAssets(params) {
        return await this.http.privateGET("/sapi/v1/margin/allAssets", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginAllPairs(params) {
        return await this.http.privateGET("/sapi/v1/margin/allPairs", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginPriceIndex(params) {
        return await this.http.privateGET("/sapi/v1/margin/priceIndex", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMarginOrder(params) {
        return await this.http.privatePOST("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {} [params]
     */
     async deleteMarginOrder(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {} [params]
     */
     async deleteMarginOpenOrders(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/openOrders", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginTransfer(params) {
        return await this.http.privateGET("/sapi/v1/margin/transfer", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginLoan(params) {
        return await this.http.privateGET("/sapi/v1/margin/loan", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginRepay(params) {
        return await this.http.privateGET("/sapi/v1/margin/repay", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/margin/interestHistory", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginForceLiquidationRec(params) {
        return await this.http.privateGET("/sapi/v1/margin/forceLiquidationRec", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginAccount(params) {
        return await this.http.privateGET("/sapi/v1/margin/account", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginOrder(params) {
        return await this.http.privateGET("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginOpenOrders(params) {
        return await this.http.privateGET("/sapi/v1/margin/openOrders", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginAllOrders(params) {
        return await this.http.privateGET("/sapi/v1/margin/allOrders", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMarginOrderOco(params) {
        return await this.http.privatePOST("/sapi/v1/margin/order/oco", params)
    }
    
    /**
     * @param {} [params]
     */
     async deleteMarginOrderList(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/orderList", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/orderList", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginAllOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/allOrderList", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginOpenOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/openOrderList", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginMyTrades(params) {
        return await this.http.privateGET("/sapi/v1/margin/myTrades", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginMaxBorrowable(params) {
        return await this.http.privateGET("/sapi/v1/margin/maxBorrowable", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginMaxTransferable(params) {
        return await this.http.privateGET("/sapi/v1/margin/maxTransferable", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginTradeCoeff(params) {
        return await this.http.privateGET("/sapi/v1/margin/tradeCoeff", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMarginIsolatedTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/transfer", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginIsolatedTransfer(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/transfer", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginIsolatedAccount(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {} [params]
     */
     async deleteMarginIsolatedAccount(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {} [params]
     */
     async newMarginIsolatedAccount(params) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginIsolatedAccountLimit(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/accountLimit", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginIsolatedPair(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/pair", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginIsolatedAllPairs(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/allPairs", params)
    }
    
    /**
     * @param {} [params]
     */
     async newBnbBurn(params) {
        return await this.http.privatePOST("/sapi/v1/bnbBurn", params)
    }
    
    /**
     * @param {} [params]
     */
     async bnbBurn(params) {
        return await this.http.privateGET("/sapi/v1/bnbBurn", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginInterestRateHistory(params) {
        return await this.http.privateGET("/sapi/v1/margin/interestRateHistory", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginCrossMarginData(params) {
        return await this.http.privateGET("/sapi/v1/margin/crossMarginData", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginIsolatedMarginData(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginData", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginIsolatedMarginTier(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginTier", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginRateLimitOrder(params) {
        return await this.http.privateGET("/sapi/v1/margin/rateLimit/order", params)
    }
    
    /**
     * @param {} [params]
     */
     async marginDribblet(params) {
        return await this.http.privateGET("/sapi/v1/margin/dribblet", params)
    }
    // ########################################### Savings Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async lendingDailyProductList(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/product/list", params)
    }

    /**
     * @param {} [params]
     */
     async lendingDailyUserLeftQuota(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userLeftQuota", params)
    }

    /**
     * @param {} [params]
     */
     async newLendingDailyPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/purchase", params)
    }

    /**
     * @param {} [params]
     */
     async lendingDailyUserRedemptionQuota(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userRedemptionQuota", params)
    }

    /**
     * @param {} [params]
     */
     async newLendingDailyRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/redeem", params)
    }

    /**
     * @param {} [params]
     */
     async lendingDailyTokenPosition(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/token/position", params)
    }

    /**
     * @param {} [params]
     */
     async lendingProjectList(params) {
        return await this.http.privateGET("/sapi/v1/lending/project/list", params)
    }

    /**
     * @param {} [params]
     */
     async newLendingCustomizedFixedPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/lending/customizedFixed/purchase", params)
    }

    /**
     * @param {} [params]
     */
     async lendingProjectPositionList(params) {
        return await this.http.privateGET("/sapi/v1/lending/project/position/list", params)
    }

    /**
     * @param {} [params]
     */
     async lendingUnionAccount(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/account", params)
    }

    /**
     * @param {} [params]
     */
     async lendingUnionPurchaseRecord(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/purchaseRecord", params)
    }

    /**
     * @param {} [params]
     */
     async lendingUnionRedemptionRecord(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/redemptionRecord", params)
    }

    /**
     * @param {} [params]
     */
     async lendingUnionInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/interestHistory", params)
    }

    /**
     * @param {} [params]
     */
     async newLendingPositionChanged(params) {
        return await this.http.privatePOST("/sapi/v1/lending/positionChanged", params)
    }
    // ########################################### Stacking Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async stakingProductList(params) {
        return await this.http.privateGET("/sapi/v1/staking/productList", params)
    }

    /**
     * @param {} [params]
     */
     async newStakingPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/staking/purchase", params)
    }

    /**
     * @param {} [params]
     */
     async newStakingRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/staking/redeem", params)
    }

    /**
     * @param {} [params]
     */
     async stakingPosition(params) {
        return await this.http.privateGET("/sapi/v1/staking/position", params)
    }

    /**
     * @param {} [params]
     */
     async stakingStakingRecord(params) {
        return await this.http.privateGET("/sapi/v1/staking/stakingRecord", params)
    }

    /**
     * @param {} [params]
     */
     async newStakingSetAutoStaking(params) {
        return await this.http.privatePOST("/sapi/v1/staking/setAutoStaking", params)
    }

    /**
     * @param {} [params]
     */
     async stakingPersonalLeftQuota(params) {
        return await this.http.privateGET("/sapi/v1/staking/personalLeftQuota", params)
    }
    // ########################################### Mining Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async miningPubAlgoList(params) {
        return await this.http.privateGET("/sapi/v1/mining/pub/algoList", params)
    }

    /**
     * @param {} [params]
     */
     async miningPubCoinList(params) {
        return await this.http.privateGET("/sapi/v1/mining/pub/coinList", params)
    }

    /**
     * @param {} [params]
     */
     async miningWorkerDetail(params) {
        return await this.http.privateGET("/sapi/v1/mining/worker/detail", params)
    }

    /**
     * @param {} [params]
     */
     async miningWorkerList(params) {
        return await this.http.privateGET("/sapi/v1/mining/worker/list", params)
    }

    /**
     * @param {} [params]
     */
     async miningPaymentList(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/list", params)
    }

    /**
     * @param {} [params]
     */
     async miningPaymentOther(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/other", params)
    }

    /**
     * @param {} [params]
     */
     async miningHashTransferConfigDetailsList(params) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/config/details/list", params)
    }

    /**
     * @param {} [params]
     */
     async miningHashTransferProfitDetails(params) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/profit/details", params)
    }

    /**
     * @param {} [params]
     */
     async newMiningHashTransferConfig(params) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config", params)
    }

    /**
     * @param {} [params]
     */
     async deleteMiningHashTransferConfigCancel(params) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config/cancel", params)
    }

    /**
     * @param {} [params]
     */
     async miningStatisticsUserStatus(params) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/status", params)
    }

    /**
     * @param {} [params]
     */
     async miningStatisticsUserList(params) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/list", params)
    }

    /**
     * @param {} [params]
     */
     async miningPaymentUid(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/uid", params)
    }
    // ########################################### Futures
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async newFuturesTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/futures/transfer", params)
    }

    /**
     * @param {} [params]
     */
     async futuresTransfer(params) {
        return await this.http.privateGET("/sapi/v1/futures/transfer", params)
    }

    /**
     * @param {} [params]
     */
     async futuresLoanBorrowHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/borrow/history", params)
    }

    /**
     * @param {} [params]
     */
     async futuresLoanRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/repay/history", params)
    }

    /**
     * @param {} [params]
     */
     async futuresLoanWallet(params) {
        return await this.http.privateGET("/sapi/v2/futures/loan/wallet", params)
    }

    /**
     * @param {} [params]
     */
     async futuresLoanAdjustCollateralHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/adjustCollateral/history", params)
    }

    /**
     * @param {} [params]
     */
     async futuresLoanLiquidationHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/liquidationHistory", params)
    }

    /**
     * @param {} [params]
     */
     async futuresLoanInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/interestHistory", params)
    }
    // ########################################### Futures Algo Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async newAlgoFuturesNewOrderVp(params) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderVp", params)
    }

    /**
     * @param {} [params]
     */
     async newAlgoFuturesNewOrderTwap(params) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderTwap", params)
    }

    /**
     * @param {} [params]
     */
     async deleteAlgoFuturesOrder(params) {
        return await this.http.privateDELETE("/sapi/v1/algo/futures/order", params)
    }

    /**
     * @param {} [params]
     */
     async algoFuturesOpenOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/openOrders", params)
    }

    /**
     * @param {} [params]
     */
     async algoFuturesHistoricalOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/historicalOrders", params)
    }

    /**
     * @param {} [params]
     */
     async algoFuturesSubOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/subOrders", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async portfolioAccount(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/account", params)
    }

    /**
     * @param {} [params]
     */
     async portfolioCollateralRate(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/collateralRate", params)
    }

    /**
     * @param {} [params]
     */
     async portfolioPmLoan(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/pmLoan", params)
    }

    /**
     * @param {} [params]
     */
     async newPortfolioRepay(params) {
        return await this.http.privatePOST("/sapi/v1/portfolio/repay", params)
    }
    // ########################################### BLVT Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async blvtTokenInfo(params) {
        return await this.http.privateGET("/sapi/v1/blvt/tokenInfo", params)
    }

    /**
     * @param {} [params]
     */
     async newBlvtSubscribe(params) {
        return await this.http.privatePOST("/sapi/v1/blvt/subscribe", params)
    }

    /**
     * @param {} [params]
     */
     async blvtSubscribeRecord(params) {
        return await this.http.privateGET("/sapi/v1/blvt/subscribe/record", params)
    }

    /**
     * @param {} [params]
     */
     async newBlvtRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/blvt/redeem", params)
    }

    /**
     * @param {} [params]
     */
     async blvtRedeemRecord(params) {
        return await this.http.privateGET("/sapi/v1/blvt/redeem/record", params)
    }

    /**
     * @param {} [params]
     */
     async blvtUserLimit(params) {
        return await this.http.privateGET("/sapi/v1/blvt/userLimit", params)
    }
    // ########################################### BSwap Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async bswapPools(params) {
        return await this.http.privateGET("/sapi/v1/bswap/pools", params)
    }

    /**
     * @param {} [params]
     */
     async bswapLiquidity(params) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidity", params)
    }

    /**
     * @param {} [params]
     */
     async newBswapLiquidityAdd(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityAdd", params)
    }

    /**
     * @param {} [params]
     */
     async deleteBswapLiquidityRemove(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityRemove", params)
    }

    /**
     * @param {} [params]
     */
     async bswapLiquidityOps(params) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidityOps", params)
    }

    /**
     * @param {} [params]
     */
     async bswapQuote(params) {
        return await this.http.privateGET("/sapi/v1/bswap/quote", params)
    }

    /**
     * @param {} [params]
     */
     async newBswapSwap(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/swap", params)
    }

    /**
     * @param {} [params]
     */
     async bswapSwap(params) {
        return await this.http.privateGET("/sapi/v1/bswap/swap", params)
    }

    /**
     * @param {} [params]
     */
     async bswapPoolConfigure(params) {
        return await this.http.privateGET("/sapi/v1/bswap/poolConfigure", params)
    }

    /**
     * @param {} [params]
     */
     async bswapAddLiquidityPreview(params) {
        return await this.http.privateGET("/sapi/v1/bswap/addLiquidityPreview", params)
    }

    /**
     * @param {} [params]
     */
     async bswapRemoveLiquidityPreview(params) {
        return await this.http.privateGET("/sapi/v1/bswap/removeLiquidityPreview", params)
    }

    /**
     * @param {} [params]
     */
     async bswapUnclaimedRewards(params) {
        return await this.http.privateGET("/sapi/v1/bswap/unclaimedRewards", params)
    }

    /**
     * @param {} [params]
     */
     async newBswapClaimRewards(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/claimRewards", params)
    }

    /**
     * @param {} [params]
     */
     async bswapClaimedHistory(params) {
        return await this.http.privateGET("/sapi/v1/bswap/claimedHistory", params)
    }
    // ########################################### Fiat Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async fiatOrders(params) {
        return await this.http.privateGET("/sapi/v1/fiat/orders", params)
    }

    /**
     * @param {} [params]
     */
     async fiatPayments(params) {
        return await this.http.privateGET("/sapi/v1/fiat/payments", params)
    }
    // ########################################### C2C Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async c2cOrderMatchListUserOrderHistory(params) {
        return await this.http.privateGET("/sapi/v1/c2c/orderMatch/listUserOrderHistory", params)
    }
    // ########################################### VIP Loans Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async loanVipOngoingOrders(params) {
        return await this.http.privateGET("/sapi/v1/loan/vip/ongoing/orders", params)
    }

    /**
     * @param {} [params]
     */
     async newLoanVipRepay(params) {
        return await this.http.privatePOST("/sapi/v1/loan/vip/repay", params)
    }

    /**
     * @param {} [params]
     */
     async loanVipRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/vip/repay/history", params)
    }
    // ########################################### Crypto Loans Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async loanIncome(params) {
        return await this.http.privateGET("/sapi/v1/loan/income", params)
    }

    /**
     * @param {} [params]
     */
     async newLoanBorrow(params) {
        return await this.http.privatePOST("/sapi/v1/loan/borrow", params)
    }

    /**
     * @param {} [params]
     */
     async loanBorrowHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/borrow/history", params)
    }

    /**
     * @param {} [params]
     */
     async loanOngoingOrders(params) {
        return await this.http.privateGET("/sapi/v1/loan/ongoing/orders", params)
    }

    /**
     * @param {} [params]
     */
     async newLoanRepay(params) {
        return await this.http.privatePOST("/sapi/v1/loan/repay", params)
    }

    /**
     * @param {} [params]
     */
     async loanRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/repay/history", params)
    }

    /**
     * @param {} [params]
     */
     async newLoanAdjustLtv(params) {
        return await this.http.privatePOST("/sapi/v1/loan/adjust/ltv", params)
    }

    /**
     * @param {} [params]
     */
     async loanLtvAdjustmentHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/ltv/adjustment/history", params)
    }

    /**
     * @param {} [params]
     */
     async loanLoanableData(params) {
        return await this.http.privateGET("/sapi/v1/loan/loanable/data", params)
    }

    /**
     * @param {} [params]
     */
     async loanCollateralData(params) {
        return await this.http.privateGET("/sapi/v1/loan/collateral/data", params)
    }

    /**
     * @param {} [params]
     */
     async loanRepayCollateralRate(params) {
        return await this.http.privateGET("/sapi/v1/loan/repay/collateral/rate", params)
    }

    /**
     * @param {} [params]
     */
     async newLoanCustomizeMarginCall(params) {
        return await this.http.privatePOST("/sapi/v1/loan/customize/margin_call", params)
    }
    // ########################################### Pay Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async payTransactions(params) {
        return await this.http.privateGET("/sapi/v1/pay/transactions", params)
    }
    // ########################################### Convert Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async convertExchangeInfo(params) {
        return await this.http.privateGET("/sapi/v1/convert/exchangeInfo", params)
    }

    /**
     * @param {} [params]
     */
     async convertAssetInfo(params) {
        return await this.http.privateGET("/sapi/v1/convert/assetInfo", params)
    }

    /**
     * @param {} [params]
     */
     async newConvertGetQuote(params) {
        return await this.http.privatePOST("/sapi/v1/convert/getQuote", params)
    }

    /**
     * @param {} [params]
     */
     async newConvertAcceptQuote(params) {
        return await this.http.privatePOST("/sapi/v1/convert/acceptQuote", params)
    }

    /**
     * @param {} [params]
     */
     async convertOrderStatus(params) {
        return await this.http.privateGET("/sapi/v1/convert/orderStatus", params)
    }

    /**
     * @param {} [params]
     */
     async convertTradeFlow(params) {
        return await this.http.privateGET("/sapi/v1/convert/tradeFlow", params)
    }
    // ########################################### Rebate Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async rebateTaxQuery(params) {
        return await this.http.privateGET("/sapi/v1/rebate/taxQuery", params)
    }
    // ########################################### NFT Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async nftHistoryTransactions(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/transactions", params)
    }

    /**
     * @param {} [params]
     */
     async nftHistoryDeposit(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/deposit", params)
    }

    /**
     * @param {} [params]
     */
     async nftHistoryWithdraw(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/withdraw", params)
    }

    /**
     * @param {} [params]
     */
     async nftUserGetAsset(params) {
        return await this.http.privateGET("/sapi/v1/nft/user/getAsset", params)
    }
    // ########################################### Binance Code Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {} [params]
     */
     async newGiftcardCreateCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/createCode", params)
    }

    /**
     * @param {} [params]
     */
     async newGiftcardRedeemCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/redeemCode", params)
    }

    /**
     * @param {} [params]
     */
     async giftCardVerify(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/verify", params)
    }

    /**
     * @param {} [params]
     */
     async giftCardCryptographyRsaPublicKey(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/cryptography/rsa-public-key", params)
    }

    /**
     * @param {} [params]
     */
     async newGiftCardBuyCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/buyCode", params)
    }

    /**
     * @param {} [params]
     */
     async giftcardBuyCodeTokenLimit(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/buyCode/token-limit", params)
    }

}