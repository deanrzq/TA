import { database, ref, onValue } from './firebase-config.js';

function kirimPerintah() {
  const perintahRef = ref(database, "perintah");
  set(perintahRef, "KIRIM").then(() => {
    alert("Perintah telah dikirim ke alat.");
  }).catch((error) => {
    alert("Gagal mengirim perintah: " + error);
  });
}
window.kirimPerintah = kirimPerintah;


const tableBody = document.querySelector("#tdsTable tbody");
console.log("📦 script2.js loaded");

const historyRef = ref(database, "-historyData/-3GqnUHKpn6NFvHNDhZJGjQycazc2");

onValue(historyRef, (snapshot) => {
  const data = snapshot.val();
  console.log("📡 Data:", data);

  if (!data) {
    console.warn("⚠️ No data found at this path.");
    return;
  }

  const sortedKeys = Object.keys(data).sort((a, b) => {
    return new Date(data[b].timestamp) - new Date(data[a].timestamp);
  });

  tableBody.innerHTML = "";

  sortedKeys.forEach((key, index) => {
    const item = data[key];
    const dateTime = new Date(item.timestamp);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });

    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${date}</td>
        <td>${day}</td>
        <td>${time}</td>
        <td>${item.tds} ppm</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
});
