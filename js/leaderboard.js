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

function load_leaderboard() {
  var user_ref = firebase.database().ref("users");
  user_ref.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);

  });
}

function getData() {
  var user_ref = firebase.database().ref("users").orderByChild('score');
  user_ref.on('value', function (snapshot) {
    //document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function (childSnapshot) {
      userid = childSnapshot.key;
      console.log("user id: " + userid);
      console.log("User name: " + childSnapshot.val().name 
        + " Score: " +childSnapshot.val().score);
      
      //row = "<div class='user_id' id="+userid+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //document.getElementById("output").innerHTML += row;
    });
  });
}
//load_leaderboard();
getData();