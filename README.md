# Address-Book-API

Address-Book-API adalah sebuah aplikasi API RESTful sederhana yang dirancang untuk mengelola buku alamat kontak. API ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data kontak, serta mengelompokkan kontak ke dalam grup-grup yang berbeda.

## Tentang Proyek

Address-Book-API adalah sebuah aplikasi API RESTful yang dikembangkan menggunakan Node.js dan Express.js. Tujuan utama dari proyek ini adalah menyediakan layanan backend untuk mengelola data kontak dalam sebuah buku alamat digital.

Fitur utama dari Address-Book-API antara lain:

1. **Pengelolaan Kontak**
   - Menambah, membaca, memperbarui, dan menghapus data kontak secara individual.
   - Setiap kontak memiliki informasi seperti nama, nomor telepon, perusahaan, dan email.

2. **Pengelompokan Kontak**
   - Membuat dan mengelola grup-grup untuk mengorganisir kontak.
   - Setiap kontak dapat dihubungkan dengan satu atau lebih grup.
   - Kemampuan untuk melihat daftar kontak dalam setiah grup.

3. **Arsitektur API RESTful**
   - Menggunakan desain arsitektur RESTful untuk menyediakan endpoint API yang terstruktur dan mudah dipelihara.
   - Mendukung operasi CRUD (Create, Read, Update, Delete) pada data kontak dan grup.

4. **Integrasi dengan Database**
   - Menggunakan SQLite sebagai database untuk menyimpan data kontak dan grup secara persisten.
   - Kemampuan untuk mengelola skema database dan migrasi data dengan mudah.

Proyek Address-Book-API ini dikembangkan dengan tujuan untuk mempelajari dan menerapkan konsep-konsep seperti pengembangan API RESTful, integrasi dengan database, dan pengelolaan data menggunakan Node.js dan Express.js. Selain itu, proyek ini juga dapat digunakan sebagai landasan untuk pengembangan aplikasi buku alamat digital yang lebih kompleks di masa mendatang.


## Teknologi yang Digunakan

Daftar teknologi yang digunakan dalam proyek ini, seperti:

- Node.js
- Express.js
- SQLite3

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menyiapkan proyek Address-Book-API pada lingkungan pengembangan lokal Anda:

1. **Kloning Repositori**
```bash
git clone https://github.com/manzadhit/Address-Book-API.git
```
2. **Masuk ke direktori proyek**
```bash
cd address-book-api
```
3. **Instal Dependensi**
```bash
npm install
```
Perintah ini akan menginstal semua dependensi yang diperlukan, termasuk Express.js dan paket-paket lainnya yang tercantum dalam `package.json`.

4. **Konfigurasi Database**

Proyek ini menggunakan SQLite sebagai database default. Anda tidak perlu melakukan konfigurasi tambahan untuk menggunakan SQLite. Namun, jika Anda ingin menggunakan database lain seperti MySQL atau PostgreSQL, Anda perlu mengonfigurasi koneksi database sesuai dengan preferensi Anda.

## Menjalankan Aplikasi

Untuk menjalankan aplikasi dalam mode pengembangan, jalankan perintah berikut:
```bash
npm run dev
```
Perintah ini akan menjalankan server Express dalam mode pengembangan dengan fitur hot-reloading, yang memungkinkan perubahan kode untuk secara otomatis dimuat ulang tanpa perlu me-restart server secara manual.


## Endpoint API

Berikut adalah daftar endpoint API yang tersedia dalam proyek Address-Book-API:

### Contact Routes

- `GET /contact`
  - Mendapatkan daftar semua kontak.

- `POST /contact`
  - Membuat kontak baru.
  - Contoh input:
    ```json
    {
      "name": "John Doe",
      "phoneNumber": "081234567890",
      "company": "ABC Corp",
      "email": "john@example.com"
    }
    ```

- `GET /contact/:contactId`
  - Mendapatkan detail kontak berdasarkan ID.

- `PUT /contact/:contactId`
  - Memperbarui informasi kontak berdasarkan ID.

- `DELETE /contact/:contactId`
  - Menghapus kontak berdasarkan ID.

### Group Routes

- `POST /groups`
  - Membuat grup baru.
  - Contoh input:
    ```json
    {
      "groupName": "IT Department"
    }
    ```

- `GET /groups`
  - Mendapatkan daftar semua grup beserta daftar kontak di setiap grup.

- `GET /groups/:groupId`
  - Mendapatkan detail grup berdasarkan ID, termasuk daftar kontak di grup tersebut.

- `PUT /groups/:groupId`
  - Memperbarui informasi grup berdasarkan ID.

- `DELETE /groups/:groupId`
  - Menghapus grup berdasarkan ID.

### ContactGroup Routes

- `POST /contactGroups`
  - Menghubungkan kontak dengan grup.
  - Contoh input:
    ```json
    {
      "contactId": 1,
      "groupId": 2
    }
    ```

- `GET /contactGroups`
  - Mendapatkan daftar semua hubungan antara kontak dan grup.

- `GET /contactGroups/:contactGroupId`
  - Mendapatkan detail hubungan antara kontak dan grup berdasarkan ID.

- `PUT /contactGroups/:contactGroupId`
  - Memperbarui hubungan antara kontak dan grup berdasarkan ID.

- `DELETE /contactGroups/:contactGroupId`
  - Menghapus hubungan antara kontak dan grup berdasarkan ID.