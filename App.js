import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks utama */}
      <Text style={styles.text}>Tugas P2 Lab DPM</Text>
      <Text style={styles.text}>MUHAMMAD DHANDHY PUTERA IRVANTIE</Text>
      <Text style={styles.text}>223510351</Text>
      <Text style={styles.text}>5 C</Text>
      
      {/* Kontainer dengan tata letak FlexBox */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={styles.box} />
        {/* Kotak 2 */}
        <View style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3", // Latar belakang abu-abu terang
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: "blue", // Warna biru
    fontWeight: "bold", // Gaya teks tebal
    marginBottom: 10, // Jarak bawah teks utama
  },
  subText: {
    fontSize: 18, // Ukuran font lebih kecil untuk teks tambahan
    color: "black", // Warna teks hitam
    marginBottom: 5, // Jarak antar baris teks tambahan
  },
  boxContainer: {
    flexDirection: "row", // Tata letak horizontal
    justifyContent: "space-between", // Jarak merata di antara kotak
    width: "80%", // Lebar kontainer
    marginTop: 20, // Jarak antara teks dan kotak
  },
  box: {
    backgroundColor: "red", // Warna kotak merah
    width: 100,
    height: 100,
  },
});
