const btn=document.querySelectorAll(".b");
btn.forEach(b =>{
    b.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active");
     
      b.classList.add("active");
    })
})