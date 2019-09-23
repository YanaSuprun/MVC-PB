export class Currency {
  constructor(elem) {
    this.rate = {
      currency: elem.ccy,
      buy: elem.buy,
      sale: elem.sale
    }
    // this.currency = elem.ccy;
    // this.buy = elem.buy;
    // this.sale = elem.sale;
  }
}