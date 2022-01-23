window.onload = function(){
  createReadMore();
  
  
  }
function createReadMore(){
  let morBtn = document.createElement("button");
  morBtn.innerHTML="Read more"
  morBtn.className="text-center"
  document.querySelector("#id_parent").appendChild(morBtn);

  let box_2 = document.querySelector("#box_2");
   
    morBtn.addEventListener("click", function(){
        // box_2.style.display = (box_2.style.display != "block") ? "block" : "none";
        if(box_2.style.display != "block"){
            box_2.style.display = "block";
            document.querySelector("#id_parent").removeChild(morBtn)
            createReadLess();
          }
          else{
            box_2.style.display = "none";
 
          }
         
    });
  }
function createReadLess(){
  let lessBtn = document.createElement("button");
  lessBtn.innerHTML="Read less"
  lessBtn.className="text-center"
  document.querySelector("#id_parent2").appendChild(lessBtn);

  let box_2 = document.querySelector("#box_2");
   
    lessBtn.addEventListener("click", function(){
        box_2.style.display = (box_2.style.display != "block") ? "block" : "none";
        if(box_2.style.display = "block"){
            box_2.style.display = "none";
            document.querySelector("#id_parent2").removeChild(lessBtn)
            createReadMore()
          }
          // else{
          //   box_2.style.display = "none";
 
          // }
         
    });
  }

  

