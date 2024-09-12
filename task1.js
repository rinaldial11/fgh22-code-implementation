function cekPalindrom(kata) {
    cek = kata.toLowerCase()
    let reversedWords = cek.split('').reverse().join('').toLowerCase()
    if (cek === reversedWords) {
        console.log(cek + ' adalah palindrom')
    } else {
        console.log(cek + ' bukan palindrom')
    }
    
}

cekPalindrom('Malam')