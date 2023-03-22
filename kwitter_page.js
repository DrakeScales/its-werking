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
room_name=localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes: 0
      });
      document.getElementById("message").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "<h4>"
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
      span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
      row = name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id){
      console.log("cliced on like btn"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes) + 1;
      console.log("likes: "+updatedLikes)
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedLikes
      })
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location =  "index.html";
}
