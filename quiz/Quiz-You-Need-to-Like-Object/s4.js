/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  let aNama;
  let asal;
  let tujuan;
  let kendaraan;
  let harga;
  let arahDestinasi = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"]
  let cost = [
    ["Pesawat", 275000], ["Kereta", 250000], ["Bis", 225000]
  ];

  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split("-");
    aNama = arr[i][0];
    asal = arahDestinasi.indexOf(arr[i][1]) + 1;
    tujuan = arahDestinasi.indexOf(arr[i][2]) + 1;
    kendaraan = arr[i][3];

    if (kendaraan === cost[0][0]){
      harga = Math.abs(asal - tujuan) * cost[0][1];
    } else if (kendaraan === cost[1][0]){
      harga = Math.abs(asal - tujuan) * cost[1][1];
    } else if (kendaraan === cost[2][0]){
      harga = Math.abs(asal - tujuan) * cost[2][1];
    }
    // - OVO > akan mendapatkan diskon 15% setiap kota
    // - Dana > akan mendapatkan diskon 10% setiap kota
    // - Gopay > akan mendapatkan diskon 5% setiap kota
    if (emoney === "OVO"){
      harga = harga - ((harga * 15)/ 100);
    } else if (emoney === "Dana"){
      harga = harga - ((harga * 10)/ 100);
    } else if (emoney === "Gopay"){
      harga = harga - ((harga * 5)/ 100);
    }
    // console.log(asal, tujuan)

    arr[i] = {
      name: aNama,
      departureCity: arr[i][1],
      destinationCity: arr[i][2],
      transport: kendaraan,
      totalCost: harga
    }
  }

  return arr;
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];