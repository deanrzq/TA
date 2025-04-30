async function fetchTDSData() {
  try {
      const response = await fetch('./json/tdsData.json');
      const data = await response.json();
      updateTable(data);
  } catch (error) {
      console.error("Error loading JSON data:", error);
  }
}

function updateTable(data) {
  const tableBody = document.querySelector("#tdsTable tbody");
  tableBody.innerHTML = "";

  data.forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${row["No"]}</td>
          <td>${row["Date"]}</td>
          <td>${row["Day"]}</td>
          <td>${row["Time"]}</td>
          <td>${row["Water TDS (ppm)"]}</td>
      `;
      tableBody.appendChild(tr);
  });
}

fetchTDSData();