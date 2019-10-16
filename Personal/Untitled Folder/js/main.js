let activity_field = document.querySelector("#activity_field")
let accidente_si = document.querySelector("#accidente_si")
let accidente_no = document.querySelector("#accidente_no")
let fecha = document.querySelector("#fecha")
let submit_btn = document.querySelector("#submit_btn")
let tbody = document.querySelector("#table_body")
let carnet_regex = new RegExp("^[0-9]{8}$")


let dateCheck = ()=>{
    var valueDate = document.getElementById('fecha').value;
    if ( valueDate== null || valueDate== '')
    {
        return false;
    }
    else{
        return true;
    }
}

let addtoJournal = (activity, date, accident)=>{
    let new_row = document.createElement("tr")

    new_row.classList.add("table-active")
    new_row.innerHTML = `<td>${date}</td>
        <td>${activity}</td>
        <td>${accident}</td>`
    tbody.appendChild(new_row)    
}




let accidenteValue = ()=>{
    var sipresionado = document.getElementById("accidente_si").checked;
    var nopresionado = document.getElementById("accidente_no").checked;

    if(sipresionado){
        return "Si"
    }
    else if(nopresionado){
        return "No"
    }
    else{
        return "No escogio si habia accidente"
    }
}

submit_btn.addEventListener("click", ()=>{
    let activity=activity_field.value
    let date = document.getElementById("fecha").value
    let accident = accidenteValue()

    if((accidente_si.checked||accidente_no.checked)&&dateCheck())

    addtoJournal(activity, date, accident)

    else{
        alert("Asegurese de haber ingresado fecha y accidente")
    }
})
