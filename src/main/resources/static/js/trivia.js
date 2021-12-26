window.addEventListener('DOMContentLoaded', event => {

  // ON ready

});


let question;
let posibleQuestions;
let data;
let rounds = 1;
let countRound;
let score = 0;


async function triviaData(){



    const request = await fetch('api/trivia/find/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    data = await request.json();
    console.log(data)



    selectQuestionRandom();

}



function selectQuestion(id){

    question = data[id];
    //console.log(question);
    document.getElementById("category").innerHTML = question.category;
    document.getElementById("score").innerHTML = score;
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("answer1").innerHTML = question.answer;
    document.getElementById("answer2").innerHTML = question.wrongAnswer1;
    document.getElementById("answer3").innerHTML = question.wrongAnswer2;
    document.getElementById("answer4").innerHTML = question.wrongAnswer3;

}

function selectQuestionRandom(n){
    //selectQuestion(Math.floor((Math.random()* data.length)/n) );
    selectQuestion(Math.floor((Math.random()* (-n)-n)) );
}

function countRounds(){

    switch (rounds) {
        case 1: rounds = 1;
                selectQuestion(Math.floor((Math.random()* (1-5)) ));
                rounds++;
            break;
        case 2: rounds = 2;
                selectQuestion(Math.floor((Math.random()* (6-10)) ));
                rounds++;
            break;
        case 3: rounds = 3;
                selectQuestion(Math.floor((Math.random()* (11-15)) ));
                rounds++;
            break;
        case 4 : rounds = 4;
                selectQuestion(Math.floor((Math.random()* (16-20)) ));
                rounds++;
            break
        case 5 : rounds = 5;
                selectQuestion(Math.floor((Math.random()* (21-25)) ));
                rounds++;
            break

    }
    console.log(rounds)
    return rounds;
}

function scrambleAnswers(question){
    posibleQuestions = [
        question.answer,
        question.wrongAnswer1,
        question.wrongAnswer2,
        question.wrongAnswer3
        ];

    posibleQuestions.sort( ()=> Math.random() - 0.5 );
    document.getElementById("answer1").innerHTML = posibleQuestions[0];
    document.getElementById("answer2").innerHTML = posibleQuestions[1];
    document.getElementById("answer3").innerHTML = posibleQuestions[2];
    document.getElementById("answer4").innerHTML = posibleQuestions[3];
}