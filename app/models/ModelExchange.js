

export class ModelExchange {
  constructor(contr) {
    this.controller = contr;
    this.api = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    this.apiArchive = 'https://api.privatbank.ua/p24api/exchange_rates?json&date='
    // this.date = new Date().toLocaleDateString();
    this.currencies = ['USD', 'EUR', 'RUR', 'BTC']
  }

  getRate(){
    fetch(this.api).then(data => data.json()).then((arr) => {
      this.controller.getRate(arr, new Date().toLocaleDateString());
    });
  }

  getArchiveDate(date) {
    fetch(this.apiArchive + date).then(data => data.json()).then((obj) => {
      // obj.exchangeRate.filter(curr => this.currencies.indexOf(curr) !== -1);
      let result = obj.exchangeRate.filter(curr => this.currencies.indexOf(curr) !== -1)
      console.log(result)
    })
  }
}