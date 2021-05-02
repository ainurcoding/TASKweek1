/**
 * | Nama        | Umur / Tahun |
|-------------|--------------|
|     Bayi    |      0-1     |
|  Anak-anak  |     2-10     |
|    Remaja   |     11-19    |
|    Dewasa   |     20-60    |
| Lanjut Usia |       E      |
 */

cekStatusUsia = () => {
    let usia = document.getElementById("usiaI").value;
    let IUsia = []; //menerima informasi status usia

    if (usia >= 0 && usia <= 1) {
        statusUsia = "bayi";
        IUsia.push(statusUsia);
    } else if(usia >= 2 && usia <= 10){
        statusUsia = "Anak-anak";
        IUsia.push(statusUsia);
    }else if(usia >= 11 && usia <= 19){
        statusUsia = "Remaja";
        IUsia.push(statusUsia);
    }else if(usia >= 20 && usia <= 60){
        statusUsia = "Dewasa";
        IUsia.push(statusUsia);
    }else {
        statusUsia = "Lanjut Usia";
        IUsia.push(statusUsia);
    }

    document.getElementById("output1").innerHTML = "Umur "+ usia +" adalah "+ IUsia;

}