function adduser()
{
    user_name=document.getElementById("input1").value;
    localStorage.setItem("username", user_name);
    window.location = "kwitter_room.html";
}

