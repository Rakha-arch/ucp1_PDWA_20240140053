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