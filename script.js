const multiply = function() {
    const num1 = document.getElementById("first_number").value;
    const num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = num1 * num2;
    
}

const divide = function() {
    const num1 = document.getElementById("first_number").value;
    const num2 = document.getElementById("second_number").value;

    document.getElementById("result").innerHTML = num1 / num2;
    
}