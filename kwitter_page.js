var firebaseConfig = {
      apiKey: "AIzaSyAaTszhzf7Rnn1mdTBpxAtB0-CfdM2xPNg",
      authDomain: "letschat-f314f.firebaseapp.com",
      databaseURL: "https://letschat-f314f-default-rtdb.firebaseio.com",
      projectId: "letschat-f314f",
      storageBucket: "letschat-f314f.appspot.com",
      messagingSenderId: "397705041181",
      appId: "1:397705041181:web:bfd1f22ab3099b22693df4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      var User_name=localStorage.getItem("Username")
      var room_name=localStorage.getItem("roomname")

      function send(){
            msg=document.getElementById("sendmsg").value
            firebase.database().ref(room_name).push({
                  Name:User_name,
                  message:msg,
                  like:0
            })
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)

Name=message_data["Name"]
message=message_data["message"]
like=message_data["like"]

NameTag="<h4>"+Name+"<img class='user_tick' src='tick.png' width='40px'></h4>"
messageTag="<h4 class='message_h4'>"+message+"</h4>"
likebutton="<button id='"+firebase_message_id+"' value='"+like+"'class='btn btn-danger' onclick='updatelike(this.id)'>"
spantag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button>"

row=NameTag+messageTag+likebutton+spantag;

document.getElementById("output").innerHTML+= row;

//End code
      } });  }); }
getData();
 
function logout(){
localStorage.removeItem("Username")
localStorage.removeItem("roomname")
window.location="index.html"
}

function updatelike(message_id)
{
      console.log("clicked on like button -"+ message_id);
   button_id=message_id;
   likes=document.getElementById(button_id).value;
   updated_likes=Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
   });
   
}