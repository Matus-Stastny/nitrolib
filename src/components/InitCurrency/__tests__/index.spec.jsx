// @flow strict
import * as React from "react";
import { shallow } from "enzyme";

import InitCurrency from "../index";
import { brandDefault } from "../../../records/Brand";

const currencies = {
  eur: {
    id: "eur",
    name: "Euro",
    format: "__price__ €",
    uncertainFormat: false,
    round: "2",
    enabledOnAffilId: "",
    fallback: "",
    rate: 1,
  },
  gbp: {
    id: "gbp",
    name: "British Pound Sterling",
    format: "£__price__",
    uncertainFormat: false,
    round: "2",
    enabledOnAffilId: ["UK"],
    fallback: "",
    rate: 1.14355,
  },
  czk: {
    id: "czk",
    name: "Czech Republic Koruna",
    format: "__price__ Kč",
    uncertainFormat: false,
    round: "0",
    enabledOnAffilId: "",
    fallback: "",
    rate: 0.0387945,
  },
};

const countries = {
  sk: {
    id: "sk",
    currency: "eur",
    continent: "euro",
    AR: "سلوفاكيا",
    BG: "Словакия",
    BR: "Eslováquia",
    CA: "Eslovàquia",
    CN: "斯洛伐克",
    CS: "Slovensko",
    DA: "Slovakiet",
    DE: "Slowakei",
    EL: "Σλοβακία",
    EN: "Slovakia",
    ES: "Eslovaquia",
    FI: "Slovakia",
    FR: "Slovaquie",
    HR: "Slovačka",
    HU: "Szlovákia",
    ID: "Slovakia",
    IE: "Slovakia",
    IS: "Slóvakía",
    IT: "Slovacchia",
    JA: "スロバキア",
    KO: "슬로바키아",
    LT: "Slovakija",
    MX: "Eslovaquia",
    NL: "Slowakije",
    NO: "Slovakia",
    NZ: "Slovakia",
    PL: "Słowacja",
    PT: "Eslováquia",
    RO: "Slovacia",
    RU: "Словакия",
    SK: "Slovenská republika",
    SR: "Slovačka",
    SV: "Slovakien",
    TH: "สโลวะเกีย",
    TR: "Slovakya",
    TW: "斯洛伐克",
    UK: "Словаччина",
    VN: "Xlô-va-ki-a",
    HE: "סלובקיה",
  },
  gb: {
    id: "gb",
    currency: "lib",
    continent: "euro",
    AR: "المملكة المتحدة",
    BG: "Обединено кралство",
    BR: "Reino Unido",
    CA: "Regne Unit",
    CN: "英国",
    CS: "Velká Británie",
    DA: "Storbritannien",
    DE: "Vereinigtes Königreich",
    EL: "Ηνωμένο Βασίλειο",
    EN: "United Kingdom",
    ES: "Reino Unido",
    FI: "Britannia",
    FR: "Royaume-Uni",
    HR: "Velika Britanija",
    HU: "Egyesült Királyság",
    ID: "Inggris Raya",
    IE: "United Kingdom",
    IS: "Bretland",
    IT: "Regno Unito",
    JA: "イギリス",
    KO: "영국",
    LT: "Didžioji Britanija",
    MX: "Reino Unido",
    NL: "Verenigd Koninkrijk",
    NO: "Storbritannia",
    NZ: "United Kingdom",
    PL: "Wielka Brytania",
    PT: "Reino Unido",
    RO: "Marea Britanie",
    RU: "Великобритания",
    SK: "Spojené kráľovstvo",
    SR: "Velika Britanija",
    SV: "Storbritannien",
    TH: "สหราชอาณาจักร",
    TR: "Birleşik Krallık",
    TW: "英国",
    UK: "Великобританія",
    VN: "Vương quốc Anh",
    HE: "בריטניה",
  },
};

describe("#InitCurrency", () => {
  test("render", () => {
    const wrapper = shallow(
      <InitCurrency
        countries={countries}
        brand={brandDefault}
        affiliate=""
        ip="1.2.3.4"
        initialCurrency="eur"
        langCurrency="eur"
        onChange={jest.fn()}
        getCurrencies={jest.fn()}
        getGeoCountry={jest.fn()}
      >
        {() => null}
      </InitCurrency>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("mount", async () => {
    const currenciesPromise = Promise.resolve(currencies);
    const countryPromise = Promise.resolve("sk");

    const getCurrencies = jest.fn().mockImplementation(() => currenciesPromise);
    const getGeoCountry = jest.fn().mockImplementation(() => countryPromise);
    const wrapper = shallow(
      <InitCurrency
        countries={countries}
        brand={brandDefault}
        affiliate=""
        ip="1.2.3.4"
        initialCurrency="eur"
        langCurrency="eur"
        onChange={jest.fn()}
        getCurrencies={getCurrencies}
        getGeoCountry={getGeoCountry}
      >
        {() => null}
      </InitCurrency>,
    );

    expect(getCurrencies).toBeCalled();
    expect(getGeoCountry).toBeCalledWith("1.2.3.4");

    await Promise.all([currenciesPromise, countryPromise]);

    expect(wrapper.state("all")).toBe(currencies);
    expect(wrapper.state("country")).toBe("sk");
  });

  test("update", async () => {
    const currenciesPromise = Promise.resolve(currencies);
    const countryPromise = Promise.resolve("sk");

    const getCurrencies = jest.fn().mockImplementation(() => currenciesPromise);
    const getGeoCountry = jest.fn().mockImplementation(() => countryPromise);
    const wrapper = shallow(
      <InitCurrency
        countries={countries}
        brand={brandDefault}
        affiliate=""
        ip="1.2.3.4"
        initialCurrency="eur"
        langCurrency="eur"
        onChange={jest.fn()}
        getCurrencies={getCurrencies}
        getGeoCountry={getGeoCountry}
      >
        {() => null}
      </InitCurrency>,
    );

    wrapper.setState({ all: {}, country: "" });

    await Promise.all([currenciesPromise, countryPromise]);

    expect(wrapper.state("all")).toBe(currencies);
    expect(wrapper.state("country")).toBe("sk");
  });

  test("set currency", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <InitCurrency
        countries={countries}
        brand={brandDefault}
        affiliate=""
        ip="1.2.3.4"
        initialCurrency="eur"
        langCurrency="eur"
        onChange={onChange}
        getCurrencies={jest.fn()}
        getGeoCountry={jest.fn()}
      >
        {() => null}
      </InitCurrency>,
    );

    wrapper.setState({ available: currencies });
    wrapper.instance().handleChange("gbp");

    expect(wrapper.state("currency")).toBe(currencies.gbp);
    expect(onChange).toBeCalledWith("gbp");
  });
});
