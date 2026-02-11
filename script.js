function toggleMenu(){
  let menu = document.getElementById("menu");
  if(menu.style.display === "flex"){
    menu.style.display = "none";
  }else{
    menu.style.display = "flex";
  }
}

function checkAnswers(){
  let correct = document.querySelector('input[data-correct="true"]');
  let result = document.querySelector('.result');

  if(correct.checked){
    result.innerText = "✅ Richtig!";
    result.style.color = "green";
  }else{
    result.innerText = "❌ Falsch!";
    result.style.color = "red";
  }
}
