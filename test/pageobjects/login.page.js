import { browser, $ } from '@wdio/globals'

class Login{
    //Element Locator
    get inputEmail () { return $('//input[@id="email"]') }
    get inputPassword () { return $('//input[@id="password"]') }
    get loginButton () { return $('//button[@type="submit"]') }
    

    //Page Actions
    async loginProccess(email, pass){
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(pass)
        await this.loginButton.click()
    }

    async openLoginPage(){
        await browser.url('https://develop--portal-jabar-cms.netlify.app/login')
    }
}

export default new Login()