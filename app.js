
function toDisplay(value){
document.getElementById('display').value += value
}

function clearDisplay(){
    document.getElementById('display').value = ""
}

function deleteLast(){
    var del = document.getElementById("display").value

    document.getElementById("display").value = del.slice(0,-1)
}
function calculateResult(){
    var del = document.getElementById("display").value
    try {
        document.getElementById("display").value = eval(del)
    } catch (error) {
        document.getElementById("display").value = "Error"
    }
}