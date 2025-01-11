var txt = "He is coming up on his final lap!";
let font;
var centerX;
var textY;
var imgY;
var instructionsY;
let nouns;
let img;
var instructions = "Click for a new unit"

document.addEventListener('keydown', function() {
    newWord();
    newImage();
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
    img = loadImage('/assets/images/1.webp')
}

function setup () {
    getDistanceNouns();
    createCanvas(windowWidth,windowHeight);
    
    textFont(font, 36);

    centerX = width/2;
    
    imgY = height/2 - 40;
    instructionsY = 20;
}

function draw () {
    textY = height/2 + img.height/2 + 10;

    background(255);
    textAlign(CENTER,CENTER);
    textWrap(WORD);
    text(txt,centerX,textY);


    text(instructions,centerX,instructionsY)

    

    imageMode (CENTER);
    image(img,centerX,imgY,);
}

function mouseClicked(){
    newWord();
    newImage();
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

function newImage() {
    img = loadImage('/assets/images/' + (Math.floor(Math.random() * 7) + 1) + '.webp');
}

