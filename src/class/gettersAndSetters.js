class Person {
    constructor(name, occupation){
        this._name = name;
        this._occupation = occupation
    }

    speak(){
        return `${this._name} trabalha como ${this._occupation}`
    }

    set name(string){
        this._name = string.toUpperCase()
    }

    get name(){
        return this._name
    }
}

let mariane = new Person('Mariane', 'Desenvolvedora')
mariane.name = 'MaRiane PessoA'

module.exports = mariane