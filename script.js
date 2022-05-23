// display value 
function display(value){
    document.getElementById("result").value +=value;
}



// clear all
function clearAll(){
    document.getElementById("result").value = " ";
}


// calculate result

function calculate(){
    var x = document.getElementById("result").value;
    var y = eval(x);

    document.getElementById("result").value= y;
}