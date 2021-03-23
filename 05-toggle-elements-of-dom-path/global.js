window.addEventListener('load', function(){
    const toggc = document.querySelectorAll('.second_five li');
    const toggb = document.getElementById("toggle_button");

    toggb.addEventListener('click', function(){
        toggc.forEach((elements) => {
            if(elements.style.display == 'list-item') {
                elements.style.display = 'none'
            } else {
                elements.style.display = 'list-item'
            }
        });
    });
});