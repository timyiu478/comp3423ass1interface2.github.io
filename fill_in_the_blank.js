let table = new multiplication_table(10,10,1);
let questions = table.getRandQuestions(10);
let btn = document.getElementsByClassName("user_input");
btn[0].focus();
function getTable_blank(){
    let url_string = window.location.href;
    let url = new URL(url_string);
    let number = url.searchParams.get("table");
    let table_number = document.getElementById("table_number");
    if(number=="random"){
        table_number.innerHTML = "隨機";
    }else{
        table_number.innerHTML = number;
    }

    console.log(number);
    let n1 = document.getElementsByClassName("n1");
    let n2 = document.getElementsByClassName("n2");
    let i;
    if(number!="random"){
        for(i=0;i<n1.length;i++){
            n1[i].innerHTML = number;
        }
    }
    else{
        for(i=0;i<n1.length;i++){
            n1[i].innerHTML = questions[i][0][0];
            n2[i].innerHTML = questions[i][0][1];
        }
    }
}

getTable_blank();


function submit_blank(){
    let n1 = document.getElementsByClassName("n1");
    let n2 = document.getElementsByClassName("n2");
    let input = document.getElementsByClassName("user_input");

    let i;

    for(i=0;i<n1.length;i++){
        if(input[i].value==null){
            input[i].value = "";
        }
        answer = table.getAnswer(n1[i].innerHTML,n2[i].innerHTML);
        if(table.isCorrect(input[i].value,answer)){
            input[i].classList.remove("btn-outline-danger");
            input[i].classList.add("btn-outline-success");
            input[i].style.border = "2px solid green";
        }else{
            input[i].classList.add("btn-outline-danger");
            input[i].classList.remove("btn-outline-success");
            input[i].style.border = "2px solid red";
        }
    }
}

function playAgain_blank(){
    let n1 = document.getElementsByClassName("n1");
    let input = document.getElementsByClassName("user_input");
    let i;
    for(i=0;i<n1.length;i++){
        input[i].value ="";
        input[i].classList.remove("btn-outline-danger");
        input[i].classList.remove("btn-outline-success");
        input[i].style.border = "";
    }
    table = new multiplication_table(10,10,1);
    questions = table.getRandQuestions(10);
    getTable_blank();
}

function keyevent_blank(){
    if(window.event.key == "Enter"){
        submit_blank();
    }
}