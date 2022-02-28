
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAXm6-P320GabSfHWI3LM3Km5GXi7SY4N8",
      authDomain: "kwitter-113f9.firebaseapp.com",
      databaseURL: "https://kwitter-113f9-default-rtdb.firebaseio.com",
      projectId: "kwitter-113f9",
      storageBucket: "kwitter-113f9.appspot.com",
      messagingSenderId: "499268902786",
      appId: "1:499268902786:web:d4c41488338aceddcab99b"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

Username=localStorage.getItem("Username");
document.getElementById("user_name").innerHTML="Welcome " +Username+ " to kwitter"

function addroom() {
      roomname=document.getElementById("room_name").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"add-room"
      })
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();

function redirecttoroom(name){
console.log(name)
localStorage.setItem("roomname",name      )
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("Username")
      localStorage.removeItem("roomname")
      window.location="index.html"
}