//DOMS
let objs = document.getElementsByTagName("img");

//Functions
function movingObject(e){
    let mouseX = (window.innerWidth - e.clientX) / 100;
    let mouseY = (window.innerHeight - e.clientY) / 100;
    objs[1].style.transform = `translate(${mouseX}px,${-mouseY}px)`
    objs[2].style.transform = `translate(${-mouseX}px,${mouseY}px)`
    objs[3].style.transform = `translate(${-mouseX}px,${-mouseY}px)`
    objs[4].style.transform = `translate(${mouseX}px,${-mouseY}px)`
    objs[5].style.transform = `translate(${mouseX}px,${mouseY}px)`
}

window.addEventListener("mousemove",movingObject);