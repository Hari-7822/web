const data = [
    {
        Q : "What HTML stands for?",

        a:"Hyper Text make language",
        b:"Hyper Tension Maker Loop",
        c:"Hyper Text Markup Language",
        d:"Hover text main list",

        crt : "c",
        
    },

    {
        Q : "Which tag is used to display headings",
        
        a : "<head> tag",
        b : "<h1> to <h6> tag",
        c : "<header> tag",
        d : "none",

        crt : "b",
    },

    {
        Q : "when HTML is created?",

        a : "1993",
        b : "1999",
        c : "1890",
        d : "1970",
        
        crt : "a",
    },

    {
        Q : "Who Developed HTML",
        
        a : "Bill Gates",
        b : "Tim Berners Lee",
        c : "Elon Musk",
        d : "Charles Babbage",

        crt : "b",
    },

    {
        Q : "<meta http-equiv='X-UA-Compatible' content='IE=edge'/>\nWhy is this meta tag is used",

        a : "to support Internet Explorer",
        b : "to support Chrome",
        c : "to support Firefox",
        d : "none",

        crt : "a",

    },

    {
        Q : "what is the use of <strong> tag.",

        a : "to make the word strong",
        b : "to change size of text",
        c : "Change the color of the text",
        d : "To make the corresponding text Bold",

        crt : "d",
    },

    {

        Q : "Why <select> tag is used.",

        a : "to create lists",
        b : "to create dropdown-list",
        c : "to create blank spaces",
        d : "to move texts",

        crt : "b",    
    },

    {
        Q : "where we usually save the title of the document",

        a : "<body>",
        b : "<script>",
        c : "<head>",
        d : "<footer>",

        crt : "c",
    },

    {
        Q : "How many version HTML is evolved.",

        a : "1",
        b : "2",
        c : "4",
        d : "5",

        crt : "d",
    },

    {
        Q : "what type of Language is HTML",

        a : "Programming language",
        b : "markup language",
        c : "styling language",
        d : "assembly language",

        crt : "b",
    },

];

const quiz = document.getElementsByClassName('quiz');

const answer = document.querySelectorAll('.answer');
const ques = document.getElementById('Q');

const a = document.getElementById('a-text');
const b = document.getElementById('b-text');
const c = document.getElementById('c-text');
const d = document.getElementById('d-text');

const submit =  document.getElementById('finish');

let current = 0;
let score = 0;

const deselectAns = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const sel = ()=> {
    let answer;
    answerElements.forEach((answerElement) => {
        if(answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz =  () => {
    deselectAns();

    const currentQuiz = data[current];
    questionElement.innerText = currentQuiz.question;

    a.innerText = currentQuiz.a;
    b.innerText = currentQuiz.b;
    c.innerText = currentQuiz.c;
    d.innerText = currentQuiz.d;
};

loadQuiz();

submit.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === data[current].crt) score++;
        current++;
    if(current < data.length) loadQuiz();
    else {
        quiz.innerHTML  = <><h3>You scored ${score} of ${data.length} questions</h3><button onclick="history.go(0)">Play Again</button></>

    }

    }
});
