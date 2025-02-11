<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Content-Type: application/json"); // Pastikan response dalam format JSON
header("Access-Control-Allow-Origin: *"); // Izinkan akses dari domain lain

$servername = "localhost";
$username = "root";
$password = "";
$database = "db_data";

// Koneksi ke database
$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die(json_encode(["error" => "Connection failed: " . mysqli_connect_error()]));
}

// Ambil data TDS dari database
$sql = "SELECT * FROM tds_data ORDER BY date DESC, time DESC LIMIT 50"; // Ambil 50 data terbaru
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Kirim data dalam format JSON
echo json_encode($data);

// Tutup koneksi database
mysqli_close($conn);
?>
