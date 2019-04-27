document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });


  function submit() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Element 4"));
  }