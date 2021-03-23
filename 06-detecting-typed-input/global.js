window.addEventListener('load', function(){
    const name = document.getElementById("full_name");

  name.addEventListener("keyup", function() {

    const greet = document.getElementById("greeting");

    greet.innerHTML = ("Hello there, " + name.value + "!");

  });

});