

const submit = document.getElementById('submit');
submit.addEventListener('submit',
    function(event){
        event.preventDefault();
        const select = document.getElementById('select').value;

        if(select == 'hard'){
            console.log('selected 10')
            for(let i=1; i<=100; i++){

                const box = document.createElement('div')
                box.classList.add('box','box-100')  
                box.innerHTML = i  
                document.querySelector(' main > .my-container .row').append(box);
                box.addEventListener('click',
                    function(){
                        box.classList.toggle('bkg-color')
                        // console.log(i)
                    }
                );
               
            };
    
        };

        if(select == 'medium'){
            console.log('selected 9')
            for(let i=1; i<=81; i++){

                const box = document.createElement('div')
                box.classList.add('box','box-81')  
                box.innerHTML = i  
                document.querySelector(' main > .my-container .row').append(box);
                box.addEventListener('click',
                    function(){
                        box.classList.toggle('bkg-color')
                        // console.log(i)
                    }
                );
               
            }
        };

        if(select == 'easy'){
            console.log('selected 7')
            for(let i=1; i<=49; i++){

                const box = document.createElement('div')
                box.classList.add('box','box-49')  
                box.innerHTML = i  
                document.querySelector(' main > .my-container .row').append(box);
                box.addEventListener('click',
                    function(){
                        box.classList.toggle('bkg-color')
                        // console.log(i)
                    }
                );
               
            }
        };

        // for(let i=1; i<=100; i++){
            
        //     // document.querySelector(`main > .my-container`).innerHTML+=`<div class="box">
        //     // ${i}
        //     // </div>`
        //     const box = document.createElement('div')
        //     box.classList.add('box')  
        //     box.innerHTML = i  
        //     document.querySelector(' main > .my-container').append(box);
        //     box.addEventListener('click',
        //         function(){
        //             box.classList.toggle('bkg-color')
        //             // console.log(i)
        //         }
        //     );
           
        // }

    }
);