let el=document.querySelector('.header');

   let button=document.querySelector('button');
   button.addEventListener('click', change);

   function change(event) {
       el.classList.add('change')
   }