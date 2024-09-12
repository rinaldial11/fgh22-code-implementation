function divideAndSort(deretAngka) {
    let angka = deretAngka.toString()
    
    let angkaSplit = angka.split('0')
    
    angkaSplit = angkaSplit.map(b => b.split('').sort().join(''))
    
    let hasilAngka = angkaSplit.join('')
    
    let hasilDeretAngka = parseInt(hasilAngka, 10)
    
    console.log(hasilDeretAngka)
}

divideAndSort(5956560159466056)