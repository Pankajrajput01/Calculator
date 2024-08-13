let a = document.querySelectorAll(".button");
let b = document.querySelector('.input');
let string = "";


a.forEach((val) => {
    val.addEventListener("click", () => {
        if(val.innerHTML == '='){
            string = eval(string);
            b.innerHTML =string;
        }
        else if(val.innerHTML== 'AC'){
            string =''
            b.innerHTML = string;
        }
        else if(val.innerHTML== 'BCK'){
            string = string.slice(0,-1);
            b.innerHTML=string;
        }
        else{
        string = string + val.innerHTML;
        b.innerHTML = string;
        }
    });
});

