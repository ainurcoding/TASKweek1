/**
 * golongan  Gaji/jam
 * A        1000
 * B        2000
 * C        3000
 * D        4000
 * E        5000
 */

cekGaji = () => {
 let waktuKerja = document.getElementById("JumlahHariKerja").value;

cekGajidenganLembur = () => {
    // inisiasi variabel
    /**
     * golP = golongan pegawai
     * waktuKerja = total jam kerja pegawai dalam sebulan
     * gAll = mengambil semua nilai variabel 
     */
    // const nama      = document.getElementById("nama").value; 
    // let golP        = document.getElementById("golonganP").value;
    // let waktuKerja  = document.getElementById("JumlahHariKerja").value;
    let gAll        = [];

    let nama = document.getElementById("nama").value;
    let golP    = document.getElementById("golonganP").value;
    

    
    switch (golP) {
        case "A":
            let gPerhari = 1000 * 8;
            let gBulanan = waktuKerja * 1000;
            gAll.push(gPerhari,gBulanan);

                if (waktuKerja > 200) {
                    let gLembur = waktuKerja * 200;
                    gAll.push(gLembur);
                }else {
                    break;
                }
            break;

        case "B":
            let gPerhariB = 2000 * 8;
            let gBulananB = waktuKerja * 2000;
            
            gAll.push(gPerhariB,gBulananB);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
        case "C":
            let gPerhariC = 3000 * 8;
            let gBulananC = waktuKerja * 3000;
            
            gAll.push(gPerhariC,gBulananC);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
            case "D":
            let gPerhariD = 4000 * 8;
            let gBulananD = waktuKerja * 4000;
            
            gAll.push(gPerhariD,gBulananD);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
            case "E":
            let gPerhariE = 5000 * 8;
            let gBulananE = waktuKerja * 5000;
            
            gAll.push(gPerhariE,gBulananE);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
    
        default:
            console.log("nothing");
            break;
    }
    

    
    total = 0;
    for (let i = 0; i < gAll.length; i++) {
        total += gAll[i];
    }
    
    var bilangan    = gAll[0];
    var bilangan2   = gAll[1];
    var bilangan3   = gAll[2];

    var bilangan4   = total;
    
    var	number_string = bilangan.toString(),
        sisa 	= number_string.length % 3,
        rupiah 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    var	number_string = bilangan2.toString(),
        sisa 	= number_string.length % 3,
        rupiah2 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah2 += separator + ribuan.join('.');
    }

        var	number_string = bilangan3.toString(),
        sisa 	= number_string.length % 3,
        rupiah3 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
        if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah3 += separator + ribuan.join('.');
        }    
    

    var	number_string = bilangan4.toString(),
        sisa 	= number_string.length % 3,
        rupiah4 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah4 += separator + ribuan.join('.');
    }

    document.getElementById("output1").innerHTML = "nama : " +nama;
    document.getElementById("output2").innerHTML = "golongan : "+golP;
    document.getElementById("output3").innerHTML = "Gaji perhari Rp. "+ rupiah;
    document.getElementById("output4").innerHTML = "Gaji perbulan Rp. "+rupiah2;
    document.getElementById("output5").innerHTML = "Gaji lembur Rp. "+ rupiah3;
    document.getElementById("output6").innerHTML = "Total gaji Rp."+ rupiah4;
    // document.getElementById("output1").innerHTML = "nama : "+ nama;
    // document.getElementById("output2").innerHTML = "Golongan : "+ golP;
    // document.getElementById("output3").innerHTML = "Gaji perhari : Rp."+ gAll[0] +"<br><br>Gaji Bulanan : Rp."+ gAll[1];
    // if (!gAll[2]) {
    //     document.getElementById("output4").innerHTML = ("beliau tidak lembur");
    // } else {
    //     document.getElementById("output4").innerHTML = ("Gaji lembur : Rp."+gAll[2]);
    // }
    // document.getElementById("output5").innerHTML = ("total keseluruhan : Rp."+total);
}

cekGajiTanpaLembur = () => {
    let gAll        = [];

    let nama = document.getElementById("nama").value;
    let golP    = document.getElementById("golonganP").value;
    

    
    switch (golP) {
        case "A":
            let gPerhari = 1000 * 8;
            let gBulanan = waktuKerja * 1000;
            gAll.push(gPerhari,gBulanan);

                if (waktuKerja > 200) {
                    let gLembur = waktuKerja * 200;
                    gAll.push(gLembur);
                }else {
                    break;
                }
            break;

        case "B":
            let gPerhariB = 2000 * 8;
            let gBulananB = waktuKerja * 2000;
            
            gAll.push(gPerhariB,gBulananB);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
        case "C":
            let gPerhariC = 3000 * 8;
            let gBulananC = waktuKerja * 3000;
            
            gAll.push(gPerhariC,gBulananC);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
            case "D":
            let gPerhariD = 4000 * 8;
            let gBulananD = waktuKerja * 4000;
            
            gAll.push(gPerhariD,gBulananD);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
            case "E":
            let gPerhariE = 5000 * 8;
            let gBulananE = waktuKerja * 5000;
            
            gAll.push(gPerhariE,gBulananE);

            if (waktuKerja > 200) {
                let gLembur = waktuKerja * 200;
                gAll.push(gLembur);
            }else {
                break;
            }
            break;
    
        default:
            console.log("nothing");
            break;
    }
    

    
    total = 0;
    for (let i = 0; i < gAll.length; i++) {
        total += gAll[i];
    }
    
    var bilangan    = gAll[0];
    var bilangan2   = gAll[1];

    var bilangan4   = total;
    
    var	number_string = bilangan.toString(),
        sisa 	= number_string.length % 3,
        rupiah 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    var	number_string = bilangan2.toString(),
        sisa 	= number_string.length % 3,
        rupiah2 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah2 += separator + ribuan.join('.');
    }
  
    

    var	number_string = bilangan4.toString(),
        sisa 	= number_string.length % 3,
        rupiah4 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah4 += separator + ribuan.join('.');
    }

    document.getElementById("output1").innerHTML = "nama : "+ nama;
    document.getElementById("output2").innerHTML = "golongan : "+golP;
    document.getElementById("output3").innerHTML = "Gaji perhari Rp. "+ rupiah;
    document.getElementById("output4").innerHTML = "Gaji perbulan Rp. "+rupiah2;
    document.getElementById("output5").innerHTML = "beliau tidak lembur";
    document.getElementById("output6").innerHTML = "Total gaji Rp."+ rupiah4;
}

if (waktuKerja > 200) {
    cekGajidenganLembur();
}else {
    cekGajiTanpaLembur();
}

}