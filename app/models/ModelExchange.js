export class ModelExchange {
  constructor(contr) {
    this.controller = contr;
    this.api = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    this.apiArchive = 'https://api.privatbank.ua/p24api/exchange_rates?json&date='
    this.noCors = 'https://cors-anywhere.herokuapp.com/';
    this.currencies = ['USD', 'EUR', 'RUB']
  };

  getRate(){
    fetch(this.api).then(data => data.json()).then((arr) => {
      this.controller.getRate(arr, new Date().toLocaleDateString());
    });
  };

  getArchiveRate(date) {
    fetch(this.noCors + this.apiArchive + date).then(data => data.json()).then((obj) => {
      let result = obj.exchangeRate.filter(curr => this.currencies.indexOf(curr.currency) !== -1).sort()
      this.controller.getArchiveRate(result, obj.date);
    });
  };
};