//materi compare with equality operand
// operator equality "==";
// digunakan buat perbandingan valuenya saja


function testEqual(val) {
    if(val == 10 ) {
        return "Not Equal";
    }
    return "Equal";
}
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator




// strict equliaty
// Operator yang menentukan true/false
//perbandingan untuk tipe data, variable dan valuenya


function testStrict(val) {
    if(val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));

