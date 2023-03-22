var firebaseConfig = {
      apiKey: "AIzaSyB5u23uyeVMiqUc7C8EvE1hbxjxOGQZdGQ",
      authDomain: "lolipop-7c026.firebaseapp.com",
      databaseURL: "https://lolipop-7c026-default-rtdb.firebaseio.com",
      projectId: "lolipop-7c026",
      storageBucket: "lolipop-7c026.appspot.com",
      messagingSenderId: "740311928060",
      appId: "1:740311928060:web:69dbdb60d854ebe1f79b79"
};
    
 
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome "+user_name+" ! ! !";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name....."
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name- "+Room_names)
      row ="<div class ='room_name' id="+Room_names +"onclick ='redirectToRoomName()'>"
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location =  "index.html";
}