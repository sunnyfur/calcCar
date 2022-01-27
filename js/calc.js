const calc = () => {
    //список отмеченных опций
    let sum = 0;
    const options = document.querySelectorAll("input:checked, option:checked");

    for (let option of options) {
        // console.log(option.dataset.cost);
        if (option.style.display != "none") sum += +option.dataset.cost;
    }
    return sum;
};

const getCalc = () => {
    document.querySelector(".result").innerHTML = `Общая стоимость: ${calc().toLocaleString('ru-Ru')}р`;
};

const options = document.querySelectorAll("input, select");
for (let option of options) {
    option.addEventListener('change', getCalc);
};
getCalc();