import axios from 'axios';

export const api = {
    async getExchangeRates() {
        const res = await axios.get<ExchangeRatesType[]>('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        return res.data
    }
}
//type
export type ExchangeRatesType = {
    ccy: string
    base_ccy: string
    buy: string
    sale: string
}
