function validateForm(){
    var number = document.getElementById("mobn").value;

    if (number.length != 10){
        document.getElementById("error").innerHTML = "*Mobile no must be 10 digits long"
        return false;
    }
}