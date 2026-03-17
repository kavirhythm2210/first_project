export class LoginPage{

    constructor(page){
        this.page=page;
        this.Email_textbox= page.locator('#userEmail');
        this.Password_textbox= page.locator('#userPassword');
        this.Login_Button= page.locator('#login');

    }
   
    async login(username,password){
        await this.Email_textbox.fill(username);
        await this.Password_textbox.fill(password);
        await this.Login_Button.click();

    }


}