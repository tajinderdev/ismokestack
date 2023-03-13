$("#BACKWARD").click(function () {
    $("#section_1").fadeOut("slow");

    $("#welcome_section").fadeIn("slow");
});

$("#Forward").click(function () {
    $("#main1").fadeOut("slow");

    $("#main2").fadeIn();
});

$(document).ready(function () {
    setTimeout(function () {
        $("#welcome_section").fadeOut("slow");
    }, 3100);

    setTimeout(function () {
        $("#section_1").fadeIn("slow");
    }, 3610);
});

$(".i-text").click(function () {
    $("#section_1").fadeOut("slow");

    $("#section_2").fadeIn("slow");
});

$("#con_btn").click(function () {
    $("#section_2").fadeOut("slow");

    $("#section_3").fadeIn("slow");
});

$("#con_btn2").click(function () {
    $("#section_3").fadeOut("slow");

    $("#section_4").fadeIn("slow");
});

$("#con_btn3").click(function () {
    $("#section_4").fadeOut("slow");

    $("#section_5").fadeIn("slow");
});

$("#con_btn4").click(function () {
    $("#section_5").fadeOut("slow");

    $("#section_6").fadeIn("slow");
});

$("#con_btn5").click(function () {
    $("#section_6").fadeOut("slow");

    $("#section_7").fadeIn("slow");
});

$("#con_btn6").click(function () {
    $("#section_7").fadeOut("slow");

    $("#section_8").fadeIn("slow");
});

$("#con_btn7").click(function () {
    $("#section_8").fadeOut("slow");

    $("#section_9").fadeIn("slow");
});

$("#con_btn8").click(function () {
    $("#section_9").fadeOut("slow");

    $("#section_10").fadeIn("slow");
});

$("#con_btn9").click(function () {
    $("#section_10").fadeOut("slow");

    $("#section_11").fadeIn("slow");
});

$("#con_btn10").click(function () {
    $("#section_11").fadeOut("slow");

    $("#section_12").fadeIn("slow");
});

$("#con_btn11").click(function () {
    $("#section_12").fadeOut("slow");

    $("#section_13").fadeIn("slow");
});

$("#con_btn12").click(function () {
    $("#section_13").fadeOut("slow");

    $("#section_14").fadeIn("slow");
});

$(".Claim").click(function () {
    $(".form-container").fadeIn("slow");
});

const sliderRange = document.querySelector(".slider-range");
const sliderHandle = document.querySelector(".slider-handle");
const sliderTrack = document.querySelector(".slider-track");

// set the initial range and value
let range = { min: parseInt(sliderRange.min), max: parseInt(sliderRange.max) };
let value = "90.4444%";

// set the initial position of the handle
let pos = setHandlePosition(valueToPosition(value));

// add event listeners to the handle and range slider
sliderHandle.addEventListener("mousedown", handleMouseDown);
sliderRange.addEventListener("input", handleRangeInput);

function handleMouseDown(e) {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
}

function handleMouseMove(e) {
    const trackRect = sliderTrack.getBoundingClientRect();
    const handleRect = sliderHandle.getBoundingClientRect();
    const handleY = e.clientY - trackRect.top - handleRect.height / 2;
    const rangeHeight = trackRect.height - handleRect.height;
    const position = Math.min(Math.max(0, handleY / rangeHeight), 1);
    const value = range.min + (1 - position) * (range.max - range.min);
    setHandlePosition(position);
    setValue(value);
}

function handleMouseUp(e) {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
}

function handleRangeInput(e) {
    const value = parseInt(e.target.value);
    setHandlePosition(valueToPosition(value));
}

function setHandlePosition(position) {
    sliderHandle.style.bottom = `${position * 100}%`;
}

function setValue(newValue) {
    value = newValue;
    sliderRange.value = newValue;
}

function valueToPosition(value) {
    const rangeDelta = range.max - range.min;
    const rangePosition = (value - range.min) / rangeDelta;
    return 1 - rangePosition;
}

// Function to close the form
function closeForm() {
    document.querySelector('.form-container').style.display = 'none';
}