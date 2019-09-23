export class ViewExchange {
  constructor(contr) {
    this.controller = contr;
    this.dom = document.querySelector('.exchange');
  }

  render(data) {
    this.dom.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card mt-4 bg-danger">
            <div class="card-header">
              <h4>Currency exchange today</h4>
              <p>(PB Branches)</p>
            </div>
            <div class="card-body">
              <h5 class="card-title"><i class="far fa-calendar-alt mr-2"></i>Дата сегодня</h5>
              <p class="card-text">
                ${data.map(elem => {
                  return `
                    <p class="course-block">
                      <span class="currency-type">${elem.ccy}</span>
                      <span class="currency-type">${elem.buy}/</span>
                      <span class="currency-type">${elem.sale}</span>
                    </p>`
                }).join(' ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
