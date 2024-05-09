
//ADICIONE SEUS LINKS FIREBASE




function addRoom()
{
  
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;

      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
  // criar
}

function logout() {
//  criar
}
