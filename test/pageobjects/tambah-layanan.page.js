import { $ } from '@wdio/globals'

class Layanan{
    //Element Locator
    get layanan()               { return $('//a[@title="Layanan"]') }
    get tambahLayanan()         { return $('//div[@class="flex items-center gap-3"]') }
    get kategoriLayanan()       { return $('//input[@placeholder="Pilih kategori layanan SPBE"]') }
    get searchKategoriLayan()   { return $('//div[@class="jds-popover__content"]/div/div[2]/div/input') }
    get hasilKategoriLayanan()  { return $$('//div[@class="jds-popover__content"]/div/ul/li') }

    get teknisLayanan()         { return $('//input[@placeholder="Pilih teknis layanan"]') }
    get teknisLayananOnline()   { return $('//div[@class="jds-popover__content"]/div/ul/li[2]') }

    get toggle()                { return $('//span[@class="jds-toggle__slider jds-toggle__circle"]') }
    get tarifLayanan()          { return $('//div[@class="w-full flex flex-col gap-y-2"]/span/div/div/input') }
    get tarifMaksimal()         { return $('//div[@class="w-full grid grid-cols-2 gap-y-2"]/span/div/div/input') }

    get waktuOperasional()      { return $$('//div[@class="grid grid-cols-[20px,160px,1fr,1fr] gap-x-3 mb-8 items-end"]/div[1]') }
    get pelayananDibuka()       { return $$('//div[@class="grid grid-cols-[20px,160px,1fr,1fr] gap-x-3 mb-8 items-end"]/span[1]/span[1]/input') }
    get pelayananDitutup()      { return $$('//div[@class="grid grid-cols-[20px,160px,1fr,1fr] gap-x-3 mb-8 items-end"]/span[2]/span[1]/input') }
    get jam_08()                { return $('//div[@style!="display: none;"]/div[@class="select-list"]/ul[1]/li[10]') }
    get menit_00()              { return $('//div[@style!="display: none;"]/div[@class="select-list"]/ul[2]/li[2]') }
    get jam_17()                { return $('//div[@style!="display: none;"]/div[@class="select-list"]/ul[1]/li[19]') }

    get jenisLokasi()           { return $('//input[@placeholder="Pilih Jenis Lokasi"]') }
    get pJLokasi()              { return $('//input[@placeholder="Pilih Penanggung Jawab Lokasi"]') }
    get kontakLokasi()          { return $('//input[@placeholder="Masukkan kontak lokasi"]') }
    get listPertama()           { return $('//div[@class="jds-popover__content"]/div/ul/li[1]') }

    get simpanDanLanjutkan()    { return $('//div[@class="flex gap-4"]/button[last()]') }

    get ketersediaanAplikasi()  { return $('//input[@placeholder="Pilih Ketersediaan Aplikasi"]') }
    get namaAplikasi()          { return $('//input[@placeholder="Nama Aplikasi"]') }

    get tambahFiturAplikasi()   { return $('//div[@class="flex flex-row justify-end"]/button') }
    get fiturAplikasi()         { return $$('//input[@placeholder="Masukkan fitur aplikasi"]') }
    get deskripsiFiturAplikasi(){ return $$('//textarea[@placeholder="Masukkan deskripsi"]') }

