function addUser () {
    Username = document.getElementById("My_user").value
    localStorage.setItem("Username",Username);
    window.location="kwitter_room.html"

}