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

user_name= localStorage.getItem("user_name")
room_name= localStorage.getItem("room_name")

function send(){
msg=document.getElementById("msg").value 
firebase.database().ref(room_name).push({
    name:user_name ,
    like:0,
    msg:msg 
})

document.getElementById("msg").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
console.log("-------")

like=message_data['like'];
message=message_data['msg'];
name=message_data['name'];

part1="<h4 >"+name+" <img class='user_tick' src='tick.png'></h4>"
part2="<h4 class='message_h4'>"+ message+"</h4>"

part3="<button class='btn btn-warning' id="+firebase_message_id+"  value="+like+" onclick='updatelike(this.id)'>"
part4="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"

row= part1+part2+part3+part4
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();

function updatelike(message_id){
button_id= message_id
likes= document.getElementById(button_id).value
updatedlikes=Number(likes)+1
console.log(updatedlikes)

firebase.database().ref(room_name).child(message_id).update({
   like: updatedlikes   
})
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}