const quizData = [
    {
        question: "What HTML stands for?",

        a:"Hyper Text make language",
        b:"Hyper Tension Maker Loop",
        c:"Hyper Text Markup Language",
        d:"Hover text main list",

        correct : "c",
        
    },

    {
        question: "Which tag is used to display headings",
        
        a : "<head> tag",
        b : "<h1> to <h6> tag",
        c : "<header> tag",
        d : "none",

        correct : "b",
    },

    {
        question: "when HTML is created?",

        a : "1993",
        b : "1999",
        c : "1890",
        d : "1970",
        
        correct : "a",
    },

    {
        question: "Who Developed HTML",
        
        a : "Bill Gates",
        b : "Tim Berners Lee",
        c : "Elon Musk",
        d : "Charles Babbage",

        correct : "b",
    },

    {
        question: "<meta http-equiv='X-UA-Compatible' content='IE=edge'/>\nWhy is this meta tag is used",

        a : "to support Internet Explorer",
        b : "to support Chrome",
        c : "to support Firefox",
        d : "none",

        correct : "a",

    },

    {
        question: "what is the use of <strong> tag.",

        a : "to make the word strong",
        b : "to change size of text",
        c : "Change the color of the text",
        d : "To make the corresponding text Bold",

        correct : "d",
    },

    {

        question: "Why <select> tag is used.",

        a : "to create lists",
        b : "to create dropdown-list",
        c : "to create blank spaces",
        d : "to move texts",

        correct : "b",    
    },

    {
        question: "where we usually save the title of the document",

        a : "<body>",
        b : "<script>",
        c : "<head>",
        d : "<footer>",

        correct : "c",
    },

    {
        question: "How many version HTML is evolved.",

        a : "1",
        b : "2",
        c : "4",
        d : "5",

        correct : "d",
    },

    {
        question: "what type of Language is HTML",

        a : "Programming language",
        b : "markup language",
        c : "styling language",
        d : "assembly language",

        correct : "b",
    }

];

   const quiz = document.getElementsById("quiz");  
   const answerElements = document.querySelectorAll(".answer");  
   const questionElement = document.getElementById("Q");  
   const a_text = document.getElementById("a_text");  
   const b_text = document.getElementById("b_text");  
   const c_text = document.getElementById("c_text");  
   const d_text = document.getElementById("d_text");  
   const submitButton = document.getElementById("finish");  
   let currentQuiz = 0;  
   let score = 0;  
   const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
   };  
   const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
     if (answerElement.checked) answer = answerElement.id;  
    });  
    return answer;  
   };  
   const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
   };  
   loadQuiz();  
   submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
     if (answer === quizData[currentQuiz].correct) score++;  
     currentQuiz++;  
     if (currentQuiz < quizData.length) loadQuiz();  
     else {  
      quiz.innerHTML = `  
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
         <button onclick="history.go(0)">Play Again</button>  
       `  
     }  
    }  
   });  