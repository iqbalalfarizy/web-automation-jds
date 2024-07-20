import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import layananPage from '../pageobjects/tambah-layanan.page.js'
import tags from 'mocha-tags'


tags('happy flow')
.describe('Menambahkan Layanan Baru', function() {
    let dataHalaman1 = {}
    let dataHalaman2 = {}
    let dataHalaman3 = {}
    let text = "test"
    let nomor = "08123456789"
    let email = "iqbal@gmail.com"

    before(async function(){
        await loginPage.openLoginPage()
        await loginPage.loginProccess('rekrutment1@gmail.com','jabarjuara')
        await layananPage.goToTambahLayanan()
    })
 
    
    it('Select dropdown Kategori Layanan SPBE (RAL Level 2) dengan mengetikan keyword/search pada komponen select2', async function(){
        await layananPage.clickKategoriLayanan()
        await layananPage.searchKategoriLayanan("per")
        let allKategoriLayanan = await layananPage.getAllKategoriLayanan()
        // console.log(allKategoriLayanan)
        allKategoriLayanan.forEach(element => {
            expect(element).toMatch(/per/i)
        })
        dataHalaman1["Kategori Layanan SPBE (RAL 2):"] = `RAL.01.01 ${await layananPage.listPertama.getText()}`

        await layananPage.pilihListPertama()   

    })

    it('Pilih isian Teknis Layanan dengan isian Online', async function(){
        await layananPage.clickTeknisLayanan()
        dataHalaman1["Teknis Layanan:"] = await layananPage.teknisLayananOnline.getText()
        await layananPage.pilihTeknisLayananOnline()

    })

    it('Aktifkan toogle Tarif Maksimal, lalu inputkan Tarif Layanan dan Tarif Maksimal', async function(){
        await layananPage.aktifkanToggle()
        dataHalaman1["Tarif Layanan:"] = "10000 - 15000"
        await layananPage.inputTarifLayanan("10000")
        await layananPage.inputTarifMaksimal("15000")

    })

    it('Checklist semua field di bagian Waktu Operasional', async function(){
        await layananPage.clickAllWaktuOperasional()
        dataHalaman1["Waktu Operasional:"] = 'Senin 08:00 - 17:00\n' +
                                            'Selasa 08:00 - 17:00\n' +
                                            'Rabu 08:00 - 17:00\n' +
                                            'Kamis 08:00 - 17:00\n' +
                                            'Jumat 08:00 - 17:00\n' +
                                            'Sabtu 08:00 - 17:00\n' +
                                            'Minggu 08:00 - 17:00'
        await layananPage.semuaPelayananDibukaJam08Menit00()
        await layananPage.semuaPelayananDitutupJam17Menit00()

    })

    it('Mengisi atribut data yang bersifat tidak mandatory (Lokasi Pelayanan)', async function(){
        await layananPage.clickJenisLokasi()
        dataHalaman1["Jenis Lokasi:"] = await layananPage.listPertama.getText()
        await layananPage.pilihListPertama()
        await layananPage.clickPJLokasi()
        dataHalaman1["Penanggung Jawab Lokasi:"] = await layananPage.listPertama.getText()
        await layananPage.pilihListPertama()
        dataHalaman1["Kontak Lokasi (Nomor HP/Telp):"] = nomor
        await layananPage.inputKontakLokasi(nomor)

    })

    it('Mengisi semua data mandatory pada halaman 1', async function(){
        await layananPage.urusanPemerintahan.scrollIntoView({block:'center'})
        dataHalaman1["Nama Perangkat Daerah:"] = "Dev"

        await layananPage.clickUrusanPemerintahan()
        await layananPage.pilihListPertama()

        await layananPage.clickSubUrusanPemerintahan()
        await layananPage.pilihListPertama()

        await layananPage.clickBentukLayanan()
        await layananPage.pilihListPertama()

        await layananPage.inputJenisLayanan(text)

        dataHalaman1["Nama Layanan:"] = text
        await layananPage.inputNamaLayanan(text)

        dataHalaman1["Nama Program Layanan:"] = text
        await layananPage.inputNamaProgramLayanan(text)

        dataHalaman1["Deskripsi Layanan:"] = text
        await layananPage.inputDeskripsiLayanan(text)

        await layananPage.clickPenggunaLayanan()
        dataHalaman1["Pengguna Layanan:"] = await layananPage.listPertama.getText()
        await layananPage.pilihListPertama()

        await layananPage.clickStatusOperasional()
        dataHalaman1["Status Operasional:"] = await layananPage.listPertama.getText()
        await layananPage.pilihListPertama()

        dataHalaman1["Manfaat Layanan:"] = `1. ${text}`
        await layananPage.inputManfaatLayanan(text)
        
        dataHalaman1["Syarat dan Ketentuan Layanan:"] = `1. ${text}`
        await layananPage.inputSdkLayanan(text)

        dataHalaman1["Prosedur Layanan:"] = `1. ${text}`
        await layananPage.inputProsedurLayanan(text)

        dataHalaman1["Kontak Hotline (Nomor HP/Telp):"] = nomor
        await layananPage.inputKontakHotlineNomor(nomor)

        dataHalaman1["Kontak Hotline (Alamat Email):"] = email
        await layananPage.inputKontakHotlineEmail(email)       

    })

    it('Pada halaman 2 section Aplikasi, buatlah 3 data', async function(){
        await layananPage.clickSimpanDanLanjutkan()

        await layananPage.clickKetersediaanAplikasi()
        dataHalaman2["Status Ketersediaan Aplikasi:"] = await layananPage.listPertama.getText()
        await layananPage.pilihListPertama()

        dataHalaman2["Nama Aplikasi:"] = text
        await layananPage.inputNamaAplikasi(text)

        await layananPage.buka3FiturAplikasi()
        dataHalaman2["Fitur Aplikasi:"] = text
        await layananPage.inputSemuaFiturAplikasi(text)
        dataHalaman2["Deskripsi Fitur:"] = text
        await layananPage.inputSemuaDeskripsiFiturAplikasi(text)

    })


    it('Mengisi semua data mandatory pada halaman 3', async function(){
        await layananPage.clickSimpanDanLanjutkan()

        dataHalaman3["Nama Pejabat Penanggung Jawab:"] = text
        await layananPage.inputNamaPejabat(text)

        dataHalaman3["Nomor Kontak (HP/Telp):"] = nomor
        await layananPage.inputNomor(nomor)

        dataHalaman3["Alamat Email:"] = email
        await layananPage.inputEmail(email)

    })

    it('Verifikasi halaman konfirmasi data (hasil seluruh inputan pada 3 step formulir pembuatan layanan)', async function(){
        await layananPage.clickTambahLayanan()
        let hasilHalaman1 = await layananPage.getAll()
        await layananPage.clickAplikasi()
        let hasilHalaman2 = await layananPage.getAll()
        await layananPage.clickInformasiTambahan()
        let hasilHalaman3 = await layananPage.getAll()

        // console.log(">>>>data 1>>>>", dataHalaman1)
        // console.log(">>>>hasil 1>>>>", hasilHalaman1)

        // console.log(">>>>data 2>>>>", dataHalaman2)
        // console.log(">>>>hasil 2>>>>", hasilHalaman2)

        // console.log(">>>>data 3>>>>", dataHalaman3)
        // console.log(">>>>hasil 3>>>>", hasilHalaman3)

        let verif1 = Object.keys(dataHalaman1).every(i => dataHalaman1[i] === hasilHalaman1[i])
        let verif2 = Object.keys(dataHalaman2).every(i => dataHalaman2[i] === hasilHalaman2[i])
        let verif3 = Object.keys(dataHalaman3).every(i => dataHalaman3[i] === hasilHalaman3[i])
        
        await expect(verif1).toBe(true)
        await expect(verif2).toBe(true)
        await expect(verif3).toBe(true)
        
    })

})
