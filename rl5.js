import Funcionario from "./funcionario/funcionario.js";
import Empresa from "./empresa/empresa.js";
import Telefone from "./telefone/telefone.js";
import Endereco from "./endereco/endereco.js";//BatataDOCS
import Descritor from "./descritor/descritor.js"

let endereco = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
let telefone = new Telefone('011', '9-9999-9999');
let funcionario = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco,telefone);
let empresa = new Empresa( 'ABC LTDA', 'Mercado online', '999-999-999-99', endereco);
empresa.funcionarios.add(funcionario)
let descriptor = new Descritor();
descriptor.descrever(empresa);



