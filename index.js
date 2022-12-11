let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save_EL");
let count = 0;

function increament() {
    count += 1
    countEL.textContent = count;
}

function save() {
    saveEL.textContent += count + " - ";
    countEL.textContent = 0;
    count = 0;

}