var textfield;
var output;
var submit;

function setup() {
    noCanvas();

    textfield = select("#blueberry");

    textfield.input(newTyping);

    output = select("#output");
    submit = select("#submit");
    submit.mousePressed(newText);
}

function newTyping() {
    output.html(textfield.value());
}

function newText() {
    createP(textfield.value());
}