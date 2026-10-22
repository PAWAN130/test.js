class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()

    }
    set email(value) {
        this._email = value
    }
    get password() {
        return `${this._password}Pawan`
    }
    set password(value) {
        this._password = value
    }
}
const Pawan= new User("Pawan@.ai", "abc")
console.log(Pawan.password);
console.log(Pawan.email);

