numberI = () => { 
    let numberX = document.getElementById("number1").value;
    let numberY = [];    
    for (let i = 0; i < numberX; i++) {
        numberY.push(i + 1);
    }

    document.getElementById("output1").innerHTML = numberY;
}


numberJ = () => {
    
    let j= document.getElementById("number2").value;
    let k="";
    let i = 1;
    let l = [];
    while (i <= j) {
        k = i * i;
        l.push(k);
        i++;
    }
    document.getElementById("output2").innerHTML = l;
}

numberK = () => {
    let i = document.getElementById("number3").value;
    let j = "";
    let k = 1;
    let l = [];
    let m = 3;
    while (k <= i) {
        j = k * m;
        l.push(j)
        k++;
    }
    document.getElementById("output3").innerHTML = l;
}

// function examFor(){
//     let i = 20;
//     let j = "";
//     let l = [];
//     let m = 3;
//     for (let k = 1 ; k <= i;){
//         j = k * m;
//         console.log(j);
//         k++;
//     }
// }

// examFor()




