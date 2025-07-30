var element=document.querySelectorAll(".element");
element.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img=e.querySelector("img");
        img.style.opacity=1;
    });
    e.addEventListener("mouseleave",function(){
        var img=e.querySelector("img");
        img.style.opacity=0;
    });
    e.addEventListener("mousemove",function(dets){
        var img=e.querySelector("img");
        img.style.left=dets.clientX+"px";
        img.style.top=dets.clientY+"px";

    });
});
