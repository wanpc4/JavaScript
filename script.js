//This is where calculation starts:

const input_box = document.getElementById("input_value");
//Numbers:
let count_0 = 0, count_1 = 1, count_2 = 2, count_3 = 3, count_4 = 4, count_5 = 5, count_6 = 6, count_7 = 7, count_8 = 8, count_9 = 9;

function number_1(){
    input_box.value += count_1;
    console.log(count_1);
}

function number_2(){
    input_box.value += count_2;
    console.log(count_2);
}

function number_3(){
    input_box.value += count_3;
    console.log(count_3);
}

function number_4(){
    input_box.value += count_4;
    console.log(count_5);
}

function number_5(){
    input_box.value += count_5;
    console.log(count_5);
}

function number_6(){
    input_box.value += count_6;
    console.log(count_6);
}

function number_7(){
    input_box.value += count_7;
    console.log(count_7);
}

function number_8(){
    input_box.value += count_8;
    console.log(count_8);
}

function number_9(){
    input_box.value += count_9;
    console.log(count_9);
}

function number_0(){
    input_box.value += count_0;
    console.log(count_0);
}

//Decimal point: 
function decimal(){
    input_box.value += ".";
    console.log("decimal .");
}

//Operators
function addNumber(){
    input_box.value += "+";
    console.log("add (+)");
}

function subtNumber(){
    input_box.value += "-";
    console.log("subtract (-)");
}

function multNumber(){
    input_box.value += "*";
    console.log("multiply (×)");
}

function divNumber(){
    input_box.value += "/";
    console.log("divide (÷)");
}

//Brackets:
function openBracket(){
    input_box.value += "(";
    console.log("open bracket (");
}

function closeBracket(){
    input_box.value += ")";
    console.log("close bracket )");
}

//Backspace and reset: 
function deleteOne(){
    var box_value = input_box.value;
    var del = box_value.substring(0, box_value.length - 1);

    input_box.value = del;
    console.log("backspace");
}

function resetAll(){
    input_box.value = "";
    console.log("Reset all");
}

//result: 
function equal_to(){
    var input_error = input_box.value;

    if(input_error == ""){
        input_box.placeholder = "You can't leave the box empty";
        input_box.classList.add("empty");
        console.log("empty box");
        return false;
    } else {
        input_box.classList.remove("empty");
    }

    var input_numbers = input_box.value;
    input_box.value = eval(input_numbers);
    console.log("result: " + input_box.value);

    return true;
}