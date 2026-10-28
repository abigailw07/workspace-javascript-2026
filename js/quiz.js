function randInt(min,max) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

let M = randInt(500,700);
document.getElementById("M").innerHTML = M.toString();

// generate random for N, and update the textContent
let N = randInt(50,200);
document.getElementById("N").innerHTML = N.toString();

// generate random number for k, and update the textContent
let K = randInt(1,10);
document.getElementById("K").innerHTML = K.toString();

//update the answer selction
document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " - " + K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " - " + K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " - " + K.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " + " + K.toString();

// change style of the answer block -- click -- selected to unselected, unselected to selected
function changeStyle() {
    event.preventDefault();
    console.log(this.getAttribute('class')); // this refers to the object which call the function
    let classname = this.getAttribute('class');
    if (classname == "answer selected") {
        classname = "answer";
    } // change the answer to answer selected
    else {
        classname = "answer selected";
    }
    this.setAttribute('class', classname);
}




// Event --- Action
document.getElementsByClassName("answer")[0].addEventListener("click", changeStyle);

// Optional for the student 