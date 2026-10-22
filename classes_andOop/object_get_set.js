const User = {
    _email: "P@pv.com",
    _password: "abc",

    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(value){
        this._email = value
    }


}

const tea = Object.create(User)
console.log(tea.email);
