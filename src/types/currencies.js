//@flow

type CurrencyCommon = {
  // display name of a currency
  name: string,
  // the ticker name in exchanges / countervalue apis (e.g. BTC).
  ticker: string,
  // all units of a currency (e.g. Bitcoin have bitcoin, mBTC, bit, satoshi)
  // by convention, [0] is the default and have "highest" magnitude
  units: Unit[]
};

export type Unit = {
  // display name of a given unit (exemple: satoshi)
  name: string,
  // string to use when formatting the unit. like 'BTC' or 'USD'
  code: string,
  // number of digits after the '.'
  magnitude: number,
  // a shorter version of code using the symbol of the currency. like Ƀ . not all cryptocurrencies have a symbol
  symbol?: string,
  // should it always print all digits even if they are 0 (usually: true for fiats, false for cryptos)
  showAllDigits?: boolean
};

export type FiatCurrency = CurrencyCommon;

export type CryptoCurrencyFamily = "bitcoin" | "ethereum" | "ripple";

export type CryptoCurrency = CurrencyCommon & {
  // unique internal id of a crypto currency
  id: string,
  // name of the app as shown in the Manager
  managerAppName: string,
  // coin type according to slip44. THIS IS NOT GUARANTEED UNIQUE across currencies (e.g testnets,..)
  coinType: number,
  // the scheme name to use when formatting an URI (without the ':')
  scheme: string,
  // used for UI
  color: string,
  family: CryptoCurrencyFamily,
  ledgerExplorerId?: string,
  blockAvgTime?: number, // in seconds
  supportsSegwit?: boolean,
  // if defined this coin is a testnet for another crypto (id)};
  isTestnetFor?: string,
  bitcoinLikeInfo?: {
    P2PKH: number,
    P2SH: number
  }
};

export type Currency = Currency | CryptoCurrency;
