const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click',(e) => {
       console.log(e);
       console.log(e.target);

        if(e.target.id==='grey'){
          body.style.backgroundColor = e.target.id; // Change the background color of the body
        }
        if(e.target.id==='white'){
            body.style.backgroundColor = e.target.id; // Change the background color of the body
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id; // Change the background color of the body
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id; // Change the background color of the body
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor = e.target.id; // Change the background color of the body
          }
        if(e.target.id==='red'){
            body.style.backgroundColor = e.target.id; // Change the background color of the body
        }
        });
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)'; // Scale up the button on hover  
    });
});