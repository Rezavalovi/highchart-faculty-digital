# HighChart Company

HighChart Company adalah aplikasi web yang memungkinkan pengguna untuk melihat dan menganalisis revenue/profit perusahaan dalam bentuk chart selama beberapa tahun. Aplikasi ini dibangun menggunakan Vue.js untuk frontend, Node.js untuk backend, dan Highcharts untuk visualisasi data.

## Fitur

- Menampilkan revenue dan profit perusahaan dalam bentuk chart.
- Menyediakan berbagai jenis chart (misalnya, pie chart, bar chart) untuk visualisasi data.
- Menampilkan data dalam dashboard yang interaktif dan responsif.

## Instalasi

### Prasyarat

Pastikan Anda telah menginstal Node.js dan npm di sistem Anda.

1. Clone repository ini:

   ```bash
   git clone https://github.com/Rezavalovi/HighChartCompany.git
   ```

2. Instal semua dependensi yang diperlukan menggunakan npm:

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

3. Jalankan aplikasi:

   - Untuk backend:
     ```bash
     cd server
     npx nodemon App.js
     ```

   - Untuk frontend:
     ```bash
     cd client
     npm run dev
     ```

## Penggunaan

1. Buka browser dan akses `http://localhost:3000` untuk melihat aplikasi.
2. Navigasi melalui dashboard untuk melihat berbagai chart yang menampilkan revenue dan profit perusahaan.

## Teknologi yang Digunakan

- **Frontend:** Vue.js, TailwindCSS
- **Backend:** Node.js, Express.js
- **Visualisasi Data:** Highcharts
- **HTTP Client:** Axios

## Kontribusi

1. Fork repository ini.
2. Buat branch fitur baru (`git checkout -b fitur-baru`).
3. Commit perubahan (`git commit -m 'Tambah fitur baru'`).
4. Push ke branch (`git push origin fitur-baru`).
5. Buat Pull Request.
