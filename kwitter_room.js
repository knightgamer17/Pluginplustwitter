var firebaseConfig = {
      apiKey: "AIzaSyD_FTU4S8o9Z-m29VaIkIGXnkNr3sj8c18",
      authDomain: "my-awesome-8008.firebaseapp.com",
      databaseURL: "https://my-awesome-8008-default-rtdb.firebaseio.com",
      projectId: "my-awesome-8008",
      storageBucket: "my-awesome-8008.appspot.com",
      messagingSenderId: "195870175506",
      appId: "1:195870175506:web:2d782d91f5a936c2f7c3cb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem.Room_names;
      window.location="index.html";
}

