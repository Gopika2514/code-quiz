//list of all questions, choice ,and answers
var question = [

    // {
    // title: "Commonly used data types DO NOT include:",
    // choice1: "strings" , 
    // choice2: "booleans" ,
    // choice3: "alerts" ,
    // choice4: "numbers" ,
    // answer:"alerts"
    // },
    {
     title: "The condition in an if / else statement is enclosed within_____.",
     choices: ["quotes", "curly brackets","parenthrses","square brackets"],
     answer: "Parantheses"
    },
    {
        title:"Arrays in Javascript can be used to store _____.",
        choices:[
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer:"all of the above"
    },
    {
        title:
          "String values must be enclosed within _____ when being assigned to variables.",
        choices:["commas","curly brackets","quotes","parantheses"],
        answer: "quotes"  
    },
    {
        title:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices:["Javascript","terminal/bash","for loops","console.log"],
        answer:"console.log"
    }
    ]
    const startBtn=document.getElementById("start");
    const startContainer=document.getElementById("start-screen");
    const questionContainer=document.getElementById("question");

    function showQuestion() {
       const text=document.getElementById("question-text");
       const answers=document.getElementById("choices");
       for (var i=0; i<question.length; i++) {
           text.textContent=question[i].title;
           const btn=document.createElement("button"); 
            btn.setAttribute("id","choiceBtn");
            btn.setAttribute("data-value",`${question[i].choices[i]}`);
            btn.textContent=question[i].choices[i];
            
            answers.append(btn);
        } 

    }


 startBtn.addEventListener("click",function(){
     console.log("click");
     startContainer.style.visibility="hidden";
     questionContainer.style.visibility="visible";
     showQuestion()
 })











