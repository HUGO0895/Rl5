class Descritor{
    constructor(){
        this.descrever=(empresa)=>{
          console.log(`Razão Social:${empresa.razaoSocial}`)
          console.log(`Nome Fantasia:${empresa.nomeFantasia}`)
          console.log(`Cnpj:${empresa.cnpj}`)
          console.log("Endereço")
          console.log(`Rua:${empresa.endereco.rua} Bairro:${empresa.endereco.bairro} Cidade:${empresa.endereco.cidade} Número=${empresa.endereco.numero}`)
          console.log("Funcionarios:")
          empresa.verFunc

        }
    }

}

export default Descritor
