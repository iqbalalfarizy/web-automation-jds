# Web Automation JDS

This repository contains automated tests for the process of *menambahkan layanan baru* using WebDriverIO on Content Management System Portal Jabar.

## Setup

1. Clone the Repository

   First, clone this repository to your local machine.
   ```bash
   git clone https://github.com/iqbalalfarizy/web-automation-jds.git
   
2. Install Dependencies

   Navigate to your project directory and install the required npm packages.
   ```bash
   npm install
   
3. Running Tests

   To run the automated tests, use the following command.

    ```bash
    npm run wdio

4. Environtment

    - Node.js and npm
    - MicrosoftEdge

## Output
   ```cmd
      > wdio
      > wdio run ./wdio.conf.js
      
      
      Execution of 1 workers started at 2024-07-20T16:09:25.974Z
      
      [0-0] RUNNING in MicrosoftEdge - **/test/specs/tambah-layanan.spec.js
      
      DevTools listening on ws://127.0.0.1:52250/devtools/browser/5579e782-1206-4eaf-942a-2f89d2a24bc2
      [0-0] PASSED in MicrosoftEdge - **/test/specs/tambah-layanan.spec.js
      
       "spec" Reporter:
      ------------------------------------------------------------------
      [MicrosoftEdge 126.0.2592.102 windows #0-0] Running: MicrosoftEdge (v126.0.2592.102) on windows
      [MicrosoftEdge 126.0.2592.102 windows #0-0] Session ID: 9bb77a9fa3673de323c91ccd4563f067
      [MicrosoftEdge 126.0.2592.102 windows #0-0]
      [MicrosoftEdge 126.0.2592.102 windows #0-0] » \test\specs\tambah-layanan.spec.js
      [MicrosoftEdge 126.0.2592.102 windows #0-0] Menambahkan Layanan Baru
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Select dropdown Kategori Layanan SPBE (RAL Level 2) dengan mengetikan keyword/search pada komponen select2
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Pilih isian Teknis Layanan dengan isian Online
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Aktifkan toogle Tarif Maksimal, lalu inputkan Tarif Layanan dan Tarif Maksimal
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Checklist semua field di bagian Waktu Operasional
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Mengisi atribut data yang bersifat tidak mandatory (Lokasi Pelayanan)
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Mengisi semua data mandatory pada halaman 1
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Pada halaman 2 section Aplikasi, buatlah 3 data
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Mengisi semua data mandatory pada halaman 3
      [MicrosoftEdge 126.0.2592.102 windows #0-0]    ✓ Verifikasi halaman konfirmasi data (hasil seluruh inputan pada 3 step formulir pembuatan layanan)
      [MicrosoftEdge 126.0.2592.102 windows #0-0]
      [MicrosoftEdge 126.0.2592.102 windows #0-0] 9 passing (27s)
      
      
      Spec Files:      1 passed, 1 total (100% completed) in 00:00:33
   ```
