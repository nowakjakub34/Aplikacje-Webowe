document.querySelectorAll('.box-home').forEach(box => {
  const btn = box.querySelector('.toggle');
  
  const toggleBox = () => {
    box.classList.toggle('open');
    btn.textContent = box.classList.contains('open') ? 'collapse' : 'expand';
  };

  btn.addEventListener('click', toggleBox);
});
