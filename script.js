// script.js
document.addEventListener("DOMContentLoaded", function() {
    let data = JSON.parse(localStorage.getItem('dataAnggota')) || [];
    let tbody = document.getElementById('tableBody');

    if (tbody) {
        data.forEach(item => {
            let row = `<tr>
                <td>${item.nama}</td>
                <td>${item.email}</td>
                <td>${item.telepon}</td>
                <td>${item.minat}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }
});

// 1. FUNGSI SIMPAN DATA
function simpanData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const minat = document.getElementById('minat').value;

    if (!name || !email) {
        alert("Nama dan Email wajib diisi!");
        return;
    }

    // Ambil data lama
    let anggota = JSON.parse(localStorage.getItem('dataAnggota')) || [];
    
    // Simpan data baru
    anggota.push({ name: name, email: email, phone: phone, minat: minat });
    localStorage.setItem('dataAnggota', JSON.stringify(anggota));

    alert('Data berhasil disimpan!');
    window.location.href = 'index.html'; 
}

// 2. FUNGSI TAMPILKAN DATA (Hanya satu fungsi, jangan diduplikasi)
document.addEventListener("DOMContentLoaded", function() {
    let tbody = document.getElementById('tableBody');
    
    // Pastikan tableBody ada sebelum menjalankan kode
    if (tbody) {
        let data = JSON.parse(localStorage.getItem('dataAnggota')) || [];
        
        // Kosongkan tabel dulu
        tbody.innerHTML = "";

        data.forEach(item => {
            // Validasi: Jika data rusak (undefined), lewati
            if (!item.name || item.name === 'undefined') {
                return;
            }

            let row = `<tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.minat}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }
});