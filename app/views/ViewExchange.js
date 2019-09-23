export class ViewExchange {
  constructor(contr) {
    this.controller = contr;
    this.dom = document.getElementById('exchange');
  }

  render(data, date) {
    this.dom.innerHTML = `
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
                <span class="currency-type">${elem.ccy}</span>
                <span class="currency-type">${elem.buy} /</span>
                <span class="currency-type">${elem.sale}</span>
              </p>`
          }).join(' ')}
        </p>
      </div>
    </div>
    `
  }
}
