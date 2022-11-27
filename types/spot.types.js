/**
 * Spot constructor
 * @typedef {Object} SpotConstructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [recvWindow]
 * @property {Boolean} [isTestNet]
 * @property {1 | 2 | 3} [changeBaseURL]
 * @property {Boolean} [changeWsStream]
 */

// ################################### API
// ########### ENUM
// 

/**
 * @typedef {Object} SpotJustRecvWindow
 * @property {Number} [recvWindow]
 */

// ########### Wallet Endpoints
/**
 * @typedef {Object} SpotSystemStatus
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalConfigGetall
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccountSnapshot
 * @property {"SPOT" | "MARGIN" | "FUTURES"} type
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAccountDisableFastWithdrawSwitch
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAccountEnableFastWithdrawSwitch
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostCapitalWithdrawApply
 * @property {String} coin
 * @property {String} withdrawOrderId
 * @property {String} [network]
 * @property {String} address
 * @property {String} [addressTag]
 * @property {Number} amount
 * @property {Boolean} [transactionFeeFlag]
 * @property {String} [name]
 * @property {0 | 1} [walletType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositHisrec
 * @property {String} [coin]
 * @property {0 | 1 | 6} [status]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [offset]
 * @property {Number} [limit]
 * @property {String} [txId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalWithdrawHistory
 * @property {String} [coin]
 * @property {String} [withdrawOrderId]
 * @property {0 | 1 | 2 | 3 | 4 | 5 | 6} [status]
 * @property {Number} [offset]
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositAddress
 * @property {String} coin
 * @property {String} [network]
 * @property {Number} [recvWindow]
 */
/**
 * @typedef {Object} SpotAccountStatus
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccountApiTradingStatus
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetDribblet
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetDustBtc
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetDust
 * @property {Array} asset
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetAssetDividend
 * @property {String} [asset]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetAssetDetail
 * @property {String} [asset]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetTradeFee
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetTransfer
 * @property {} type #ENUM
 * @property {String} asset
 * @property {Number} amount
 * @property {String} [fromSymbol]
 * @property {String} [toSymbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetTransfer
 * @property {} type #ENUM
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {String} [fromSymbol]
 * @property {String} [toSymbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetGetFundingAsset
 * @property {String} [asset]
 * @property {true | false} [needBtcValuation] String true | false
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetGetUserAsset
 * @property {String} [asset]
 * @property {Boolean} [needBtcValuation]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetConvertTransfer
 * @property {String} clientTranId
 * @property {String} asset
 * @property {Number} amount
 * @property {String} targetAsset
 * @property {"MAIN" | "CARD"} [accountType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetConvertTransferQueryByPage
 * @property {Number} [tranId]
 * @property {String} [clientTranId]
 * @property {String} [asset]
 * @property {Number} startTime
 * @property {Number} endTime
 * @property {"MAIN" | "CARD"} [accountType]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetLedgerTransferCloudMiningQueryByPag
 * @property {Number} [tranId]
 * @property {String} [clientTranId]
 * @property {String} [asset]
 * @property {Number} startTime
 * @property {Number} endTime
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccountApiRestrictions
 * @property {Number} [recvWindow]
 */
// ########### Sub-Account
/**
 * @typedef {Object} SpotPostSubAccountVirtualSubAccount
 * @property {String} subAccountString
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountList
 * @property {String} [email]
 * @property {true | false} [isFreeze] String true | false
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountSubTransferHistory
 * @property {String} [fromEmail]
 * @property {String} [toEmail]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesInternalTransfer
 * @property {String} email
 * @property {1 | 2} futuresType
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountFuturesInternalTransfer
 * @property {String} fromEmail
 * @property {String} toEmail
 * @property {1 | 2} futuresType
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountAssets
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountSpotSummary
 * @property {String} [email]
 * @property {Number} [page]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositSubAddress
 * @property {String} email
 * @property {String} coin
 * @property {String} [network]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositSubHisrec
 * @property {String} email
 * @property {String} [coin]
 * @property {0 | 1 | 6} [status]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [offset]
 * @property {String} [txId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountStatus
 * @property {String} [email]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountMarginEnable
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountMarginAccount
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountMarginAccountSummary
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountFuturesEnable
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccount
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccountSummary
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesPositionRisk
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountFuturesTransfer
 * @property {String} email
 * @property {String} asset
 * @property {Number} amount
 * @property {1 | 2 | 3 | 4} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountMarginTransfer
 * @property {String} email
 * @property {String} asset
 * @property {Number} amount
 * @property {1 | 2} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountTransferSubToSub
 * @property {String} toEmail
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountTransferSubToMaster
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountTransferSubUserHistory
 * @property {String} [asset]
 * @property {1 | 2} [type]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
 
/**
 * @typedef {Object} SpotPostSubAccountUniversalTransfer
 * @property {String} [fromEmail]
 * @property {String} [toEmail]
 * @property {"SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN"} fromAccountType
 * @property {"SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN"} toAccountType
 * @property {String} [clientTranId]
 * @property {String} [symbol]
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountUniversalTransfer
 * @property {String} [fromEmail]
 * @property {String} [toEmail]
 * @property {String} [clientTranId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccount
 * @property {Number} email
 * @property {1 | 2} futuresType
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccountSummary
 * @property {1 | 2} futuresType
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesPositionRisk
 * @property {String} email
 * @property {1 | 2} futuresType
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountBlvtEnable
 * @property {String} email
 * @property {Boolean} enableBlvt
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountSubAccountApiIpRestriction
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {Boolean} ipRestrict
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountSubAccountApiIpRestrictionIpList
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {String} [ipAddress]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountSubAccountApiIpRestriction
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteSubAccountSubAccountApiIpRestrictionIpList
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {String} [ipAddress]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountApiRestrictionsIpRestrictionThirdPartyList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountSubAccountApiIpRestriction
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {"1" | "2" | "3"} status
 * @property {String} [thirdPartyName]
 * @property {String} [ipAddress]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostManagedSubaccountDeposit
 * @property {String} toEmail
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotManagedSubaccountAsset
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostManagedSubaccountWithdraw
 * @property {String} fromEmail
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [transferDate]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotManagedSubaccountAccountSnapshot
 * @property {String} email
 * @property {"SPOT" | "MARGIN" | "FUTURES"} type
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Market Data
/**
 * @typedef {Object} SpotPing
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotExchangeInfo
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {String} [permissions]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDepth
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
 
/**
 * @typedef {Object} SpotTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotHistoricalTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [fromId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAggTrades
 * @property {String} symbol
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotKlines
 * @property {String} symbol
 * @property {} interval #ENUM
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotUiKlines
 * @property {String} symbol
 * @property {} interval #ENUM
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAvgPrice
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotTicker24hr
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {} [type] #ENUM
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotTickerPrice
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotTickerBookTicker
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {Number} [recvWindow]
 */

