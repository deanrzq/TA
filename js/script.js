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
fetchTDSData();

// Perbarui data setiap 5 detik
setInterval(fetchTDSData, 5000);
