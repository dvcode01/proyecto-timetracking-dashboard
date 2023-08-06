// Import o importacion de codigo
import data from './data.js';

// Elements o elementos
const activitiesContainer = document.querySelector('.dashboard__activities');
const datesContainer = document.querySelector('.dashboard__dates');
const btnActivities = document.querySelectorAll('.dashboard__frequency');

// Variables
const arrayDaily = data.map(item => item.timeframes.daily);
const arrayWeekly = data.map(item => item.timeframes.weekly);
const arrayMonthly = data.map(item => item.timeframes.monthly);

// Events o eventos
eventsListeners();
function eventsListeners(){
    datesContainer.addEventListener('click', selectBtn);
}

// funciones
drawCards(arrayDaily);

function selectBtn(e){
    if(e.target.id === 'daily'){
        drawCards(arrayDaily);
    }

    if(e.target.id === 'monthly'){
        drawCards(arrayMonthly);
    }

    if(e.target.id === 'weekly'){
        drawCards(arrayWeekly);
    }

    activeClicked(e.target);
}

function activeClicked(element){
    btnActivities.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

function drawCards(array){
    activitiesContainer.innerHTML = ''; 

    array.forEach((item, index) => {
        let title = data[index].title;

        activitiesContainer.innerHTML += `
        <article class="dashboard__card">
            <header class="dashboard__header">
                <img src="assets/img/icon-${
                    title.toLowerCase() === 'self care' ? 'self-care' : title.toLowerCase()
                }.svg" alt="image work">
            </header>

            <div class="dashboard__details">
                <section class="dashboard__activity">
                    <p class="dashboard__title">${title}</p>
                    <img src="assets/img/icon-ellipsis.svg" alt="three dots">
                </section>

                <section class="dashboard__description">
                    <h2 class="dashboard__hours">${item.current} hours</h2>
                    <p class="dashboard__weeks">Last Week - ${item.previous}hrs</p>
                </section>
            </div>
        </article>
        `;
    })
}