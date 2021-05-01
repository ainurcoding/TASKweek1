checkPrimaryNumber = () => {
    nilai = document.getElementById("input").value;

    if (nilai  % 2 === 0) {
        document.getElementById("output").innerHTML = nilai +" bukan merupakan bilangan prima";
    }else if(nilai % 2 === 1){
        document.getElementById("output").innerHTML = nilai +" merupakan bilangan prima";
    }else {
        document.getElementById("output").innerHTML = `nilai yang anda masukkan bukan angka / tidak valid, <b>contoh<i style="color: green;"> benar</i> : 12, <i style="color: red;"> salah</i> : a12</b>`;
    }
}



nilaiI = 1443 % 2;
console.log(
    nilaiI
);
