function pushNumber() {
    const number =    document.getElementById("number").value;
    var theNumber = [];
    for (let i = 0; i < number; i++) {
        theNumber.push(i + 1);    
    }
    
    document.getElementById("output").innerHTML = alert("your input : " + number + " and the output "+ theNumber);
    
}

function reverseNumber() {
    const number =    document.getElementById("number").value;
    var theNumber = [];
    for (let i = 0; i < number; i++) {
        theNumber.push(i + 1);    
    }
    
    document.getElementById("output").innerHTML = alert("your input : " + number + " and the output "+ theNumber.reverse() );
    
}



