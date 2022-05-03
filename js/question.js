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
// Start questions
get_questions(parseInt(localStorage.getItem("question_number")));

function get_questions(i) {
    var questionRef = firebase.database().ref("questions/Q"+i+"/" + "QuestionDetails");
    //var userRef = firebase.database().ref("users/");
    questionRef.on('value', (snapshot) => {
      const data = snapshot.val();
      //console.log(data);
      document.getElementById("question_number").innerHTML = "Question #" + i;
      document.getElementById("question").innerHTML = data.question;
      document.getElementById("c1").textContent = data.c1;
      document.getElementById("c2").textContent = data.c2;
      document.getElementById("c3").textContent = data.c3;
      document.getElementById("c4").textContent = data.c4;
      document.getElementById("l1").textContent = data.c1;
      document.getElementById("l2").textContent = data.c2;
      document.getElementById("l3").textContent = data.c3;
      document.getElementById("l4").textContent = data.c4;
      document.getElementById("score").innerHTML = "Score: " + localStorage.getItem("score");
  });
}

function previous_question(){
  update_score("prev");
  var i = parseInt(localStorage.getItem("question_number"));
  //console.log("previous_question: var i: "+i)
  if (i > 1) {
     i = i - 1;
  }
  localStorage.setItem("question_number", i);
  get_questions(i);

}

function next_question(){
  update_score("next");
  var qn = parseInt(localStorage.getItem("question_number"));

  //console.log("next_question: var i: "+qn)
  if (qn < 20) {
     qn = qn + 1;
  } else {
    final_screen();
  }
  localStorage.setItem("question_number", qn);
  get_questions(qn);
  document.getElementById("c1").checked = false;
  document.getElementById("c2").checked = false;
  document.getElementById("c3").checked = false;
  document.getElementById("c4").checked = false;
  document.getElementById("qprog").style.width = qn*5 + "%";
}

function final_screen(){
  window.location = "./final.html";
}

function get_answer(q){
  if (q == 1) return "c3"
  else if (q == 2) return "c3"
  else if (q == 3) return "c2"
  else if (q == 4) return "c4"
  else if (q == 5) return "c1"
  else if (q == 6) return "c3"
  else if (q == 7) return "c3"
  else if (q == 8) return "c1"
  else if (q == 9) return "c4"
  else if (q == 10) return "c2"
  else if (q == 11) return "c4"
  else if (q == 12) return "c1"
  else if (q == 13) return "c3"
  else if (q == 14) return "c3"
  else if (q == 15) return "c2"
  else if (q == 16) return "c2"
  else if (q == 17) return "c4"
  else if (q == 18) return "c2"
  else if (q == 19) return "c1"
  else if (q == 20) return "c1"
  else return false;
  
}

function update_score(seq){
  var ch = document.querySelector('input[name="choice"]:checked').value;
  //console.log("selected value: " + ch);
  var qn = parseInt(localStorage.getItem("question_number"));
  var prev_score = parseInt(localStorage.getItem("prev_score"));
  var score = parseInt(localStorage.getItem("score"));
  var answer_check = get_answer(qn);
  if (ch == null && seq == "prev") {
    score = prev_score;
  } else if (ch == null && seq == "prev" && answer_check == ch) {
    score = score + 5;
    if (score > 100){
      score = 100;
    }
  } else if (seq == "next" && answer_check == ch) {
    score = score + 5;
    if (score > 100) score = 100;
  } else if (seq == "next" && answer_check != ch) {
    score = score - 1;
  } else if (seq == "prev" && answer_check == ch) {
    score = score - 5;
  } else if (seq == "prev" && answer_check != ch) {
    score = score + 1;
  }
  localStorage.setItem("score", score);
  document.getElementById("score").innerHTML = "Score: " + localStorage.getItem("score");
  //console.log("new score: " + localStorage.getItem("score"));
}