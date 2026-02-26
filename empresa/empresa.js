class Empresa{
    constructor(razaoSocial,nomeFantasia,cpnj,endereco){
        this.razaoSocial=razaoSocial,
        this.nomeFantasia=nomeFantasia,
        this.cpnj=cpnj,
        this.endereco=endereco,
        this.funcionarios=new Set()
    }
    get verFunc(){
        for(let x of this.funcionarios){
            console.log("Nome:"+x.nome)
            console.log("Matricula:"+x.matricula)
            console.log("Cpf:"+x.cpf)
            console.log("Rua:"+x.endereco.rua+" Bairro:"+x.endereco.bairro+" Cidade:"+x.endereco.cidade+" Número:"+x.endereco.numero)
        }
    }
}

export default Empresa