// (function(){
//     const screen =document.querySelector('.screen')
//     const btn =document.querySelectorAll('.btn')
//     const Clear =document.querySelector(' .btn-clear')
//     const equal =document.querySelector('.btn-equal')
    

//     btn.forEach(function(button){
//         button.addEventListener('click',function(e){
//          let value = e.target.dataset.num
//         //  push the value into screen
//          screen.value += value
//         })
//     })
//     // = button working 
//     equal.addEventListener('click',function(e){
//         if(screen.value ===''){
//             screen.value = "Please Enter"
//         }else{
//             try{
//                 let answer = eval(screen.value);
//                 screen.value = answer;
//             }catch(error){
//                 screen.value = "error"
//             }

//         }

//     })

//     // clear button 
//     Clear.addEventListener('click',function(e){
//         screen.value = '';
//     })

// })();


(function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            // Push the value into screen
            screen.value += value;
        });
    });

    // = button working
    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = '';
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    // Clear button
    clear.addEventListener('click', function(e) {
        screen.value = ''; // Clear the screen
    });
})();


