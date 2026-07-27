const backButton = document.querySelector(".back");

if(backButton){

    backButton.addEventListener("click",function(e){

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(()=>{

            window.location.href="index.html";

        },300);

    });

}