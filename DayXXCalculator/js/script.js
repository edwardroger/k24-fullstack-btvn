var x = 0;
var y = 0;
var M = 0;
var s = 0;

const turnOn = () => {
    document.getElementsByClassName("cal__dis")[0].value = 0;
    x = 0;
    y = 0;
    s = 0;
}

const shutOff = () => {
    document.getElementsByClassName("cal__dis")[0].value = "";
    let b = document.querySelectorAll('button').disabled = true;
    x = 0;
    y = 0;
    s = 0;
    M = 0;  
}

const cancel = () => {
    document.getElementsByClassName("cal__dis")[0].value = 0;
}

const del = () => {
    if (document.getElementsByClassName("cal__dis")[0].value.length > 1)
    document.getElementsByClassName("cal__dis")[0].value = 
    document.getElementsByClassName("cal__dis")[0].value.slice(0, -1);
    else document.getElementsByClassName("cal__dis")[0].value = "0";
}

const percent = () => {
    document.getElementsByClassName("cal__dis")[0].value /= 100;
}

const memory = () => {
    M += parseFloat(document.getElementsByClassName("cal__dis")[0].value);
    document.getElementsByClassName("cal__dis")[0].value = M;
}

const numb = (a) => {
    if (s == 0) {
        if (document.getElementsByClassName("cal__dis")[0].value == "0") {
            document.getElementsByClassName("cal__dis")[0].value = "" + a
        } else document.getElementsByClassName("cal__dis")[0].value += a;
    } else {
        if (y == 0) {
            document.getElementsByClassName("cal__dis")[0].value = "" + a
            y = document.getElementsByClassName("cal__dis")[0].value
        } else {
            document.getElementsByClassName("cal__dis")[0].value += a
            y = document.getElementsByClassName("cal__dis")[0].value
        }
    }
}

const numb0 = () => {
    if (s == 0) {
        if (document.getElementsByClassName("cal__dis")[0].value != 0) 
            document.getElementsByClassName("cal__dis")[0].value += 0        
    } else {
        if (y == 0) {
            document.getElementsByClassName("cal__dis")[0].value = "" + 0
            y = document.getElementsByClassName("cal__dis")[0].value
        } else {
            document.getElementsByClassName("cal__dis")[0].value += 0
            y = document.getElementsByClassName("cal__dis")[0].value
        }        
    }
}

const dot = () => {
    document.getElementsByClassName("cal__dis")[0].value += ".";
}

const addition = () => {
    if (y == 0) {
        s = 1;
        x = document.getElementsByClassName("cal__dis")[0].value;
    } else {
        document.getElementsByClassName("cal__dis")[0].value = parseFloat(x) + parseFloat(y);
        x = document.getElementsByClassName("cal__dis")[0].value;
        y = 0;
        s = 1;        
    }
}

const subtraction = () => {
    if (y == 0) {
        s = 2;
        x = document.getElementsByClassName("cal__dis")[0].value;
    } else {
        document.getElementsByClassName("cal__dis")[0].value = parseFloat(x) - parseFloat(y);
        x = document.getElementsByClassName("cal__dis")[0].value;
        y = 0;
        s = 2;
    }
}

const multiplication = () => {
    if (y == 0) {
        s = 3;
        x = document.getElementsByClassName("cal__dis")[0].value;
    } else {
        document.getElementsByClassName("cal__dis")[0].value = parseFloat(x) * parseFloat(y);
        x = document.getElementsByClassName("cal__dis")[0].value;
        y = 0;
        s = 3;    
    }
}

const division = () => {
    if (s == 0) {
        s = 4;
        x = document.getElementsByClassName("cal__dis")[0].value;
    } else {
        if (y == 0) {
            document.getElementsByClassName("cal__dis")[0].value = "Chia cho 0 à?";
            x = 0;
            s = 0
        } else {
            document.getElementsByClassName("cal__dis")[0].value = parseFloat(x) / parseFloat(y);
            x = document.getElementsByClassName("cal__dis")[0].value;
            y = 0;
            s = 4;            
        }
    }
}

const equal = () => {
    switch (s) {
        case 1:
            addition ();
            x = 0;
            y = 0;
            s = 0;
            break;
        case 2:
            subtraction ();
            x = 0;
            y = 0;
            s = 0;
            break;
        case 3:
            multiplication ();
            y = 0;
            x = 0;
            s = 0;
            break;
        case 4:
            division ();
            y = 0;
            x = 0;
            s = 0;
            break;
        default:
            break;
    }
}
