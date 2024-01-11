

let meva = [];

while (true) {
    let javob = prompt("Xohlagan meva nomini kiriting");
    
    if (javob === 'stop') {
        break;
    } else if (meva.indexOf(javob) !== -1) {
        alert("Siz bu mevani oldn kiritgansiz");
        break;
    } else {
        meva.push(javob);
        console.log("Siz meva kiritmadingiz");
    }
}

console.log(meva);