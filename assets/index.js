    //Global Variables
    var correctAnswers = null;
    var wrongAnswers = null;
    var unAnswered = 7;

    //creates winning, losing, and times up img and text for modal
    var imgWin = $("<img>").attr("src", "http://3.bp.blogspot.com/-2FGPaKT7NhE/VQHdyVxiClI/AAAAAAAAFjc/Tamt5QZnve0/s1600/pauline.jpg").attr("style",  "width:auto;height:300px;");
    var textWin = $("<p>CORRECT!</p>").attr("style", "color:#20bf94;");
    var imgLose = $("<img>").attr("src", "https://cdn.geekwire.com/wp-content/uploads/2015/01/Screen-Shot-2015-01-07-at-10.13.55-AM-620x349.png").attr("style",  "width:auto;height:300px;");
    var textLose = $("<p>INCORRECT</p>").attr("style", "color:red;");
    var textTimeUp = $("<p>TIME UP!</p>").attr("style", "color:red;");
    var timeUpImg = $("<img>").attr("src", "https://images.vice.com/motherboard/content-images/article/no-id/1432655766073503.png?crop=0.7568253968253968xw:1xh;center,center&resize=1200:*").attr("style",  "width:auto;height:300px;");


    // Get the modal
    var modal = document.getElementById('myModal');
    // When the user clicks next question, close the modal
    $("#modal-btn").click(function () {
      modal.style.display = "none";
    });
    
    // Variable that will hold the setInterval
    var timer;
    var game = {
      correct: 0,
      incorrect: 0,
      counter: 30,
      countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
          console.log("TIME UP");
          //empties and appends time up to modal
          $(".modal-result").empty();
          $(".modal-result").append(textTimeUp);
          //empties and appends image to modal
          $(".modal-img").empty();
          $(".modal-img").append(timeUpImg);
          //hide next q button and show restart button
          $("#modal-btn").hide(); 
          $("#refresh-btn").removeClass("hide");
          // open the modal 
          modal.style.display = "block";
        }
      }
    };
    
    //play again button functions
    $(".play-again-btn").on("click", function () {
      location.reload();
    });
    
    /*
  //full reset not quite functional
    $(".play-again-btn").on("click", function () {
      //show header
      $(".header").removeClass("hide");
      //show start text
      $("#start-text").removeClass("hide");
      //show start button
      $("#start-button").removeClass("hide");
      //hide scores
      $(".scores").addClass("hide");
      //hides trivia q's
      $(".question1").addClass("hide");
      $(".question2").addClass("hide");
      $(".question3").addClass("hide");
      $(".question4").addClass("hide");
      //hides time remaining
      $("#counter-wrapper").addClass("hide");
      //close modal
      modal.style.display = "none";
      $("#modal-btn").show();
      $("#refresh-btn").addClass("hide");
    });
    */

    //funcion to render trivia forms
    function renderTrivia() {
      $(".header").addClass("hide");
      //hides start text
      $("#start-text").addClass("hide");
      //hides start button
      $("#start-button").addClass("hide");
      //shows scores
      $(".scores").removeClass("hide");
      //shows trivia qs
      $(".question1").removeClass("hide");
      //shows time remaining
      $("#counter-wrapper").removeClass("hide");
      console.log("RENDER TRIVIA WORKED");
    };

    //function to use render trivia function when button clicked
    $("#start-button").on("click", function (event) {
      //prevent default behavior
      event.preventDefault();
      //calls render forms function
      renderTrivia();
      //starts timer
      timer = setInterval(game.countdown, 1000);
    });

     //Q1 correct answer function
     $(".correct-answer1").on("click", function () {
      //adds to correct answers
      correctAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textWin);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgWin);
      // open the modal 
  	  modal.style.display = "block";
       
      //hide questions
      $(".question1").addClass("hide");
      //hides answers when clicked
      $(".answers1").addClass("hide");
      //shows question 2
      $(".question2").removeClass("hide");
      //updates correct answers to html
      $(".correct-answers").text(correctAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(correctAnswers);
    });

    //q1 wrong answer function
    $(".incorrect-answer1").on("click", function () {
      //adds to wrong answers
      wrongAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textLose);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgLose);
      // open the modal 
  	  modal.style.display = "block";
      
      //hides questions
      $(".question1").empty();   
      //hides answers
      $(".answers1").addClass("hide");
      //shows question 2
      $(".question2").removeClass("hide");
      //updates wrong answers
      $(".wrong-answers").text(wrongAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(wrongAnswers);
    });

    //q2 correct answer function
    $(".correct-answer2").on("click", function () {
      //adds to correct answers
      correctAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textWin);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgWin);
      // open the modal 
  	  modal.style.display = "block";
       
      //hide questions
      $(".question2").addClass("hide");
      //hides answers when clicked
      $(".answers2").addClass("hide");
      //shows question 2
      $(".question3").removeClass("hide");
      //updates correct answers to html
      $(".correct-answers").text(correctAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(correctAnswers);
    });
    

    //q2 wrong answer function (need to animate q3)
    $(".incorrect-answer2").on("click", function () {
      //adds to wrong answers
      wrongAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textLose);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgLose);
      // open the modal 
  	  modal.style.display = "block";
      
      //hides questions
      $(".question2").empty();   
      //hides answers
      $(".answers2").addClass("hide");
      //shows question 2
      $(".question3").removeClass("hide");
      //updates wrong answers
      $(".wrong-answers").text(wrongAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(wrongAnswers);
    });

    //q3 correct answer function
    $(".correct-answer3").on("click", function () {
      //adds to correct answers
      correctAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textWin);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgWin);
      // open the modal 
  	  modal.style.display = "block";
      
      //hide questions
      $(".question3").addClass("hide");
      //hides answers when clicked
      $(".answers3").addClass("hide");
      //shows question 2
      $(".question4").removeClass("hide");
      //updates correct answers to html
      $(".correct-answers").text(correctAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(correctAnswers);
    });
    
    //incorrect q3
    $(".incorrect-answer3").on("click", function () {
      //adds to wrong answers
      wrongAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textLose);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgLose);
      // open the modal 
  	  modal.style.display = "block";
      
      //hides questions
      $(".question3").empty();   
      //hides answers
      $(".answers3").addClass("hide");
      //shows question 2
      $(".question4").removeClass("hide");
      //updates wrong answers
      $(".wrong-answers").text(wrongAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(wrongAnswers);
    });
    
    //question4 correct
    $(".correct-answer4").on("click", function () {
      //adds to correct answers
      correctAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textWin);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgWin);
      // open the modal 
  	  modal.style.display = "block";
      
      //hide questions
      $(".question4").addClass("hide");
      //hides answers when clicked
      $(".answers4").addClass("hide");
      //shows question 2
      $(".question5").removeClass("hide");
      //updates correct answers to html
      $(".correct-answers").text(correctAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(correctAnswers);
    });

    //question4 incorrect
    $(".incorrect-answer4").on("click", function () {
      //adds to wrong answers
      wrongAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textLose);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgLose);
      // open the modal 
  	  modal.style.display = "block";
      
      //hides questions
      $(".question4").empty();   
      //hides answers
      $(".answers4").addClass("hide");
      //shows question 2
      $(".question5").removeClass("hide");
      //updates wrong answers
      $(".wrong-answers").text(wrongAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(wrongAnswers);
    });

    //question5 correct
    $(".correct-answer5").on("click", function () {
      //adds to correct answers
      correctAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textWin);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgWin);
      // open the modal 
  	  modal.style.display = "block";
      
      //hide questions
      $(".question5").addClass("hide");
      //hides answers when clicked
      $(".answers5").addClass("hide");
      //shows question 2
      $(".question6").removeClass("hide");
      //updates correct answers to html
      $(".correct-answers").text(correctAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(correctAnswers);
    });   

    //question5 incorrect
    $(".incorrect-answer5").on("click", function () {
      //adds to wrong answers
      wrongAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textLose);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgLose);
      // open the modal 
  	  modal.style.display = "block";
      
      //hides questions
      $(".question5").empty();   
      //hides answers
      $(".answers5").addClass("hide");
      //shows question 2
      $(".question6").removeClass("hide");
      //updates wrong answers
      $(".wrong-answers").text(wrongAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(wrongAnswers);
    });

    //question6 correct
    $(".correct-answer6").on("click", function () {
      //adds to correct answers
      correctAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textWin);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgWin);
      // open the modal 
  	  modal.style.display = "block";
      
      //hide questions
      $(".question6").addClass("hide");
      //hides answers when clicked
      $(".answers6").addClass("hide");
      //shows question 2
      $(".question7").removeClass("hide");
      //updates correct answers to html
      $(".correct-answers").text(correctAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      console.log(correctAnswers);
    });   

    //question6 incorrect
    $(".incorrect-answer6").on("click", function () {
      //adds to wrong answers
      wrongAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textLose);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgLose);
      // open the modal 
  	  modal.style.display = "block";
      
      //hides questions
      $(".question6").empty();   
      //hides answers
      $(".answers6").addClass("hide");
      //shows question 2
      $(".question7").removeClass("hide");
      //updates wrong answers
      $(".wrong-answers").text(wrongAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      //console.log(wrongAnswers);
    });

    //question7 correct
    $(".correct-answer7").on("click", function () {
      //adds to correct answers
      correctAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textWin);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgWin);
      // open the modal 
  	  modal.style.display = "block";
      
      //hide questions
      $(".question7").addClass("hide");
      //hides answers when clicked
      $(".answers7").addClass("hide");
      //shows question 2
      $(".question8").removeClass("hide");
      //updates correct answers to html
      $(".correct-answers").text(correctAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      //console.log(correctAnswers);
    });  

    //question7 incorrect
    $(".incorrect-answer7").on("click", function () {
      //adds to wrong answers
      wrongAnswers++;
      //subtracts from remaining questions
      unAnswered--;
      
      //clears then appends win text to modal
      $(".modal-result").empty();
      $(".modal-result").append(textLose);
      //clears then appends image to modal
      $(".modal-img").empty();
      $(".modal-img").append(imgLose);
      // open the modal 
  	  modal.style.display = "block";
      
      //hides questions
      $(".question7").empty();   
      //hides answers
      $(".answers7").addClass("hide");
      //shows question 2
      $(".question8").removeClass("hide");
      //updates wrong answers
      $(".wrong-answers").text(wrongAnswers);
      //updates unanswered
      $(".un-answered").text(unAnswered);
      //console.log(wrongAnswers);
    });