

const submit = document.getElementById('submit');
submit.addEventListener('submit',
    function(event){
        event.preventDefault();
        
        for(let i=1; i<=100; i++){
            
            // document.querySelector(`main > .my-container`).innerHTML+=`<div class="box">
            // ${i}
            // </div>`
            const box = document.createElement('div')
            box.classList.add('box')  
            box.innerHTML = i  
            document.querySelector(' main > .my-container').append(box);
            box.addEventListener('click',
                function(){
                    box.classList.toggle('bkg-color')
                    console.log(i)
                }
            );
           
        }

    }
)