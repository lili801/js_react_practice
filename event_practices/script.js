// ======================================================
// 1. CLICK EVENT
// ======================================================

const clickBtn = document.querySelector("#clickBtn");
const clickResult = document.querySelector("#clickResult");

clickBtn.addEventListener("click", function () {

    clickResult.textContent = "Button was clicked!";

});


// ======================================================
// 2. DOUBLE CLICK EVENT
// ======================================================

const doubleBtn = document.querySelector("#doubleBtn");
const doubleResult = document.querySelector("#doubleResult");

doubleBtn.addEventListener("dblclick", function () {

    doubleResult.textContent = "You double-clicked the button!";

});


// ======================================================
// 3. MOUSE EVENTS
// ======================================================

const mouseBox = document.querySelector("#mouseBox");


// mouse enters
mouseBox.addEventListener("mouseenter", function () {

    mouseBox.classList.add("active");

});


// mouse leaves
mouseBox.addEventListener("mouseleave", function () {

    mouseBox.classList.remove("active");

});


// mouse moves
mouseBox.addEventListener("mousemove", function () {

    console.log("Mouse is moving");

});


// ======================================================
// 4. KEYBOARD EVENTS
// ======================================================

const nameInput = document.querySelector("#nameInput");
const keyResult = document.querySelector("#keyResult");


// keydown
nameInput.addEventListener("keydown", function (event) {

    keyResult.textContent =
        "Key pressed: " + event.key;

});


// keyup
nameInput.addEventListener("keyup", function (event) {

    console.log("Key released:", event.key);

});


// ======================================================
// 5. INPUT EVENT
// ======================================================

const liveInput = document.querySelector("#liveInput");
const liveResult = document.querySelector("#liveResult");

liveInput.addEventListener("input", function (event) {

    liveResult.textContent = event.target.value;

});


// ======================================================
// 6. CHANGE EVENT
// ======================================================

const course = document.querySelector("#course");
const courseResult = document.querySelector("#courseResult");

course.addEventListener("change", function (event) {

    courseResult.textContent =
        "Selected course: " + event.target.value;

});


// ======================================================
// 7. FORM SUBMIT EVENT
// ======================================================

const myForm = document.querySelector("#myForm");
const username = document.querySelector("#username");
const formResult = document.querySelector("#formResult");

myForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    formResult.textContent =
        "Hello " + username.value;

});


// ======================================================
// 8. FOCUS AND BLUR
// ======================================================

const focusInput = document.querySelector("#focusInput");
const focusResult = document.querySelector("#focusResult");


// focus
focusInput.addEventListener("focus", function () {

    focusResult.textContent =
        "Input is focused";

});


// blur
focusInput.addEventListener("blur", function () {

    focusResult.textContent =
        "Input lost focus";

});


// ======================================================
// 9. MULTIPLE EVENT LISTENERS
// ======================================================

const multiBtn = document.querySelector("#multiBtn");
const multiResult = document.querySelector("#multiResult");


multiBtn.addEventListener("click", function () {

    console.log("First function executed");

});


multiBtn.addEventListener("click", function () {

    console.log("Second function executed");

});


multiBtn.addEventListener("click", function () {

    multiResult.textContent =
        "Three click listeners are attached!";

});


// ======================================================
// 10. EVENT OBJECT
// ======================================================

const eventObjectBtn =
    document.querySelector("#eventObjectBtn");

const eventObjectResult =
    document.querySelector("#eventObjectResult");


eventObjectBtn.addEventListener("click", function (event) {

    console.log(event);

    eventObjectResult.textContent =
        "Event type: " + event.type;

});