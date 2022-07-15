const generalBox = document.querySelector(".GeneralBox"),
qrInput = generalBox.querySelector(".inputBox input")
generateBtn = generalBox.querySelector(".inputBox button");
qrImg = generalBox.querySelector(".QrBox img");


generateBtn.addEventListener("click", () => {
        //creating variable for the input text
        let qrValue = qrInput.value;
        //conditioning if its empty
        if(!qrValue){
            return;
        }else{
            //if not empty, we call to the web api of Goqr.me
            generateBtn.innerText ="Generating QR Code..."
            qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
            //and we activate the hidden part of the page
            qrImg.addEventListener("load", ()=>{
                generalBox.classList.add("active");
                generateBtn.innerText ="Generate a new QR"
            });}
    });

    qrInput.addEventListener("keyup", () => {
        if(!qrInput.value){
            generalBox.classList.remove("active")
        }
    })