function valuesEngine() {
    const engines = [
        ["Active", [
            ["TSI125", 0, "1.4 TSI 125 л.с."],
            ["TSI150", 47000, "1.4 TSI 150 л.с."]
        ]],
        ["Ambition", [
            ["TSI125", 0, "1.4 TSI 125 л.с."],
            ["TSI150", 50000, "1.4 TSI 150 л.с."],
            ["TSI180", 150000, "2.0 TSI 180 л.с."],
            ["TDI150", 200000, "2.0 TDI 150 л.с."]
        ]],
        ["Style", [
            ["TSI150", 47000, "1.4 TSI 150 л.с."],
            ["TSI180", 150000, "2.0 TSI 180 л.с."],
            ["TDI150", 200000, "2.0 TDI 150 л.с."]
        ]]
    ];

    return setValues = (value = "Active") => {
        let enginesList = [];
        for (let engine of engines) {
            if (value == engine[0]) {
                enginesList = engine[1]
                break;
            }
        };
        let select = document.querySelector('[name=engineForActive]');
        select.innerHTML = "";
        // select.empty();
        for (const val of enginesList) {
            var option = document.createElement("option");
            option.value = val[0];
            option.dataset.cost = val[1];
            option.text = val[2];
            select.appendChild(option);
        }
    };

}
const setValuesEngine = valuesEngine();
setValuesEngine();
document.querySelector("[name='style']").addEventListener('change', (e) => {

    let select = document.querySelector('[name=engineForActive]');
    let val = (e.target).querySelector("option:checked").value;
    setValuesEngine(val);

});


const selectionsAll = document.querySelectorAll("select");
for (let select of selectionsAll) {
    select.addEventListener('change', () => {
        let style = document.querySelector('[name=style]').value;
        let engine = document.querySelector('[name=engineForActive]').value;
        let transmissions = document.querySelectorAll('[name=transmission]');

        if ((style == "Ambition" || style == "Style") && (engine == "TSI180" || engine == "TDI150")) {
            for (transmission of transmissions) {
                if (transmission.matches("[value='automate7']")) {
                    transmission.disabled = false;
                    transmission.checked = true;
                } else {
                    transmission.disabled = true;
                }
            };
        } else {
            for (transmission of transmissions) {
                if (transmission.matches("[value='automate7']")) {
                    transmission.disabled = true;

                } else {
                    transmission.disabled = false;
                }

            };
            transmissions[0].checked = true;
        };

    })
};