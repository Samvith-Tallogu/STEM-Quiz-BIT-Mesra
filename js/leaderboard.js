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

function getData(){
  var userRef = firebase.database().ref('users');
  
  userRef.orderByChild('score').limitToLast(5).once('value', function(snapshot) {
    var index = 5;
    snapshot.forEach(function(childSnapshot) {
      console.log("Name: " + childSnapshot.val().name + "/" + childSnapshot.val().score);
      document.getElementById("u" + index).innerHTML = childSnapshot.val().name;
      document.getElementById("s" + index).innerHTML = childSnapshot.val().score;      
      index = index - 1;
    }); 
  });
}

getData();