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

function simpanData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const minat = document.getElementById('minat').value;

    if (!name || !email) {
        alert("Nama dan Email wajib diisi!");
        return;
    }

    let anggota = JSON.parse(localStorage.getItem('dataAnggota')) || [];
    anggota.push({ name, email, phone, minat });
    localStorage.setItem('dataAnggota', JSON.stringify(anggota));

    alert('Data berhasil disimpan!');
    
    
    window.location.href = 'index.html'; 
}


document.addEventListener("DOMContentLoaded", function() {
    let tbody = document.getElementById('tableBody');
    if (tbody) {
        let data = JSON.parse(localStorage.getItem('dataAnggota')) || [];
        data.forEach(item => {
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