import {ViewExchange} from '/app/views/ViewExchange.js';
import {ModelExchange} from '/app/models/ModelExchange.js';

export class ControllerExchange {
  constructor() {
    this.model = new ModelExchange(this);
    this.view = new ViewExchange(this);
    this.actionGetRate();
  }

  actionGetRate() {
    this.model.getRate();
  }

  getRate(data) {
    this.view.render(data);
  }
}