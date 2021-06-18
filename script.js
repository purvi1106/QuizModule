/*Array of question,option and answers*/

var questions=[
    {
"question":"Which one of the following is a markup language?",
"option1":"HTML",
"option2":"Java",
"option3":"C++",
"option4":"Python",
"answer":"1"
},
    {
        "question":"What is the full form of CSS?",            "option1":"Computer Style Sheets",
"option2":"Colorful Style Sheets",
"option3":"Creative Style Sheets",
"option4":"Cascading Style Sheets",
"answer":"4"
},
   {
       "question": "The property in CSS used to change the background color of an element is-",
       "option1":"bgcolor",
       "option2":"color",
       "option3":"background-color",
       "option4":"All of the above",
       "answer":"3"
       },
   { 
       "question": "Are the negative values allowed in padding property?",
       "option1":"yes",
       "option2":"No",
       "option3":"Can't Say",
       "option4":"May be",
       "answer":"2"},
    {
        "question":"Which if the following CSS function allows us to perform calculations?",
        "option1":"calc() function",
        "option2":"calculator() function",
        "option3":"calculate() function",
        "option4":"cal() function",
        "answer":"1"}
]

// Variable Declaration
var currentQues=0;
var score=0;
var totalQues=questions.length;

var ques=document.getElementById("Questions");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nextbtn=document.getElementById("Nextbtn");
var quizmod=document.getElementById("QuizModule");
var result=document.getElementById("result");
var reset=document.getElementById("resetbtn");

/* Function to Load Question*/
function loadQuestion(questionIndex){
    nextbtn.textContent="Submit";
    var q=questions[questionIndex];
    ques.textContent=(questionIndex+ 1)+'. '+ q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;
};

/*Function to display next Question*/
function loadNextQuestion(){
var selectedOption=document.querySelector('input[type=radio]:checked');

     // Incrementing Score
    var ans=selectedOption.value;
    if(questions[currentQues].answer==ans){
        score++;
    }

   selectedOption.checked=false;
     currentQues++;
    if(currentQues==totalQues-1){
        document.getElementById("btn").textContent="Finish";
    }
    if(currentQues==totalQues)
    {
        quizmod.style.display='none';
        result.style.display='';
        reset.style.display='';
        document.getElementById("answerkey").style.display='';
        result.textContent="Score: "+ score;
        return;
    }
   
    loadQuestion(currentQues);
    document.getElementById("btn").style.display='none';
    nextbtn.style.display='';
    document.getElementById("crtbtn").style.display='none';
    document.getElementById("wrngbtn").style.display='none';
    document.getElementById("invalidbtn").style.display='none';
}

// Manually calling function for 0th index
loadQuestion(currentQues);

// Function to Reset test
function ReloadTest(){
    window.location.reload(true);
}
// function for Submitting Question
function SubmitQuestion(){
  var selectedOption2=document.querySelector('input[type=radio]:checked');
    if(!selectedOption2){
        document.getElementById("invalidbtn").style.display='';
    }else{
        var ans1=selectedOption2.value;
        if(questions[currentQues].answer==ans1)
        {
            document.getElementById("crtbtn").style.display='';
            document.getElementById("invalidbtn").style.display='none';
        }
        else
        {
        document.getElementById("wrngbtn").style.display='';
         document.getElementById("invalidbtn").style.display='none';
        }
        nextbtn.style.display='none';
        document.getElementById("btn").style.display='';
    }
}

