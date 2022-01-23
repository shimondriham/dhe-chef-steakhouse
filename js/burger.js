// ב HTML
// צריך לשים איי די גם לאייקון של הבורגר
// וגם לנאב עצמו


function declareBtns(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  burger_btn.addEventListener("click",function(){
    //
    // (nav_open.style.display != "block") ?  nav_open.style.display = "block"  :  nav_open.style.display = "none";
    if( nav_open.className == "p-0 col-9"){
      // nav_open.style.display = "block";
      nav_open.className = "p-0 col-9 nav_bar_inside"

    }
    else{
      // nav_open.style.display = "none";
      nav_open.className = "p-0 col-9";
    }
  })
}

declareBtns();