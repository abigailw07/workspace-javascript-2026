// practice with object
const foodDataBase = [
    {name: "Apple (1 medium)", calories: 95 },
    {name: "Banana (1 medium)", calories: 105 },
    {name: "Orange (1 medium)", calories: 62 },
];

let food = {name: "Chicken (1 medium)", calories: 150};
//food.cal = 300;
foodDataBase.push(food);
console.log(foodDataBase);

// create another food object and add one more food to the database
let food2 = {name: "Salad (1 bowl)", calories: 80};
foodDataBase.push(food2);
console.log(foodDataBase);

//foodDataBase.forEach(food => console.log(food));
for (let i in foodDataBase){
    let name = foodDataBase[i].name;
    let cal = foodDataBase[i].calories;
    if (cal < 100) {
        console.log("index " + i + " name: " + name + " cal: " + cal);
    }
}


// Hotel reservation Problem ---- database (array) to store the reservations
let reservationList = [];
function saveReservation() {
    let reservation = {
        name: document.querySelector("#guestname").value,
        checkin: document.getElementById('checkin').value,
        roomtype: document.getElementById('room').value
    }; // store all of information of one reservation
    reservationList.push(reservation);
    console.log(reservation);
    console.log(reservationList);
    alert("Thank you " + reservation.name + "for your reservation.");
    displayR();
}

// Event ---> Action
const sE = document.querySelector("#submit")
sE.addEventListener("click", saveReservation);

// Implement display reservation list
function displayR() {
    for (let i in reservationList) {
    result += "<table>";
        let name = reservationList[0].name;
        let roomtype = reservationList[0].roomtype;
        let checkin = reservationList[0].checkin;
        result += "<tr> <td>" + name + "</td> <td>" + roomtype + "</td> <td>" + checkin + "</td> </tr>";
    result += "</table>";
    }

    // display the table
    document.querySelector("#completelist").innerHTML = result;
}