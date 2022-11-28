/**
 * CoinM constructor
 * @typedef {Object} CoinMConstructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [recvWindow]
 * @property {Boolean} [isTestNet]
 */
// ################################### API
// ########### ENUM
/**
 * @typedef {"DELIVERY_CONTRACT" | "PERPETUAL_CONTRACT"} EnumCoinmSymbolType
 */

/**
 * @typedef {"PERPETUAL" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "CURRENT_QUARTER_DELIVERING" | "NEXT_QUARTER_DELIVERING" | "PERPETUAL_DELIVERING"} EnumCoinmContractType
 */
 
/**
 * @typedef {"PENDING_TRADING" | "TRADING" | "PRE_DELIVERING" | "DELIVERING" | "DELIVERED"} EnumCoinmContractStatus
 */
 
/**
 * @typedef {"NEW" | "PARTIALLY_FILLED" | "FILLED" | "CANCELED" | "EXPIRED"} EnumCoinmOrderStatus
 */

/**
 * @typedef {"LIMIT" | "MARKET" | "STOP" | "STOP_MARKET" | "TAKE_PROFIT" | "TAKE_PROFIT_MARKET" | "TRAILING_STOP_MARKET"} EnumCoinmOrderType
 */
 
/**
 * @typedef {"BUY" | "SELL"} EnumCoinmOrderSide
 */

/**
 * @typedef {"BOTH" | "LONG" | "SHORT"} EnumCoinmPositionSide
 */
 
/**
 * @typedef {"GTC" | "IOC" | "FOK" | "GTX"} EnumCoinmTimeInForce
 */
 
/**
 * @typedef {"MARK_PRICE" | "CONTRACT_PRICE"} EnumCoinmWorkingType
 */
 
/**
 * @typedef {"ACK" | "RESULT"} EnumCoinmNewOrderRespType
 */

/**
 * @typedef {"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M"} EnumCoinmIntervals
 */


/**
 * @typedef {"REQUEST_WEIGHT" | "ORDERS"} EnumCoinmRateLimitType
 */

/**
 * @typedef {"MINUTE"} EnumCoinmRateLimitInterval
 */
// ########### Market Data
/**
 * @typedef {Object} CoinmPing
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmExchangeInfo
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmDepth
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmHistoricalTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [fromId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmAggTrades
 * @property {String} symbol
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPremiumIndex
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFundingRate
 * @property {String} symbol
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmKlines
 * @property {String} symbol
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {String} pair
 * @property {EnumCoinmContractType} contractType
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmIndexPriceKlines
 * @property {String} pair
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmMarkPriceKlines
 * @property {String} symbol
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTicker24hr
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTickerPrice
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTickerBookTicker
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmOpenInterest
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataOpenInterestHist
 * @property {String} pair
 * @property {EnumCoinmContractType} contractType
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataTopLongShortAccountRatio
 * @property {String} pair
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataTopLongShortPositionRatio
 * @property {String} pair
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataGlobalLongShortAccountRatio
 * @property {String} pair
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataTakerBuySellVol
 * @property {String} pair
 * @property {"ALL" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL"} contractType
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataBasis
 * @property {String} pair
 * @property {"CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL"} contractType
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */
// ########### Account/Trades Endpoints
/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */
// ########### Portfolio Margin Endpoints
/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Coinm
 * @property {Number} [recvWindow]
 */
