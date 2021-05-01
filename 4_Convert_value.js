// const var_dump = require('@smartankur4u/vardump');


/**
 * keterangan
 * nilai A = 86 - 100
 * nilai B = 70 - 85
 * nilai C = 50 - 69
 * nilai D = 30 - 49
 * nilai E = 0 - 29
 * 
 * gunakan if elseif else / switch case
 */
konversiNilai = () => {
    let nilai = document.getElementById("input-nilai").value;

    switch (true) {
        case nilai >= 86 && nilai <= 100: 
        document.getElementById("output").innerHTML = "Nilai konversi adalah A";
            break;
        case nilai >= 70 && nilai <= 85 :
        document.getElementById("output").innerHTML = "Nilai konversi adalah B";
            break;
        case nilai >= 50 && nilai <= 69 :
        document.getElementById("output").innerHTML = "Nilai konversi adalah C";
            break;
        case nilai >= 30 && nilai <= 49 :
        document.getElementById("output").innerHTML = "Nilai konversi adalah D";
            break;
        case nilai >= 1 && nilai <= 29 :
        document.getElementById("output").innerHTML = "Nilai konversi adalah E";
            break;
        default:
        document.getElementById("output").innerHTML ="nilai tidak terdefinisi atau tidak valid";
            break;
    }
}


// var_dump(konversiNilai);

