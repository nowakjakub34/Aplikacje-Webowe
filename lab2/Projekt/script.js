document.querySelectorAll('.box-home').forEach(box => {
  const btn = box.querySelector('.toggle');
  
  const toggleBox = () => {
    box.classList.toggle('open');
    btn.textContent = box.classList.contains('open') ? 'collapse' : 'expand';
  };

  btn.addEventListener('click', toggleBox);
});


const buttons = document.querySelectorAll(".toggleButton");
const boxes = document.querySelectorAll(".toggleBox");
buttons.forEach((button,index)=>{
  button.addEventListener("click",()=> {
  boxes[index].classList.toggle("open");
  });
});