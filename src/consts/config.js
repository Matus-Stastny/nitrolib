// @flow strict
const config = {
  apiDateFormat: "DD/MM/YYYY",
  apiUrl: "https://api.skypicker.com",
  apiBookingUrl: "https://booking-api.skypicker.com",
  bookingApiUrl: "https://booking-api.skypicker.com",
  apiAuthUrl: "https://auth.skypicker.com",
  authApiUrl: "https://auth.skypicker.com",
  umbrellaUrl: "https://r-umbrella-app.skypicker.com/graphql",
  mockApiUrl: "https://skymock.skypicker.com",
  logstashApiUrl: "https://logg.kiwi.com/logmole",
  priceAlertUrl: "https://r-price-alerts.skypicker.com",
  cdnUrl: "https://cdn1.skypicker.com",
  contentTeamImagesUrl:
    "https://googledrive.com/host/0B6NowGirW9poflZ3RlVHa1dGSlRjdHAxenZUdWZiazFFSGNNajZVUXdSVERXNWs5T0p0aEE/",
  facebook: "kiwicom247",
  imagesUrl: "//images.kiwi.com/",
  iTunesAppId: "657843853",
  iTunesAppIdCz: "824740399",
  androidAppId: "com.skypicker.main",
  mail: "flyhigh4low@skypicker.com",
  rollbarAccessTokenClient: "3895ba85519449d4b00fd8843499a6df",
  smartsuppKey: "7f311cc44ea771001c1915845cc835b74d93fa7f",
  cupEnabledCurrencies: ["cny", "gbp"],
  cupEnabledLangs: ["cn", "tw"],
  sofortEnabledCurrencies: "eur",
  sofortEnabledLangs: ["de", "nl", "fr", "pl", "es", "hu", "sk"],
  trustlyEnabledCurrencies: ["eur", "sek", "dkk", "nok"],
  trustlyEnabledLangs: ["sv", "da", "fi", "pl", "nl", "es", "ee"],
  mozioEnabledLangs: [
    "en-US",
    "en-GB",
    "af-ZA",
    "zh-CN",
    "zh-TW",
    "cs-CZ",
    "hr-HR",
    "da-DK",
    "nl-NL",
    "fi-FI",
    "fr-FR",
    "de-DE",
    "el-GR",
    "id-ID",
    "it-IT",
    "ja-JP",
    "lt-LT",
    "lv-LV",
    "ms-MY",
    "no-NO",
    "pl-PL",
    "pt-PT",
    "ro-RO",
    "ru-RU",
    "es-ES",
    "sv-SE",
    "tl-PH",
    "th-TH",
    "tr-TR",
    "uk-UA",
    "vi-VN",
  ],
  parkcloudEnabledLangs: [
    "en-GB",
    "cs-CZ",
    "de-DE",
    "es-ES",
    "fr-FR",
    "hu-HU",
    "it-IT",
    "lt-LT",
    "nl-NL",
    "pl-PL",
    "pt-PT",
    "ro-RO",
    "ru-RU",
    "tr-TR",
  ],
  yandexEnabledCurrencies: ["rub"],
  paypalEnabledLangs: ["de", "fr", "at"],
  paypalEnabledCurrencies: ["eur"],
  paypalEnabledCurrenciesFull: "[]",
  twitter: "kiwicom247",
  urlDateFormat: "dd-MM-YYYY",
  userAppAppId: "5433ecccaff67",
  zoozIdSandbox: "PAPI_ZooZNP_DN3MVFFPPITAVM4Z5LJUYE6KTQ_47",
  zoozId: "skypicker_new",
  zoozScriptUrlLocal: "/scripts/zooz.js",
  zoozScriptUrlRemote: "https://app.zooz.com/mobile/checkoutapi/js/checkout-ext-api.js",
  POSApiUrl: "https://api.paymentsos.com",
  POSEnabledCurrencies: ["rub", "mxn"],
  POSScriptUrlLocal: "/scripts/pos.js",
  POSScriptUrlRemote: "https://js.paymentsos.com/latest/token.min.js",
  kayakPartnerId: "skypicker",
  facebookConversionId: "6029814468313",
  affiliateWindowAdvertiserId: "6682",
  googleConversionId: "940725268",
  infinarioDateFormat: "dd-MM-YYYY",
  continents: ["ap", "aas", "eu", "mea"],
  linkedin: "company/Kiwi.com",
  instagram: "kiwicom247",
  rebrandingDate: "2016-05-18",
  googleMapsJavascriptApiKey: "AIzaSyBw-B1aYGikPcLI0k5xL069j_MAFn9AGU8",
  bookingComOneWayDefaultNights: "5",
  uberPromocode: "KIWICOM2017",
  FREE_POBEDA_BAG_WEIGHT: "10",
  stagingEnvironmentUrl: ".fe.staging.kiwi.com",
  airlinesWithOptionalMiddlename: ["VJ"],
  airlinesWithSplitFees: ["AC", "AF", "KL", "WA", "FC"],
  soonDepartureThresholdHours: "24",
  servicesSeatingAllowed: [
    "5J",
    "AK",
    "FD",
    "QZ",
    "D7",
    "PQ",
    "Z2",
    "I5",
    "XJ",
    "XT",
    "DP",
    "DY",
    "D8",
    "FR",
    "NK",
    "TZ",
    "U2",
    "U0",
    "W6",
    "XW",
    "Y4",
    "ZB",
    "F9",
    "JQ",
    "PC",
    "VY",
  ],
  servicesMealsDisallowed: [
    "FR",
    "W6",
    "U2",
    "VY",
    "NK",
    "F9",
    "TO",
    "SU",
    "FC",
    "IB",
    "4O",
    "UA",
    "EI",
    "HV",
    "PS",
    "AF",
    "0B",
    "ZB",
    "AZ",
    "Y4",
    "DP",
    "BE",
    "AB",
    "DL",
    "AA",
  ],
  maxSearchMonths: "9",
  metaApiUrl: "https://api.skypicker.com/meta-search",
  pgpKey:
    "-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: GPGTools - https://gpgtools.org\n\nmQINBFmyotoBEADTlsa1ItN0SuxTI0Ow2O7hZv7ZuQPRqoCMfPgqTA+seyMfmyOA\nh+syJFQhDNJkSugQaFwzvGgq4tdVdlOlfmOAJuh5IGdYjChSM8wDeGNmg09qdV0t\nJooEFUX5ESQnHMERQF3p5UrRX9TrJZzTLkrIByZw/Dk2teNYihqKt7En8xN0kAXF\ndazvZWWFVbM3nJR3gQk0yXAwl9FyrDnf0w/ZgPZ+Al1Ox3nadvXKmoP8ZlOHCZn0\nE2QFfd5fgH6M97h+ebgmUulppGHHG+hwcso52oSehaD+Tcr6Tm8x57+C4xWF6R2W\nmINZtl5g8l0sP4bqjEcLAvPXF9P9YlSMGNpZtW+WVcrcdh8FbYPOcnGiaH8IC6iX\npHgo4++9qmTsmFtPBLEDDPBQ2d1P0rJhFjkWWFEdVxrI6HJOUiMVlCvVCUgITSM8\nW4orwBdERPdas7O4MVkxjKjf10vUkA8bV8owSQ99YGfszdrYeABuLFh1eAYl8KrQ\nVfom9u1SkZLBhPFY6ow7CuOyL9MkjiYLtkOhXWNV2gMQ3+32nJLxs7tSMkuaPBBS\nznzc9/eGPwNNf0o++2aRW1eaaKRcqKK4reywAhtUdOPn6cq4Z1Rndydi0k7waP4Q\nWHvGkno+u0RUqJDAJydPgvfDpwgw/wbr9/QXz4gXMfwYiGMmggUu4kKSgQARAQAB\ntCVLaXdpLmNvbSBTZWN1cml0eSA8c2VjdXJpdHlAa2l3aS5jb20+iQI3BBMBCgAh\nBQJZsqLaAhsDBQsJCAcDBRUKCQgLBRYCAwEAAh4BAheAAAoJEOa+HxIzo6Mw/UAP\n/RvoOpJLnBzTcOGhrWwM/bmkK+Pqhw0GfAGWIsyZHL2wY0gw0wCKZPgDVj5TStto\nFumWjAU5wcY4+Sk582lC8v3vUnZB4XfcK9WNHqxamqxBd9sK1lSW2X2qJz9GSAFo\nFJfHH9qOuFrluVCfoXeylTaJeiSUWS6Qi+ZRI8qq3/1DvmSUUOgdTjBbyHjGLAYF\ng+OUtSEvKEPmUleeAoXmw+F/N04L2bndKePBLquKzxqnSkXUdzcfHTwuE+9NV900\nmWg+JzQO+jSJjOZa+n0/GtQ4OvlIZtsDmYDECBTy5LDL7dyzL1qn0+Y68FAqpwr3\nFCHIiTgZJMgqgFKYPK7PqmxNotg66kJYnpXff5e1xcBgIfk0rhtlJoum+7cvMhFZ\nm8peWPBxiw/n5FfG22i0aB1FfYTxSW9inaFOJ6mpNGpMUoPK9hLDC2vNpCtWiAt2\neIBYQo7Z2ZzupOWptbpn8Ttz8QLqioST7ezyC5cpy/Zw8Egw+X1wHQbtcBSm7jDa\nN+lBbtI3lILdh3VQpxjfHQuTGbU6eFwsH53G6czYG47mjieL37Kb4A71c8o1s2CH\nUdiUZOHVJaGVdjjXmXjjacREDaXG+ix1rfc7HoTAoDBiOD+mmHYNv62UwaX7V4dA\ntFnwb+BNQU7nPgR46ml5VojStyes65tNH9iaHdejI3T1uQINBFmyotoBEACzYWIh\ncx/fgaLIucQf8fp0BAJfIx5icwI20jwvWbvgGOa9u8f82CrtcGo/3/yv0uJOxquo\nO72VWfeEM4o5h+CSNeUJ9sR1rl02ExcoCQRfxPAKDglXrgdoEQ1VhRsgLF9qn17z\noCEMb2Fc8hT2hM9axythJhi9u7m3GiUi4CU8Cal9ccAnsuJDCfJISvLvm5kcn2eF\nPZFjjcToIxIkVi+q2wseJIk9zQ3V/yGgEk5hwcTzduD9ihRu+xqiL85ew/dsU1lE\nPM2teI86PFFBBvjk/DPZBVyJePXZrMVsIA8RxDMeLodUSU/qB9eywRsU+6toEKnn\nfsbydeCQzviFMWR8D7XAYmY8QSSbNj3DSm+6P52IMevlJO+mogMh14UubhL5UIt1\nL1uh8VEQzKPInsRyi+afhf0NfqIn3UCc5WEXrYPNXG7CP2JwdDOjw5K7BouORtVe\nr/Dd/ykK0W4/V0naiY4V/R9s1+jI4UAFi04+nSZ6ILTlHL0H9YJqN61I0BMiFPAH\n2NuDOTGdLGF2wpFBUa5kHxIoHt/N3V+oPJrRDd7YZ/EJfPYXbh9Ov56iadckSeGO\n8iRYck/S/IZPjo6F2UDlzfd6PtIEegAPiuzuVP5kf/0hyHNFqeUjaqKI7L0L1wMg\nUGPJE91jKEulP1P0F5NOa2Lphx8YshseQQJ61QARAQABiQIfBBgBCgAJBQJZsqLa\nAhsMAAoJEOa+HxIzo6MwN28P/igpLti8z5IMyiADXl5fFPOmDOUeUspZuJ15e8n9\nSUiZ5IrVBZUaiyTAdGpKL0DkDUcgfOPRWX7TDcHSTBGfBVfYia59wPfiESp1YPEj\npnu8YXwtsAO0CK40KjkgKnCVcSz5HaUX2ul69UEDBNwoLx9yKaFrUmiU3DXrCfUh\nY6QuB+eaGN5CFCAC0iW/Ojz9G2D/J0j0V5ARiDm35BzIDNnGxat+bBfGyvJfJFCw\nbqpMnuHZf0JrWBY+4+xnGuIBW7F6lxxOz15aV05SDpzVeFN+aXcCgwb+mnfAy9eN\niSUvvSb7ZyafeOFv3Pr7+FBOYflKE/ZenNsdLVR/kV63lc9EjjT4poDfscNqRTWH\nYF6+HkmRJyGm6nLt5ofRHcsKB7g5+1GzUhmPu/ohnejpY/tEXRkLyhOnP3h92JPL\nWxRJpk8JQVsI1lbtCpv8ru7H+ozhNFCD4LSs1pm7E623T2IgAjvsXM3JXTrGRL7f\nuVBOqu8iinBpSIjVHM/0QREjkYLpQXWhcNmYZV3gYWGGZ6uDI5OgAvzgNcgP3Mhy\n0WPRt8E/nsJW3RjKUSMEqxvwYhfyIoPmPd6uy9v+nN6aJCWAPZJw3IUPsogohkn3\nR181L7TlMLOXggTDbQOQ7bgGmfchDRNtWQMBafhLXLOT9pYXF3Jlgp6WOmyraej9\nZR4w\n=N0hr\n-----END PGP PUBLIC KEY BLOCK-----",
  feedbackAvailableLanguage: [
    "cz",
    "de",
    "at",
    "ch",
    "en",
    "au",
    "ca",
    "ee",
    "hk",
    "in",
    "ie",
    "my",
    "nz",
    "ph",
    "sg",
    "za",
    "us",
    "es",
    "ag",
    "co",
    "ec",
    "cl",
    "mx",
    "pe",
    "fr",
    "be",
    "ca-fr",
    "it",
    "pl",
    "pt",
    "br",
    "sk",
    "ru",
    "by",
    "kz",
    "uk",
    "ar",
    "ko",
    "ja",
    "bh",
    "jo",
    "kw",
    "om",
    "qa",
  ],
  totalBookingsStat: "3 600 000+",
  dailyQueriesStat: "65 000 000+",
  priceUpdatesStat: "225 000+",
  graphQLUrl: "https://graphql.kiwi.com/",
};

export default config;
