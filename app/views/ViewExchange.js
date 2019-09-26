export class ViewExchange {
  constructor(contr) {
    this.controller = contr;
    this.exchangeContainer = document.getElementById('exchange');
    this.input = document.getElementById('calendar');
    this.input.addEventListener('change', this.controller.actionGetArchiveRate.bind(this.controller));
  };

  render(data, date) {
    this.exchangeContainer.innerHTML = `
    <div class="card mt-4 bg-success">
      <div class="card-header">
        <h4>Currency exchange</h4>
      </div>
      <div class="card-body">
        <h5 class="card-title"><i class="far fa-calendar-alt mr-2"></i>${date}</h5>
        <p class="card-text">
          ${data.map(elem => {
            return `
              <p class="course-block">
                <span class="currency-type">${elem.ccy ? elem.ccy : elem.currency}</span>
                <span class="currency-type">${elem.buy ? parseFloat(elem.buy).toFixed(2) : elem.purchaseRate} /</span>
                <span class="currency-type">${elem.sale ? parseFloat(elem.sale).toFixed(2) : elem.saleRate}</span>
              </p>`
          }).join('')}
        </p>
      </div>
    </div>
    `
  };
};
