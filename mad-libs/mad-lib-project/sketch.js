var data;

var txt = 'Hi $$PARTICIPANT_NAME$$, This is $$RESEARCHER_NAME$$ from Uber. I was hoping we could speak about the research study we\'re running on $$DAY_OF_WEEK$$, $$DATE$$, in $$CITY$$ that offers $$INCENTIVE$$. You had replied to my recent email by completing a form saying you were interested. Please let me know when is a good time to call you to confirm the research session. Thank you!';


function setup() {

    noCanvas();

    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/u/1/d/1spGlDz4srCR7rEenKYo1QEjmiQPKxTbqanxWqf5aAjw/pubhtml',
        callback: gotData,
        simpleSheet: true
    });

    var button = createButton('Generate email text');
    button.mousePressed(generate);
}

function replacer(match, pos) {
    var entry = random(data);
    return entry[pos];
}

function generate() {
    //console.log('generate');
    var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
    createP(madlib);
}




function gotData(stuff, tabletop) {
    data = stuff;
    console.log(data);
}