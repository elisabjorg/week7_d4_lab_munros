const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const MunrosView = require('./munros_view.js');

const MunrosListView = function (container) {
  this.container = container;
};

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-data-ready', (evt) => {
    this.munros = evt.detail;
    this.render();
  });
};

MunrosListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new MunrosView(this.container, munro);
    munroView.render();
  });
};


module.exports = MunrosListView;
