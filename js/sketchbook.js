const pages = [

{
    leftTitle:"Ardnaid's<br>Sketchbook",
    rightImage:"stuff/cover.png"
},

{
    leftImage:"stuff/sketch1.png",
    rightImage:"stuff/sketch2.png"
},

{
    leftImage:"stuff/sketch3.png",
    rightImage:"stuff/sketch4.png"
},

{
    leftImage:"stuff/sketch5.png",
    rightImage:"stuff/sketch6.png"
},

{
    leftImage:"stuff/sketch7.png",
    rightImage:"stuff/sketch8.png"
}

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