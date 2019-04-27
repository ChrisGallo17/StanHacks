document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});


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


// Reference Message Collection
var messageRef = firebase.database().ref('messages');


document.getElementById('picture').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  console.log(123);
  var picture = getInputVal('picture');
  var desc = getInputVal('potholeDescription');

  saveMessage(picture, potholeDescription);
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(picture, potholeDescription){
  var newMessageRef = newMessageRef.push();
  newMessageRef.set({
    picture: picture,
    potholeDescription: potholeDescription
  });
}