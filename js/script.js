

const submit = document.getElementById('submit');
submit.addEventListener('submit',
    function(event){
        event.preventDefault();
        
        for(let i=1; i<=100; i++){
            
            document.querySelector(`main > .my-container`).innerHTML+=`<div class="box">
            ${i}
            </div>`
        }

    }
)