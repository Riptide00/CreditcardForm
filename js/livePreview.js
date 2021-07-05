let reg_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let reg_number = /^[0-9]*$/
let reg_cvv = /^[0-9]{3,4}$/;

function updateName() {
    let val = document.getElementById("name").value;

    if (val.length <= 0) {
        val = "John Doe";
        document.getElementById("name").style.borderColor = "grey";
    } else {
        console.log(reg_name.test(val));
        if (reg_name.test(val)) {
            document.getElementById("name").style.borderColor = "green";
        } else {
            document.getElementById("name").style.borderColor = "red";
        }
    }

    document.getElementById("namePreview").innerHTML = val.toUpperCase();
    console.log(document.getElementById("name").value);
}

function updateNumber() {
    let val = document.getElementById("number").value;

    if (val.length <= 0) {
        val = "0000000000000000";
        document.getElementById("number").style.borderColor = "grey";
    } else {
        console.log(reg_number.test(val));
        if (reg_number.test(val)) {
            document.getElementById("number").style.borderColor = "green";
        } else {
            document.getElementById("number").style.borderColor = "red";
        } 
    }

    document.getElementById("numberPreview").innerHTML = val.match(/.{1,4}/g).join(' ');
    console.log(document.getElementById("number").value);
}

function updateExpiration() {
    let valMM = document.getElementById("expireMM").value;
    let valYY = document.getElementById("expireYY").value;
    let val = valMM + "/" + valYY;

    document.getElementById("expirePreview").innerHTML = val;
    console.log(document.getElementById("expireMM").value + "/" + document.getElementById("expireYY").value);
}

function updateCvv() {
    let val = document.getElementById("cvv").value;

    if (val.length <= 0) {
        val = "123";
        document.getElementById("cvv").style.borderColor = "grey";
    } else {
        console.log(reg_cvv.test(val));
        if (reg_cvv.test(val)) {
            document.getElementById("cvv").style.borderColor = "green";
        } else {
            document.getElementById("cvv").style.borderColor = "red";
        }
    }

    document.getElementById("cvvPreview").innerHTML = "*".repeat(val.length);
    console.log(document.getElementById("cvv").value);
}