function reversedWords(kalimat) {
    let kata = kalimat.split(' ').reverse().join(' ')
    console.log(kata)
}

reversedWords('saya belajar Javascript')