    get urusanPemerintahan()    { return $('//input[@placeholder="Pilih urusan pemerintahan"]') }
    get subUrusanPemerintahan() { return $('//input[@placeholder="Pilih sub urusan pemerintahan"]') }
    get bentukLayanan()         { return $('//input[@placeholder="Pilih bentuk layanan"]') }
    get jenisLayanan()          { return $('//input[@placeholder="Masukkan jenis layanan"]') }
    get namaLayanan()           { return $('//input[@placeholder="Masukkan nama layanan"]') }
    get namaProgramLayanan()    { return $('//input[@placeholder="Masukkan nama program layanan"]') }
    get DeskripsiLayanan()      { return $('//textarea[@placeholder="Masukkan deskripsi layanan"]') }
    get penggunaLayanan()       { return $('//input[@placeholder="Pilih pengguna layanan"]') }
    get statusOperasional()     { return $('//input[@placeholder="Pilih status operasional"]') }
    get manfaatLayanan()        { return $('//input[@placeholder="Masukkan manfaat layanan"]') }
    get sdkLayanan()            { return $('//input[@placeholder="Masukkan syarat dan ketentuan layanan"]') }
    get prosedurLayanan()       { return $('//input[@placeholder="Masukkan prosedur layanan"]') }
    get kontakHotlineNomor()    { return $('//input[@placeholder="cth: 022 2342345"]') }
    get kontakHotlineEmail()    { return $('//input[@placeholder="cth: jabarprov@go.id"]') }

    get namaPejabat()           { return $('//input[@placeholder="Masukkan Nama Pejabat Penanggung Jawab"]') }
    get nomor()                 { return $('//input[@placeholder="cth: 0812345678"]') }
    get email()                 { return $('//input[@placeholder="cth: jabarprov@go.id"]') }

    get listJudulData()         { return $$('//div[@class="px-4 py-3 bg-white even:bg-[#FCFCFC]"]/p[1]') }
    get listIsiData()           { return $$('//div[@class="px-4 py-3 bg-white even:bg-[#FCFCFC]"]/p[2] | //div[@class="px-4 py-3 bg-white even:bg-[#FCFCFC]"]/span | //div[@class="px-4 py-3 bg-white even:bg-[#FCFCFC]"]/ul |//div[@class="px-4 py-3 bg-white even:bg-[#FCFCFC]"]/a') }

    get aplikasi()              { return $('//div[@data-cy="modal-header"]/ul/li[2]') }
    get informasiTambahan()     { return $('//div[@data-cy="modal-header"]/ul/li[3]') }

    //Page Actions
    async goToTambahLayanan(){
        await this.layanan.click()
        await browser.pause(1000) 
        await this.tambahLayanan.click()
    }

    async clickInformasiTambahan(){
        await this.informasiTambahan.click()
    }

    async clickAplikasi(){
        await this.aplikasi.click()
    }

    async clickTambahLayanan(){
        await this.simpanDanLanjutkan.click()
    }

    async getAll(){
        let hasil = {}
        let a = []
        let b = []
        let allListJudulData = await this.listJudulData
        let allListIsiData = await this.listIsiData
        for (let i of allListJudulData) {
            let text = await i.getText()
            a.push(text)
        }
        for (let i of allListIsiData) {
            let text = await i.getText()
            b.push(text)
        }

        for (let i = 0; i < a.length; i++) {
            if (i < b.length) {
                hasil[a[i]] = b[i];
            }
        }
        return hasil
    }

    async inputEmail(r){
        await this.email.setValue(r)
    }

    async inputNomor(q){
        await this.nomor.setValue(q)
    }

    async inputNamaPejabat(p){
        await this.namaPejabat.setValue(p)
    }

    async inputKontakHotlineEmail(o){
        await this.kontakHotlineEmail.setValue(o)
    }

    async inputKontakHotlineNomor(n){
        await this.kontakHotlineNomor.setValue(n)
    }

    async inputProsedurLayanan(m){
        await this.prosedurLayanan.setValue(m)
    }

    async inputSdkLayanan(l){
        await this.sdkLayanan.setValue(l)
    }

    async inputManfaatLayanan(j){
        await this.manfaatLayanan.setValue(j)
    }

    async clickStatusOperasional(){
        await this.statusOperasional.click()
    }

    async clickPenggunaLayanan(){
        await this.penggunaLayanan.click()
    }

    async inputDeskripsiLayanan(i){
        await this.DeskripsiLayanan.setValue(i)
    }

