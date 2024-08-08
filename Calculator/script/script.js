let input = document.getElementById("input");


function Enter(a){
  input.value += a;
  console.log((input.value).slice(0,-1));
}

function Result(){
  input.value = eval(input.value);
}

function BackSpace(){
  if(String(input.value).length === 0 || String(input.value).length === 1){
    input.value = '';
  }
  else{
    input.value = input.value
  }
}


function Clear(){
  input.value = '';
}


