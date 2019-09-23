import {ViewExchange} from '../views/ViewExchange.js';
import {ModelExchange} from '../models/ModelExchange.js';

export class ControllerExchange {
  constructor() {
    this.model = new ModelExchange(this);
    this.view = new ViewExchange(this);
    this.actionGetRate();
  };

  actionGetRate() {
    this.model.getRate();
  };

  getRate(data, date) {
    this.view.render(data, date);
  };

  getArchiveRate(data, date) {
    this.view.render(data, date);
  };

  actionGetArchiveRate(event) {
    let date = event.target.value.split('-').reverse().join('.');
    this.model.getArchiveRate(date);
  };
};
