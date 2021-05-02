

hitungKarakter = () => {
    let str = document.getElementById("str").value;
    cariHuruf = document.getElementById("cariHuruf").value;
    hasilHitung = [];

    let hitung_kalimat = 0;
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) == cariHuruf){
            hitung_kalimat += 1;
            hasilHitung.push(hitung_kalimat);
        }
        
    }
    

    document.getElementById("output1").innerHTML = "total huruf " +cariHuruf+" adalah seanyak "+hasilHitung.length;
 
}

