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

// form validation
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    // console.log(evt)
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    // alert(evt.which + " key code - " + evt.keyCode);
    if (charCode > 31 && (charCode < 42 || charCode > 57)) {
        return false;
    }
    return true;
}