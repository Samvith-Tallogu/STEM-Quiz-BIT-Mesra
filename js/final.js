const firebaseConfig = {
    apiKey: "AIzaSyCe_Kho7Vm7eCQP4NbynHAzZfeA2Duw_t4",
    authDomain: "stem-quiz-bit-mesra.firebaseapp.com",
    databaseURL: "https://stem-quiz-bit-mesra-default-rtdb.firebaseio.com",
    projectId: "stem-quiz-bit-mesra",
    storageBucket: "stem-quiz-bit-mesra.appspot.com",
    messagingSenderId: "569996961213",
    appId: "1:569996961213:web:8d5de38ab20bef5a855ed4",
    measurementId: "G-NRRC4LFB5F"
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
        score: parseInt(score)
       }
   );
}

function gotohome(){
    window.location = "./index.html"
}