    async inputNamaProgramLayanan(h){
        await this.namaProgramLayanan.setValue(h)
    }
    
    async inputNamaLayanan(g){
        await this.namaLayanan.setValue(g)
    }

    async inputJenisLayanan(f){
        await this.jenisLayanan.setValue(f)
    }

    async clickBentukLayanan(){
        await this.bentukLayanan.click()
    }

    async clickSubUrusanPemerintahan(){
        await this.subUrusanPemerintahan.click()
    }

    async clickUrusanPemerintahan(){
        await this.urusanPemerintahan.click()
    }

    async inputSemuaDeskripsiFiturAplikasi(e){
        let allDeskripsiFiturAplikasi = await this.deskripsiFiturAplikasi
        for (let i of allDeskripsiFiturAplikasi) {
            await i.setValue(e)
            await browser.pause(50)
        }
    }

    async inputSemuaFiturAplikasi(d){
        let allFiturAplikasi = await this.fiturAplikasi
        for (let i of allFiturAplikasi) {
            await i.setValue(d)
            await browser.pause(50)
        }
    }

    async buka3FiturAplikasi(){
        await this.tambahFiturAplikasi.click()
        await this.tambahFiturAplikasi.click()
    }

    async inputNamaAplikasi(c){
        await this.namaAplikasi.setValue(c)
    }

    async clickKetersediaanAplikasi(){
        await this.ketersediaanAplikasi.click()
    }

    async clickSimpanDanLanjutkan(){
        await this.simpanDanLanjutkan.click()
    }

    async inputKontakLokasi(c){
        await this.kontakLokasi.setValue(c)
    }

    async clickPJLokasi(){
        await this.pJLokasi.click()
    }

    async pilihListPertama(){
        await this.listPertama.click()
    }

    async clickJenisLokasi(){
        await this.jenisLokasi.click()
    }

    async semuaPelayananDitutupJam17Menit00(){
        let allPelayananDitutup = await this.pelayananDitutup
        for (let i of allPelayananDitutup) {
            await i.click()
            await browser.pause(50)
            await this.jam_17.click() 
            await browser.pause(50)
            await this.menit_00.click()
            await browser.pause(50) 
        }
    }

    async semuaPelayananDibukaJam08Menit00(){
        let allPelayananDibuka = await this.pelayananDibuka
        for (let i of allPelayananDibuka) {
            await i.click()
            await browser.pause(50)
            await this.jam_08.click() 
            await browser.pause(50)
            await this.menit_00.click()
            await browser.pause(50) 
        }
        await this.tarifLayanan.scrollIntoView({block:'center'})

    }

    async clickAllWaktuOperasional(){
        let allWaktuOperasional = await this.waktuOperasional
        for (let i of allWaktuOperasional) {
            await i.click()
            await browser.pause(50) 
        }
        await this.tarifLayanan.scrollIntoView({block:'center'})
    }

    async inputTarifMaksimal(b){
        await this.tarifMaksimal.setValue(b)
    }

    async inputTarifLayanan(a){
        await this.tarifLayanan.setValue(a)
    }

    async aktifkanToggle(){
        await this.toggle.click()
    }

    async pilihTeknisLayananOnline(){
        await this.teknisLayananOnline.click()
    }

    async clickTeknisLayanan(){
        await this.teknisLayanan.click()
    }

    async pilihKategoriLayananPertama(){
        await this.kategoriLayananPertama.click()
        await this.kategoriLayanan.click()
    }

    async clickKategoriLayanan(){
        await this.kategoriLayanan.click()
    }

    async searchKategoriLayanan(search){
        await this.searchKategoriLayan.setValue(search)
    }

    async getAllKategoriLayanan(){
        let hasil = []
        let allKategoriLayanan = await this.hasilKategoriLayanan
        for (let i of allKategoriLayanan) {
            let text = await i.getText()
            hasil.push(text)
        }
        return hasil
    }




}

export default new Layanan()