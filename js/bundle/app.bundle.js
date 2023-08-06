// Import o importacion de codigo
import data from '../data.js';

// Elements o elementos
var activitiesContainer = document.querySelector('.dashboard__activities');
var datesContainer = document.querySelector('.dashboard__dates');
var btnActivities = document.querySelectorAll('.dashboard__frequency');

// Variables
var arrayDaily = data.map(function (item) {
  return item.timeframes.daily;
});
var arrayWeekly = data.map(function (item) {
  return item.timeframes.weekly;
});
var arrayMonthly = data.map(function (item) {
  return item.timeframes.monthly;
});

// Events o eventos
eventsListeners();
function eventsListeners() {
  datesContainer.addEventListener('click', selectBtn);
}

// funciones
drawCards(arrayDaily);
function selectBtn(e) {
  if (e.target.id === 'daily') {
    drawCards(arrayDaily);
  }
  if (e.target.id === 'monthly') {
    drawCards(arrayMonthly);
  }
  if (e.target.id === 'weekly') {
    drawCards(arrayWeekly);
  }
  activeClicked(e.target);
}
function activeClicked(element) {
  btnActivities.forEach(function (btn) {
    return btn.classList.remove('active');
  });
  element.classList.add('active');
}
function drawCards(array) {
  activitiesContainer.innerHTML = '';
  array.forEach(function (item, index) {
    var title = data[index].title;
    activitiesContainer.innerHTML += "\n        <article class=\"dashboard__card\">\n            <header class=\"dashboard__header\">\n                <img src=\"assets/img/icon-".concat(title.toLowerCase() === 'self care' ? 'self-care' : title.toLowerCase(), ".svg\" alt=\"image work\">\n            </header>\n\n            <div class=\"dashboard__details\">\n                <section class=\"dashboard__activity\">\n                    <p class=\"dashboard__title\">").concat(title, "</p>\n                    <img src=\"assets/img/icon-ellipsis.svg\" alt=\"three dots\">\n                </section>\n\n                <section class=\"dashboard__description\">\n                    <h2 class=\"dashboard__hours\">").concat(item.current, " hours</h2>\n                    <p class=\"dashboard__weeks\">Last Week - ").concat(item.previous, "hrs</p>\n                </section>\n            </div>\n        </article>\n        ");
  });
}