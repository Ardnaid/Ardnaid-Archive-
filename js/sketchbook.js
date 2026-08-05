const pages = [

{
    leftTitle:"Ardnaid's<br>Sketchbook",
    rightTitle:"My random artwork and sketches. It's not that good but at least I tried, LOL.<br><br>FYI I'm a fan of horror soo... yeah, I like to draw horror stuff (Don't freak out! I swear there's nothing wrong with me!♡). And also I like to draw other stuff too.<br><br>Some artwork and sketches were made when I was in junior high or high school (I think, idk I forgot...), but there are some that I made recently.<br><br>Anywayy,<br>Enjoy my sketchbook!<br>(୨ˊ ³ `)ᐣ✎ᝰ.˚⭒",
},

{
    leftImage:"stuff/img20260729_12553575.png",
    rightImage:"stuff/img20260729_12492053.png"
},

{
    leftImage:"stuff/img20260729_13043953.png",
    rightImage:"stuff/img20260729_13063619.png"
},

{
    leftImage:"stuff/.png",
    rightImage:"stuff/.png"
},

{
    leftImage:"stuff/img20260729_13123150.png",
    rightImage:"stuff/img20260729_13022624.png"
},

{
    leftImage:"stuff/img20260729_13181741.png",
    rightImage:"stuff/img20260729_13250521.png"
},

{
    leftImage:"stuff/img20260729_13265753.png",
    rightImage:"stuff/img20260729_13285301.png"
},

{
    leftImage:"stuff/.png",
    rightImage:"stuff/img20260729_13153263.png"
},

];

let currentPage = 0;

const left = document.getElementById("leftContent");
const right = document.getElementById("rightContent");

function renderPage(){

    left.innerHTML="";
    right.innerHTML="";

    const page = pages[currentPage];

    if(page.leftTitle){

        left.innerHTML=
        `<h1 class="cover-title">${page.leftTitle}</h1>`;

    }

    if(page.rightTitle){

        right.innerHTML=
        `<h1 class="cover-text">${page.rightTitle}</h1>`;

    }

    if(page.leftImage){

        left.innerHTML=
        `<img src="${page.leftImage}">`;

    }

    if(page.rightImage){

        right.innerHTML=
        `<img src="${page.rightImage}">`;

    }

}

renderPage();

document.getElementById("nextBtn").onclick=function(){

    if(currentPage<pages.length-1){

        currentPage++;

        renderPage();

    }

}

document.getElementById("prevBtn").onclick=function(){

    if(currentPage>0){

        currentPage--;

        renderPage();

    }

}