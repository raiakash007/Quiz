$(function () {
    
    //all question variables
    var allQuestions;

    //array of questions
    allQuestions = [{
        question: "Q.1 Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 0
    }, {
        question: "Q.2 Name the king who failed to keep an eye on things at the battle of Hastings ?",
        choices: ["David Cameron", "Harold", "Winston Churchill", "Tony Blair"],
        correctAnswer: 1
    }, {
        question: "Q.3 In which sport would you use a chucker ?",
        choices: ["Ice hockey", "Billiards", "Polo", "Curling"],
        correctAnswer: 2
    }, {
        question: "Q.4 Who developed PHP?",
        choices: ["Albert Einstein", "Rasmus Lardorf", "Sikandar", "Sachin Tendulkar"],
        correctAnswer: 1
    },{
        question: "Q.5 What is www?",
        choices: ["World Wide Web", "World Wide Wonder", "World War Wonder", "Wonder War World"],
        correctAnswer: 0
    }];

    //correct answers variables
    var correctAnswers = 0;
    
    //correct question variable
    var currentQuestion = 0;
    
    var answer = allQuestions[currentQuestion].choices[allQuestions[currentQuestion].correctAnswer];

    function init() 
    {
        var question    = allQuestions[currentQuestion].question;
        var $questions  = $(".form input");
                
        $("<h1></h1>").text("Welcome"+" "+$("#name").val()).insertBefore("form");

        $questions.each(function (index) {
            
            var choices = allQuestions[currentQuestion].choices[index];
            $(this).next().text(choices);
        });

        $("<h2></h2>").text(question).insertBefore("form");
        $("<button>Next</button>").addClass("next").prop("disabled",true).on('click', addView).insertAfter("form");
    }

    function addView() 
    {
        var $input = $("#form").children();

        currentQuestion++;
        
        $("h2, button").remove();
        $input.prop('checked', false);
        
        //reset all the options text colors
        $("#ans0").css("color","white");
        $("#p0").text("");
        $("#ans1").css("color","white");
        $("#p1").text("");
        $("#ans2").css("color","white");
        $("#p2").text("");
        $("#ans3").css("color","white");
        $("#p3").text("");
        
        var question = allQuestions[currentQuestion].question;    
        var $questions = $(".form input");

        $questions.each(function (index) {
            var choices = allQuestions[currentQuestion].choices[index];
            $(this).next().text(choices);
        });

        $("<h2></h2>").text(question).insertBefore("form");
        $("<button>Next</button>").addClass("next").prop("disabled", true).on('click', addQuestion).insertAfter("form");
        $('input[name=group1]').prop("disabled",false);

    }

    function addQuestion() 
    {
        if (currentQuestion < 4) 
        {
            addView();           
        }else 
        {
            alert("Thanks for playing the quiz");
            window.location.href = "http://localhost/Quiz/index.html";    
        }
    }

    function blaat() 
    {
        var isChecked = $('input[name=group1]:checked').length;
        if (isChecked) 
        {
            $('input[name=group1]').prop("disabled",true);
            $(".form").find(".next").prop("disabled", false);
            
            var answer = $('input[name=group1]:checked', '#form').next().text();
            checkAnswer(answer);
        }
    }

    function checkAnswer(answer) 
    { 
       
        var correctAnswer = allQuestions[currentQuestion].correctAnswer;
        var indexAnswer = allQuestions[currentQuestion].choices[correctAnswer];
        
        if(answer)
        {
                if(correctAnswer == 0)
                {
                        $("#ans0").css("color","green");
                        $("#p0").text("is correct answer").css("color","green").insertAfter("#ans0");
                        $("#ans1").css("color","red");
                        $("#ans2").css("color","red");
                        $("#ans3").css("color","red");

                }else if(correctAnswer == 1)
                {
                        $("#ans1").css("color","green");
                        $("#p1").text("is correct answer").css("color","green").insertAfter("#ans1");
                        $("#ans0").css("color","red");
                        $("#ans2").css("color","red");
                        $("#ans3").css("color","red");

                }else if(correctAnswer == 2)
                {
                        $("#ans2").css("color","green");
                        $("#p2").text("is correct answer").css("color","green").insertAfter("#ans2");
                        $("#ans0").css("color","red");
                        $("#ans1").css("color","red");
                        $("#ans3").css("color","red");

                }else if(correctAnswer == 3)
                {
                        $("#ans3").css("color","green");
                        $("#p3").text("is correct answer").css("color","green").insertAfter("#ans3");
                        $("#ans0").css("color","red");
                        $("#ans1").css("color","red");
                        $("#ans2").css("color","red");

                }
            }
                    
        if (indexAnswer == answer) 
        {    
            alert("Correct Answer");
            return answer;
        }else{
            
            alert("Answer is not correct!");
        }
    }

    $("#start").on("click", function () {
        
        if($("#name").val() == "")
            {
                alert("Please enter your name.");
                return false;
            }else{
                $(".start").css("display", "none");
                $(".quiz").find(".form").removeClass("hidden");
                init();
            }
    });

    $(".form input").on("change", blaat);
});