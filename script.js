let testimonial=document.querySelectorAll(".testimonial")
index=0;

testimonial[index].classList.add("active");

document.getElementById("nextBtn").onclick=function(){
    testimonial[index].classList.remove("active");
    index=(index+1)%testimonial.length;
    testimonial[index].classList.add("active");
}

document.getElementById("prevBtn").onclick=function(){
    testimonial[index].classList.remove("active");
    index=(index-1+testimonial.length)%testimonial.length;
    testimonial[index].classList.add("active");
}
