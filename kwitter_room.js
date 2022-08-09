
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyByN1Igb6-hQ3fJ_bxrHvPKuJjLvzK9hsQ",
      authDomain: "kwitter-d3964.firebaseapp.com",
      databaseURL: "https://kwitter-d3964-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3964",
      storageBucket: "kwitter-d3964.appspot.com",
      messagingSenderId: "637783477494",
      appId: "1:637783477494:web:2ca9bd4a0a45f3bba7b0d7"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addroom() {
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname "+ Room_names );

      row="<div class='room_name' id="+Room_names + " onclick='redirecttoRoomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      

      //End code
      });});}
getData();
function redirecttoRoomname(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}