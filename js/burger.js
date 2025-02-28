document.addEventListener("DOMContentLoaded", function(){
    
    let flag = 1;
    const nav = document.getElementById("nav");
    const ul = document.getElementById("ul");
    const li = document.getElementsByClassName("header-center");
    const href = document.getElementsByClassName("a");
    function check(){
        if( window.matchMedia("(max-width: 1024px)").matches ){
            nav.className = "nav_burger";
            flag = 1;
        } else {
            nav.className = "nav";
            ul.className = "ul";
            li.className = "header-center";
            for(let i=0; i< href.length;i++){
                href[i].style.fontSize = "16px";
            }
        }
      }
      
      check();
      
      window.addEventListener( 'resize', check );






    document.getElementById('elem').addEventListener('click', function() {
        if (flag == 1){
            flag = 2;
            nav.className = "nav_burger_delay";
            ul.className = "ul_burger";
            for(let i=0; i< li.length;i++){
                li[i].style.width = "100%";
                li[i].style.height = "max-content";
            }
            for(let i=0; i< href.length;i++){
                href[i].style.fontSize = "24px";
            }
            
                
        }
        else{
            flag = 1;
            nav.className = "nav_burger";
            ul.className = "ul";
            li.className = "header-center";
            for(let i=0; i< href.length;i++){
                href[i].style.fontSize = "16px";
            }
        }
    });
});
