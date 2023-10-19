// Fungsi yang akan dipanggil ketika formulir disubmit
        function handleSubmit(event) {
            event.preventDefault(); // Mencegah pengiriman formulir
            let namaLengkap = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let alamat = document.getElementById("alamat").value;

            // Validasi data
            if (namaLengkap === "" || email === "" || alamat === "") {
                alert("Anda harus mengisi data dengan lengkap.");
            } else {
                // Lakukan sesuatu dengan data yang telah diambil
                console.log("Nama Lengkap: " + namaLengkap);
                console.log("Email: " + email);
                console.log("Alamat: " + alamat);

                // Menampilkan alert "Terima kasih sudah mengisi data"
                alert("Terima kasih sudah mengisi data.");

                // Membersihkan ulang inputan
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("alamat").value = "";
            }
        }

        // Mengaitkan fungsi handleSubmit dengan peristiwa pengiriman formulir
        var form = document.getElementById("myForm");
        form.addEventListener("submit", handleSubmit);