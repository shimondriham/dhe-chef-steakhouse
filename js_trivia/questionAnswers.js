import {showNextQuestion} from "./app_trivia.js"
let q , a1, a2, a3, a4;
let correctAnswer
let counter=0;
let counterA=0;

export const declareTriviaElements = () => {
  q = document.querySelector("#id_q");
  a1 = document.querySelector("#id_a1");
  a2 = document.querySelector("#id_a2");
  a3 = document.querySelector("#id_a3");
  a4 = document.querySelector("#id_a4");
// דרך ישנה וארוכה צריך להעביר למערך קצר
  a1.addEventListener("click" , () => {
    if(a1.innerHTML == correctAnswer){
      counter++;
      counterA=counterA+25;
      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }

    }
    else{
      counter++;
      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }
    }
  })
  a2.addEventListener("click" , () => {
    if(a2.innerHTML == correctAnswer){
      counter++;
      counterA=counterA+25;

      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }

    }
    else{
      
      counter++;
      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }
   }
  })
  a3.addEventListener("click" , () => {
    if(a3.innerHTML == correctAnswer){
      counter++;
      counterA=counterA+25;

      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }

    }
    else{
      counter++;
      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }
   }
  })
  a4.addEventListener("click" , () => {
    if(a4.innerHTML == correctAnswer){
      counter++;
      counterA=counterA+25;

      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }
    }
    else{
      showNextQuestion() 
      counter++;
      counter++;
      if(counter==4){
        document.querySelector("#id_trivia").innerHTML =`
        <h2 style="font-family: 'Pattaya', sans-serif;">you got</h2>
        <h2 style="font-family: 'Roboto', sans-serif;">${counterA} / 100 points</h2>
        <h2 style="font-family: 'Roboto', sane-serif;">read a littie more about our islands and get btter next time</h2>
        `
      }else{
        showNextQuestion() 
      }
   }
  })
  
}



export const showQuestion = (_itemQ) => {
  let ar = [_itemQ.a1,_itemQ.a2,_itemQ.a3,_itemQ.a4]
  ar = _.shuffle(ar);
  correctAnswer = _itemQ.a1;
  q.innerHTML = _itemQ.q;
  a1.innerHTML = ar[0];
  a2.innerHTML = ar[1];
  a3.innerHTML = ar[2];
  a4.innerHTML = ar[3]; 
}
