class Person{

    constructor(name, occupation, age){
        this._name = name;
        this._occupation = occupation;
        this._age = age
    }

    hello(name, occupation, age){
        if ( occupation === "dev" ){
            return `Fala ${occupation} seu nome é ${name} e você tem ${age} anos`
        } else {
            return `Fala ${name} e você tem ${age} anos e sua profissão é ${occupation}`
        }
    }
}


const SegundaPessoa = new NewPerson('Pedrinho')

const Pessoa = new Person;

module.exports = Pessoa;

// module.exports = SegundaPessoa