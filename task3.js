function FazzFood(harga, voucher, jarak, pajak) {  
    let diskon = 0
    if (voucher = 'FAZZFOOD50') {
        if (harga >= 50000) {
            diskon = Math.min(harga * 0.5, 50000)
        }
    } else if (voucher = 'DITRAKTIR60') {
        if (harga >= 25000) {
            diskon = Math.min(harga * 0.6, 30000)
        }
    }
    let hargaDiskon = harga - diskon

    let cekPajak = 0
    if (pajak === true) {
        cekPajak = hargaDiskon * 0.05
    }

    let ongkir = 0
    if (jarak > 2) {
        ongkir = 5000 + (jarak - 2) * 3000
    } else {
        ongkir = 5000
    }

    let totalBiaya = hargaDiskon + cekPajak + ongkir
    console.log('harga dengan diskon = ' + hargaDiskon)
    console.log('ongkir = ' + ongkir)
    console.log('pajak = ' + cekPajak)
    console.log('_________________________________')
    console.log('total biaya = ' + totalBiaya)
}

FazzFood(60000, 'FAZZFOOD50', 5, true)