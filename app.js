window.onload=()=>{

    

 let box= document.getElementById ("box");

 let container= document.getElementById("container")

 let up= document.getElementById("up");

 let down= document.getElementById("down");

 let left= document.getElementById("left");

 let right=document.getElementById("right");

 let pTag= document.getElementById("ptag");

 let man= document.getElementById("man");

 let sector =document.getElementById("sector");

 let shift=0;

 let shiftDown=0;

 

 

 

 right.addEventListener("click",()=>{

 

      if( shift < 150 ){

      shift+=4;

     box.style.left=shift+"px";

    };   

    pTag.innerHTML=` X Axis: ${shift}px<br>

                  Y Axis: ${shiftDown}px`;

 });//End of right button.

 

 

 left.addEventListener("click",()=>{

 

      if( shift > 0){

      shift-=4;

     box.style.left=shift+"px";

    };   

    pTag.innerHTML=` X Axis: ${shift}px<br>

                  Y Axis: ${shiftDown}px`;

 });//End of left button.

 

 

 down.addEventListener("click",()=>{

 

      if( shiftDown < 150){

      shiftDown+=4;

     box.style.top=shiftDown+"px";

     if(shiftDown >= 60 && shiftDown <=100){

         box.style.backgroundColor="blue"; 

         container.style.borderColor="blue";

      }else if(shiftDown === 152){

          box.style.borderRadius=50+"%";

          man.innerHTML ="🏃💨";

      }else if(shiftDown >=24 && shiftDown <=108){

          box.style.backgroundColor ="yellow";

          container.style.borderColor="yellow";

      }else{

         box.style.backgroundColor ="green"; 

         container.style.borderColor="green";

         box.style.borderRadius=0+"px";

         man.innerHTML ="🧑‍🦯";

      }

    };   

    pTag.innerHTML=` X Axis: ${shift}px<br>

                  Y Axis: ${shiftDown}px`;

 });//End of down button.

 

 

 up.addEventListener("click",()=>{

 

      if( shiftDown > 0){

      shiftDown-=4;

     box.style.top=shiftDown+"px";

     if(shiftDown >= 60 && shiftDown <=100){

         box.style.backgroundColor="blue"; 

         container.style.borderColor="blue";

      }else if(shiftDown === 0){

          box.style.borderRadius=50+"%";

          man.innerHTML ="🤸";

      }else if(shiftDown >=24 && shiftDown <=108){

          box.style.backgroundColor ="yellow";

          container.style.borderColor="yellow";

      }else{

         box.style.backgroundColor ="green"; 

         container.style.borderColor="green";

         box.style.borderRadius=0+"px";

         man.innerHTML ="🧎";

      }

      

    };   

    pTag.innerHTML=` X Axis: ${shift}px<br>

                  Y Axis: ${shiftDown}px`;

 

 });//End of up button.

 

 

 

 

 alert("Push me around 🏃🤸");

 

   //sector shake animation function

   let doFunc=()=>{

       if(shiftDown ===152){

    sector.style.animation="shake .2s infinite";

    navigator.vibrate(1000)

    sector.style.backgroundColor = "rgba(255, 144, 125,0.2)";

       }else{

           sector.style.animation="none";

           sector.style.backgroundColor="black";

       }

       

       

   }

 

 setInterval(doFunc,0);// end of animation function call

 

 

 

}