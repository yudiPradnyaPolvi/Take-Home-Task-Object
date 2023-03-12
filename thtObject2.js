console.log ("Take Home Task Object Nomor 2")


console.log("Bikin 1 object yang berisi sebuah function untuk melakukan perhitungan matematika (tambah, kurang, kali, bagi, pangkat, modulus")
    let angka1 = 1
    let angka2 = 2
    let angka3 = 3
    let angka4 = 4
    let angka5 = 5
    const hasil1 = angka1+angka2+angka3+angka4+angka5
    const hasil2 = angka1-angka2-angka3-angka4-angka5
    const hasil3 = angka1*angka2*angka3*angka4*angka5
    const hasil4 = angka1/angka2/angka3/angka4/angka5
    const hasil5 = angka1**angka2**angka3**angka5
    const hasil6 = angka1%angka2%angka3%angka4%angka5

const perhitungan = {
    
    getPerhitunganMath: function(hasils1,hasils2,hasils3,hasils4,hasils5,hasils6){
        hasil1 = hasils1
        hasil2 = hasils2
        hasil3 = hasils3
        hasil4 = hasils4
        hasil5 = hasils5
        hasil6 = hasils6
      
    }
   
}
let hasil = [hasil1,hasil2,hasil3,hasil4,hasil5,hasil6]
function getdataperhitungan (){
    return hasil 

}
let nilaiPerhitungan=getdataperhitungan()
console.log ("menampilkan hasil perhitungan = "+ nilaiPerhitungan) 
