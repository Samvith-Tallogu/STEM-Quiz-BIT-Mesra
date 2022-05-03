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

function send_details() {
  //console.log("send details() invoked");
  c_name = document.getElementById("input_name").value;
  c_email = document.getElementById("input_mail").value;
  //console.log(c_name);
  //console.log(c_email);
  //console.log(c_age);
  var key;
  firebase.database().ref("users/").push({
    name: c_name,
    email: c_email,
    score: 0,
    question_number: 1
  }).then((snap) => {
    key = snap.key;
    localStorage.setItem("user_id", key);
    localStorage.setItem("question_number", 1);
    localStorage.setItem("score", 0);
    localStorage.setItem("user_name", c_name);
    localStorage.setItem("user_email", c_email);
    //console.log("user_id: " + localStorage.getItem("user_id"));
    //console.log("question_number: " + localStorage.getItem("question_number"));
    //console.log("score: " + localStorage.getItem("score"));
    //console.log("key: " + key);
    window.location = "./question.html";
  });

}