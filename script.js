let btns = document.getElementsByClassName('btn');
let result = document.getElementById('result')

for (let btn of btns) {
    btn.addEventListener('click',function (){
        result.innerHTML += this.value;
    })
}
    function equal() {
    let res = result.innerHTML;
        let operator =['+','-','*', '/'];
        let check = false;
        for (let i =0; i < operator.length; i++ ) {
            if (res.indexOf(operator[i]) !== -1){

                check = true
                break;
            } else {
                check = false
            }
        }
        if(check) {
            result.innerHTML = eval(res);
        }
        else {
            result.innerHTML = eval('Math.' + res);
        }
}
function clean() {
    result.innerHTML = " ";
}

