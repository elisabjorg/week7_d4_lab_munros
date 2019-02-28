const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munros = [];
};

Munros.prototype.getData = function () {
  const request = new RequestHelper('https://munroapi.herokuapp.com/munros');
  request.get()
  .then((data) => {
  this.data = data;
  PubSub.publish('Munros:munros-data-ready', this.data);
  console.log(data);
  });
  // .catch((error) => console.error(error));
};


module.exports = Munros;
