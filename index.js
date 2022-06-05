const calculatetemp = () => {
    const beforetemperature = document.getElementById('temp').value;
    const temptype = document.getElementById('tempdiff');
    const valuetemp = tempdiff.options[temptype.selectedIndex].value;
    
    const celtofaren = (cel) => {
        let finalfaren = Math.round(cel*1.8 + 32);
        return finalfaren;
    }
    const farentocel = (fars) => {
        let finalcel = Math.round((fars - 32) / 1.8);
        return finalcel;
    }
    let result1;
    let result2;
    if(valuetemp == 'cel')
    {
        result1 = celtofaren(beforetemperature);
        document.getElementById('resultcontainer').innerHTML = `= ${result1} °Fahrenheit`;
    }else{
        result2 = farentocel(beforetemperature);
        document.getElementById('resultcontainer').innerHTML = `${result2} °Celsius`;
    }

}