const firebaseConfig = {
    apiKey: "AIzaSyA352FVbV9bJQo9LaJy4XVAUkB2pOMn38E",
    authDomain: "stem-quiz-fde57.firebaseapp.com",
    databaseURL: "https://stem-quiz-fde57-default-rtdb.firebaseio.com",
    projectId: "stem-quiz-fde57",
    storageBucket: "stem-quiz-fde57.appspot.com",
    messagingSenderId: "933518400945",
    appId: "1:933518400945:web:da16e8dd128aeca93fb190",
    measurementId: "G-2VXPZT9F1X"
  };  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Final screen message
final_message();

// Functions
function final_message(){
    user = localStorage.getItem("user_name");
    score = localStorage.getItem("score");
    question_number = localStorage.getItem("question_number");
    user_email = localStorage.getItem("user_email");
    
   document.getElementById("final1").innerHTML = "Score: " + score;
   if (parseInt(score) < 60 ) {
        document.getElementById("final2").innerHTML = "Good Try! Try again for better scores!";
   } else if (parseInt(score) < 80 ){
        document.getElementById("final2").innerHTML = "Nice Work!😃";
   } else 
        document.getElementById("final2").innerHTML = "Congratulations! Great Score!👏";
   document.getElementById("final3").innerHTML = "Thank you for participating, " + user + "!";
   document.getElementById("final4").innerHTML = "You have answered a total of "+ question_number +"/20 questions.";
   document.getElementById("qprog").style.width = parseInt(question_number)*5 + "%";

   firebase.database().ref("users/"+localStorage.getItem("user_id") ).set(
       {
        name: user,  
        email: user_email,
        question_number: question_number,
        score: score
       }
   );
}

function gotohome(){
    window.location = "./index.html"
}