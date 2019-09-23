export class ModelExchange {
  constructor(contr) {
    this.controller = contr;
    this.api = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  };

  getRate(){
    fetch(this.api).then(data => data.json()).then((arr) => {
      this.controller.getRate(arr);
    });
  };
};