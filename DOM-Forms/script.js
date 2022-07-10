function submit(){

    // Catching all the values
    let fname = document.querySelector(".fname").value;
    let lname = document.querySelector(".lname").value;
    let addd = document.querySelector(".addd").value;
    let num = document.querySelector(".num").value;

    let radio = document.querySelectorAll(".gender");
    let x = ""
    radio.forEach((ele) => {
        if(ele.checked){
            x+=ele.value
        }
    })
    console.log(x);

    let checkbox = document.querySelectorAll(".cbx");
    let y = [];
    checkbox.forEach((ele) => {
        if(ele.checked){
            y.push(ele.value)
        }
    })
    console.log(y);

    let state = document.querySelector("#state").value;
    let country = document.querySelector("#country").value;


    // Appending to the table

    let tr = document.createElement("tr");
    tr.innerHTML= `
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${addd}</td>
        <td>${num}</td>
        <td>${x}</td>
        <td>${y}</td>
        <td>${state}</td>
        <td>${country}</td>
    `
    document.querySelector("tbody").append(tr)


    // Resetting the form
    document.querySelector(".fname").value= "";
    document.querySelector(".lname").value= "";
    document.querySelector(".addd").value= "";
    document.querySelector(".num").value= "";
    document.querySelector("#state").value = "";
    document.querySelector("#country").value = "";
    let temp1 = document.querySelectorAll(".cbx");
    temp1.forEach((ele)=>ele.checked=false)
    let temp2 = document.querySelectorAll(".gender");
    temp2.forEach((ele)=>ele.checked=false)
}