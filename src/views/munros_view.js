
const MunrosView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunrosView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const munrosInfoList = this.createList();
  munroContainer.appendChild(munrosInfoList);

  this.munrosContainer.appendChild(munroContainer);
};

MunrosView.prototype.createMunroHeading = function () {
  const name = document.createElement('h3');
  name.classList.add('munro-name');
  name.textContent = this.munro.name;
  return name;
};


MunrosView.prototype.createList = function (infos) {
  const list = document.createElement('ul');

    infos.forEach((munroItem) => {
    const listItem = document.createElement('li');
    listItem.textContent = this.munro.height;
    list.appendChild(listItem);
  });
}
// MunrosView.prototype.createMunrosInfoList = function () {
//   const munrosInfoList = document.createElement('ul');
//   const munroMeaning = document.createElement('li');
//   console.log(munro.meaning);
//     munroMeaning.textContent = munro.meaning;
//     munrosInfoList.appendChild(munroMeaning);
//   const munroHeight = document.createElement('li');
//     munroHeight.textContent = munro.height;
//     munrosInfoList.appendChild(munroHeight);
// });


//
// //   munrosInfoList.classlist.add('info');
//   // this.populateList(munrosInfoList);
// //   return munrosInfoList;
// };
//
// MunrosView.prototype.createMunrosInfoList = function (list) {
//   this.munro.forEach((munro) => {
//     const munroMeaning = document.createElement('li');
//     munroMeaning.textContent = munro.meaning;
//     list.appendChild(munroMeaning);
//     const munroHeight = document.createElement('li');
//     munroHeight.textContent = munro.height;
//     list.appendChild(munroHeight);
//   })
// };

module.exports = MunrosView;
