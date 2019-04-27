// Initialize Firebase
var config = {
  apiKey: "AIzaSyCjI3HoQTHMk_t2atkRFc6iWJBaP5JBCbY",
  authDomain: "turlockpotholes.firebaseapp.com",
  databaseURL: "https://turlockpotholes.firebaseio.com",
  projectId: "turlockpotholes",
  storageBucket: "turlockpotholes.appspot.com",
  messagingSenderId: "921373741535"
};
firebase.initializeApp(config);


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Reference Message Collection
var messageRef = firebase.database().ref('Pothole Submissions');


document.getElementById('potholeForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var picPath = getInputVal('picPath');
  var description = getInputVal('description');

  saveMessage(picPath, description, tempLat, tempLng);
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(picPath, description, tempLat, tempLng){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    picPath: picPath,
    description: description,
    tempLat: tempLat,
    tempLng: tempLng
  });
}


var geoData = {
  lat: 10,
  lng: 10
}

var tempLat;
var tempLng;



  // // New map
  // var map = new google.maps.Map(document.getElementById('homemap'), {
  //   zoom: 15,
  //   center: location
  // });

  // // Listen for click on map
  // google.maps.event.addListener(map, 'click', function(e) {

  //   //Passes a hidden coordinate to the form
  //   tempLat = e.latLng.lat();
  //   tempLng = e.latLng.lng();
  //   console.log(tempLat, tempLng);
  // });

  // //Listens for the save button to be clicked
  // document.getElementById("save").addEventListener("click", function() {
  //   //Initialize variables and retrieve values
  //   var title = document.getElementById('title').value;
  //   var description = document.getElementById('description').value;
  //   var userCoordinates = document.getElementById("latLng").innerText;
  //   var mapCoord = userCoordinates.split(",", 2);

  //   //Parses the coordinate strings
  //   var userLat = parseFloat(mapCoord[0]);
  //   var userLng = parseFloat(mapCoord[1]);}