const folders = document.querySelectorAll(".folder");

folders.forEach(folder=>{

    folder.addEventListener("click",function(e){

        e.preventDefault();

        this.style.transform="translateX(calc(-50% + 120px)) scale(1.03)";

        this.style.transition=".3s";

        setTimeout(()=>{

            window.location=this.href;

        },300);

    });

});