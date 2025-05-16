#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>

#define FIREBASE_HOST "myflutter-maritrex-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "YOUR_DATABASE_SECRET"
#define WIFI_SSID "YOUR_WIFI_NAME"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"

FirebaseData firebaseData;

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  if (Firebase.getString(firebaseData, "/perintah")) {
    String perintah = firebaseData.stringData();
    if (perintah == "KIRIM") {
      Serial.println("Mengirim perintah ke Modem 2...");
      // Tambahkan kode untuk mengirim 'KIRIM' via VLC
      digitalWrite(LASER_PIN, HIGH); // contoh
      delay(1000);
      digitalWrite(LASER_PIN, LOW);

      // Reset perintah agar tidak terus dikirim
      Firebase.setString(firebaseData, "/perintah", "");
    }
  }
  delay(2000); // cek setiap 2 detik
}
