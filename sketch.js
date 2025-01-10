var txt = "He is coming up on his final lap!";
let font;
var centerX;
var centerY;
let nouns;

document.addEventListener('keydown', function() {
    newWord();
  });

//get distance nouns as array nouns
async function getDistanceNouns (){
    const response = await fetch("/dataset/distance-nouns.json")
    const data = await response.json();
    console.log(data);
    nouns = data;
}

//get distance nouns as array nouns
// fetch("/dataset/distance-nouns.json")
// .then(response => response.json())
// .then(data=>{
//     console.log(data);
//     console.log(data.words);
//     nouns = data;
// })
// .catch(error => console.error('Error:', error));

function preload(){
    font = loadFont('/assets/DMSans-VariableFont_opsz,wght.ttf')
}

function setup () {
    getDistanceNouns();
    createCanvas(windowWidth,windowHeight);
    
    textFont(font, 36);

    centerX = width/2;
    centerY = height/2;
}

function draw () {
    background(255);
    textAlign(CENTER,CENTER);
    textWrap(WORD);
    text(txt,centerX,centerY);

    onkeyup = (event) => {};

}

function mouseClicked(){
    newWord();
}

function newWord (){
   
    //turn sentence into individual words to get last word
    let sentence = RiTa.tokenize(txt);
    console.log(sentence);

    //get last word
    // let newWord = sentence[7];
    // console.log(newWord);

    //get rid of end of sentence
    newSentence = sentence.slice(0,7);
    console.log(newSentence);

    //select last word randomly using array of distance nouns
    let newWord = nouns.words[Math.floor(Math.random() * 38)]
    console.log(newWord)


    //get the last word if its multiple words
    // let lastElement = sentence.length;
    // lastElement -= 2;

    // let lastWord = sentence[lastElement];
    // console.log(lastWord);

    //set last word in the sentence as the new one
    // let lastPhrase = sentence.sliced[7,lastElement]
    // console.log(lastPhrase);
    // sentence [7,lastElement] = newWord;
    // console.log(sentence);


    newSentence.push(newWord,"!");

    //recombine into string and display
    txt = RiTa.untokenize(newSentence);
    console.log(txt);
}

