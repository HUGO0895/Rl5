# Desenvolva o código fonte, das classes, a partir do diagrama UML

 ## Documentação do Projeto - Diagramas UML

## Diagrama UML das Classes

```mermaid
classDiagram
    class Endereco {
        -int numero
        -string rua
        -string bairro
        -string cidade
        +constructor(numero, rua, bairro, cidade)
    }

    class Telefone {
        -string ddd
        -string numero
        +constructor(ddd, numero)
    }

    class Funcionario {
        -string nome
        -string rg
        -string cpf
        -Endereco endereco
        -Telefone telefone
        +constructor(nome, rg, cpf, endereco, telefone)
    }

    class Empresa {
        -Array~Funcionario~ funcionarios
        -Endereco endereco
        -string nome
        -string descricao
        -string cnpj
        -Array~Telefone~ telefones
        +constructor(funcionarios, endereco, nome, descricao, cnpj, telefones)
    }

    class Descriptor {
        +descrever(empresa)
    }

    Endereco "1" -- "1..*" Empresa : possui
    Endereco "1" -- "1" Funcionario : possui
    Telefone "1..*" -- "1" Empresa : pertence
    Telefone "1" -- "1" Funcionario : pertence
    Funcionario "1..*" -- "1" Empresa : trabalha
    Descriptor --> Empresa : descreve
