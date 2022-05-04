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
/*
function getData() {
  var score_ref = firebase.database().ref("users").orderByChild("score").limitTo(5);
  score_ref.on('value', function (snapshot) {
    //document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function (childSnapshot) {
      userid = childSnapshot.key;
      console.log("user id: " + userid);
      console.log("User name: " + childSnapshot.val().name + " Score: " +childSnapshot.val().score);
      
      //row = "<div class='user_id' id="+userid+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //document.getElementById("output").innerHTML += row;
    });
  });
}
*/

function getData(){
  var userRef = firebase.database().ref('users');
  userRef.orderByChild('score').limitToLast(3).once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //console.log(childSnapshot.val());
      //console.log(childSnapshot.val().name + " " + childSnapshot.val().score);
      console.log("Name: " + childSnapshot.val().name + "/" + childSnapshot.val().score);
      //console.log("Name: " + childSnapshot.val().name, + " Object:" + childSnapshot.val());
    }); 
  });
}

//load_leaderboard();
getData();