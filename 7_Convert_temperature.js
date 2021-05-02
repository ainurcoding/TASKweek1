convertTemperature = () => {
    let suhuAwal = document.getElementById("suhuAwal").value;

    let nilaiA  = document.getElementById("nilaiAwal").value;

    let suhuConvert = document.getElementById("suhuAkhir").value;

    let resultConvert = [];

    switch (true) {

        //celcius

        case suhuAwal === "Celcius" && suhuConvert === "Celcius":
                celciusConvert = nilaiA;
                resultConvert.push(celciusConvert);
            break;

        case suhuAwal === "Celcius" && suhuConvert === "Reamur":
                reamurConvert = (4/5) * nilaiA;
                resultConvert.push(reamurConvert);
            break;

        case suhuAwal === "Celcius" && suhuConvert === "Kelvin":
                kelvinConvert = nilaiA + 273;
                resultConvert.push(kelvinConvert);
            break;
        
        case suhuAwal === "Celcius" && suhuConvert === "Fahrenheit":
                fahrenheitConvert = (9/5) * nilaiA + 32;
                resultConvert.push(fahrenheitConvert);
            break;

        //reamur
        case suhuAwal === "Reamur" && suhuConvert === "Reamur":
                ReamurConvert = nilaiA;
                resultConvert.push(ReamurConvert);
            break;

        case suhuAwal === "Reamur" && suhuConvert === "Celcius":
                celciusConvert = (5/4) * nilaiA;
                resultConvert.push(celciusConvert);
            break;
        
        case suhuAwal === "Reamur" && suhuConvert === "Kelvin":
                kelvinConvert = (5/4) * nilaiA + 273;
                resultConvert.push(kelvinConvert);
            break;
        
        case suhuAwal === "Reamur" && suhuConvert === "Fahrenheit":
                fahrenheitConvert = (9/4) * nilaiA + 32;
                resultConvert.push(fahrenheitConvert);
            break;

        //Fahrenheit
        case suhuAwal === "Fahrenheit" && suhuConvert === "Fahrenheit":
                fahrenheitConvert = nilaiA;
                resultConvert.push(fahrenheitConvert);
            break;

        case suhuAwal === "Fahrenheit" && suhuConvert === "Celcius":
                celciusConvert = 5/9 * (nilaiA - 32);
                resultConvert.push(celciusConvert);
            break;
        
        case suhuAwal === "Fahrenheit" && suhuConvert === "Reamur":
                reamurConvert = 4/9 * (nilaiA - 32);
                resultConvert.push(reamurConvert);
            break;

        case suhuAwal === "Fahrenheit" && suhuConvert === "Kelvin":
                kelvinConvert = 5/9 * (nilaiA-32) + 273;
                resultConvert.push(kelvinConvert);
            break;

        // kelvin
        case suhuAwal === "Kelvin" && suhuConvert === "Kelvin":
                kelvinConvert = nilaiA;
                resultConvert.push(kelvinConvert);
            break;

        case suhuAwal === "Kelvin" && suhuConvert === "Celcius":
                celciusConvert = nilaiA - 273;
                resultConvert.push(celciusConvert);
            break;
        
        case suhuAwal === "Kelvin" && suhuConvert === "Reamur":
                reamurConvert = 4/5 * (nilaiA-273);
                resultConvert.push(reamurConvert);
            break;

        case suhuAwal === "Kelvin" && suhuConvert === "Fahrenheit":
                fahrenheitConvert = 9/5 * (nilaiA - 273) + 32;
                resultConvert.push(fahrenheitConvert);
            break;

        
            
        default:
            break;
    }

    document.getElementById("output").innerHTML = nilaiA +" "+ suhuAwal+" = "+ Math.round(resultConvert[0]) +" "+suhuConvert;
}


