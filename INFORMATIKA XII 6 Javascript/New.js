for(nilai = 1; nilai <= 7; nilai++)
if(nilai > 4 ) {
    console.log(`Ruang nomor ${nilai} tidak diperbaiki`);
} else if(nilai === 4) {
    console.log(`Ruang nomor ${nilai} sedang diperbaiki`);
} else {
    console.log(`Ruang nomor ${nilai} berfungsi`);
}