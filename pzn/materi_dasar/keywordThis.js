console.info(this);

const personalInfo = {
    name : "Teuku",
    age : 23,
    txtGreetings : (txt)=>{
        return txt;
    }
}
console.log(personalInfo.txtGreetings(`Hello ${personalInfo.name}`));

function thisKeyword(){
    this.nama = nama;
    this.alamat = alamat;   
}
