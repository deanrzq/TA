async function fetchTDSData() {
  try {
      let response = await fetch("https://website-php.com/api/tds.php"); 
      let data = await response.json(); // Parsing JSON langsung
      console.log(data); // Debugging: Cek data di console
      updateTable(data);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

function updateTable(data) {
  const tableBody = document.querySelector("#tdsTable tbody");
  tableBody.innerHTML = ""; // Kosongkan isi tabel sebelum diisi ulang

  data.forEach((row, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${row.date}</td>
          <td>${row.day}</td>
          <td>${row.time}</td>
          <td>${row.tds}</td>
      `;
      tableBody.appendChild(tr);
  });
}

// Ambil data saat halaman dimuat
  fetch('./json/tdsData.json')
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector('#tdsTable tbody');
      data.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${entry.no}</td>
          <td>${entry.date}</td>
          <td>${entry.day}</td>
          <td>${entry.time}</td>
          <td>${entry.tds}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error loading TDS data:', error);
    });

// Perbarui data setiap 5 detik
setInterval(fetchTDSData, 5000);
