import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector('.form');

form.addEventListener('submit', createPromises);

function createPromises(event) {
    event.preventDefault();

    const delayInput = event.target.elements.delay;
    const stateInput = event.target.elements.state;

    const delayValue = parseInt(delayInput.value, 10);
    const stateValue = stateInput.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateValue === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delayValue} ms`);
            } else {
                reject(`❌ Rejected promise in ${delayValue} ms`);
            }
        }, delayValue);
    });

    promise
        .then((result) => {
            console.log(result);
            iziToast.success({
                title: 'Успіх',
                message: result,
            });
            delayInput.value = '';
            stateInput.value = '';
        })
        .catch((error) => {
            console.error(error);
            iziToast.error({
                title: 'Помилка',
                message: error,
            });
            delayInput.value = '';
            stateInput.value = '';
        });
};