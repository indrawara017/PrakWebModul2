document.addEventListener("DOMContentLoaded", function() {
    let bilanganPertamaInput = document.getElementById("isiSatu");
    let bilanganKeduaInput = document.getElementById("isiDua");
    let hasil = document.createElement("p");

    document.querySelector("button[type='button']:first-of-type").addEventListener("click", function() {
        let bilanganPertama = parseFloat(bilanganPertamaInput.value);
        let bilanganKedua = parseFloat(bilanganKeduaInput.value);

        if (!isNaN(bilanganPertama) && !isNaN(bilanganKedua)) {
            var hasilPenambahan = bilanganPertama + bilanganKedua;
            alert("Hasil penambahan: " + hasilPenambahan);
        } else {
            alert("Mohon masukkan angka yang valid.");
        }

        document.body.appendChild(hasil);
    });

    document.querySelector("button[type='button']:last-of-type").addEventListener("click", function() {
        bilanganPertamaInput.value = "";
        bilanganKeduaInput.value = "";

        if (hasil.parentNode) {
            hasil.parentNode.removeChild(hasil);
        }
    });
});
