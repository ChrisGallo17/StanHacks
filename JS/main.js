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

  saveMessage(picPath, description);
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(picPath, description){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    picPath: picPath,
    description: description
  });
}

  