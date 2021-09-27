
const firebaseConfig = {
      apiKey: "AIzaSyCQFQceffrihnqccpvsonHwbQEZT5-jvyc",
      authDomain: "js-database-6ff0b.firebaseapp.com",
      databaseURL: "https://js-database-6ff0b-default-rtdb.firebaseio.com",
      projectId: "js-database-6ff0b",
      storageBucket: "js-database-6ff0b.appspot.com",
      messagingSenderId: "62410483054",
      appId: "1:62410483054:web:fd1b491a4e47b07a9ccd7f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username= localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome"+ username  +"!"

function addroom(){

      room_name = document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
      purpose:"setting room name"
})
      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html"

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname -"+Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redircttoroomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row
      });});}
getData();

function redircttoroomname(name){
console.log(name)
localStorage.setItem("room_name", name)
window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}