let dateslabel = document.getElementById('dates-label');
let str = "Valid Dates = [";
for (let i = 1; i <= 31; i++) {
    str = str.concat(i.toString());
    if (i != 31) str = str.concat(", ");
}
str = str.concat("]");
dateslabel.innerHTML = str;
function myFunction() {

    let monthInput = document.getElementById('month-input');
    let dateInput = document.getElementById('date-input');
    let output = document.getElementById('output');


    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const month_slugs = ["Mojadar", "Pocha", "Mochmoche", "Tatka", "Jhal", "Norom", "Toshtoshe", "Gorom", "Uradhura", "Faltu", "Tok", "Panshe"];

    const date_slugs = ["Roshogolla", "Shutki", "Jhalmuri", "Khichuri", "Jilapi", "Doi", "Kalabhuna", "Beguni", "Fuchka", "Ilish Bhaja", "Bakorkhani", "Lacchi", "Chotpoti", "Sondesh", "Singara", "Kacchi", "Borhani", "Moglai", "Dalpuri", "Korola Bhaji", "Kabab", "Bhapa Pitha", "Mula Bhaji", "Payesh", "Faluda", "Tehari", "Chingri", "Cha", "Alu Bhorta", "Kulfi", "Dim Bhaji"];

    let meme_dictionary = new Map();

    for (let i = 0; i < 12; i++) {
        meme_dictionary.set(months[i], month_slugs[i]);
    }

    for (let i = 1; i <= 31; i++) {
        meme_dictionary.set(i.toString(), date_slugs[i - 1]);
    }
    let firstWord = meme_dictionary.get(monthInput.value.trim().toLowerCase());
    let secondWord = meme_dictionary.get(dateInput.value.trim());


    if (firstWord === undefined || secondWord == undefined) {
        output.innerHTML = "Invalid Input!";    
        output.style.color = "red";
    } else {
        output.style.color = "green";
        output.innerHTML = "You are " + firstWord + " " + secondWord + "!!";
    }
}