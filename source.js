const form = document.querySelector('form'); 
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if(height > 0 && weight > 0){
    const bmi = (weight)/((height*height)/10000);
    result.appendChild(document.createTextNode(`${bmi}`));
  }else{
    result.appendChild(document.createTextNode("Please give valid details"));
  }
});


