window.addEventListener('load', function(){
    const hide = document.getElementsByClassName("hide_me");
    const hideb = document.getElementById("button");

    hideButton.addEventListener('click', function(){
        Array.from(hide).forEach((e) => {
            e.style.display = "none";
        })
    });
});