/**
 * one of symbol | symbols should send
 * @typedef {Object} SpotTicker
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {} [windowSize] #ENUM
 * @property {"FULL" | "MINI"} [type]
 * @property {Number} [recvWindow]
 */
// ########### Spot Account/Trade
/**
 * @typedef {SpotPostOrder} SpotPostOrderTest
 */

/**
 * @typedef {Object} SpotPostOrder
 * @property {String} symbol
 * @property {} side #ENUM
 * @property {} type #ENUM
 * @property {} [timeInForce] #ENUM
 * @property {Number} quantity
 * @property {Number} [quoteOrderQty]
 * @property {Number} [price]
 * @property {String} [newClientOrderId]
 * @property {Number} [strategyId]
 * @property {Number} [strategyType]
 * @property {Number} [stopPrice]
 * @property {Number} [trailingDelta]
 * @property {Number} [icebergQty]
 * @property {} [newOrderRespType] #ENUM
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteOpenOrders
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostCancelReplace
 * @property {String} symbol
 * @property {} side #ENUM
 * @property {} type #ENUM
 * @property {"STOP_ON_FAILURE" | "ALLOW_FAILURE"} cancelReplaceMode #ENUM
 * @property {} [timeInForce] #ENUM
 * @property {Number} quantity
 * @property {Number} [quoteOrderQty]
 * @property {Number} [price]
 * @property {String} [cancelNewClientOrderId]
 * @property {String} [cancelOrigClientOrderId]
 * @property {String} [cancelOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [strategyId]
 * @property {Number} [strategyType]
 * @property {Number} [stopPrice]
 * @property {Number} [trailingDelta]
 * @property {Number} [icebergQty]
 * @property {} [newOrderRespType] #ENUM
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOpenOrders
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAllOrders
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostOrderOco
 * @property {String} symbol
 * @property {String} [listClientOrderId]
 * @property {} side #ENUM
 * @property {Number} quantity
 * @property {String} [limitClientOrderId]
 * @property {Number} [limitStrategyId]
 * @property {Number} [limitStrategyType]
 * @property {Number} price
 * @property {Number} [limitIcebergQty]
 * @property {Number} [trailingDelta]
 * @property {String} [stopClientOrderId]
 * @property {Number} stopPrice
 * @property {Number} [stopStrategyId]
 * @property {Number} [stopStrategyType]
 * @property {Number} [stopLimitPrice]
 * @property {Number} [stopIcebergQty]
 * @property {Number} [stopLimitTimeInForce] #ENUM
 * @property {} [newOrderRespType] #ENUM
 * @property {} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteOrderList
 * @property {String} symbol
 * @property {Number} [orderListId]
 * @property {String} [listClientOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOrderList
 * @property {Number} [orderListId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAllOrderList
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOpenOrderList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMyTrades
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [fromId]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotRateLimitOrder
 * @property {Number} [recvWindow]
 */
// ########### Margin Account/Trade
/**
 * @typedef {Object} SpotPostMarginTransfer
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginLoa
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginRepay
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAsset
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginPair
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllAssets
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllPairs
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginPriceIndex
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginOrder
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteMarginOrder
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteMarginOpenOrders
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginTransfer
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginLoan
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginRepay
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginInterestHistory
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginForceLiquidationRec
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOrder
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOpenOrders
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllOrders
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginOrderOco
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteMarginOrderList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOrderList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllOrderList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOpenOrderList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginMyTrades
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginMaxBorrowable
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginMaxTransferable
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginTradeCoeff
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginIsolatedTransfer
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedTransfer
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteMarginIsolatedAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginIsolatedAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedAccountLimit
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedPair
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedAllPairs
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBnbBurn
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBnbBurn
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginInterestRateHistory
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginCrossMarginData
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedMarginData
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedMarginTier
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginRateLimitOrder
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginDribblet
 * @property {Number} [recvWindow]
 */
// ########### Saving
// ########### Staking
// ########### Mining
// ########### Futures
// ########### Futures Algo
// ########### Portfolio
// ########### BLVT
// ########### BSwap
// ########### Fiat
// ########### C2C
// ########### VIP Loans
// ########### Crypto Loans
// ########### Pay
// ########### Convert
// ########### Rebate
// ########### NFT
// ########### Binance Code
// ########### 