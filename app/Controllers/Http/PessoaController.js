'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pessoas
 */
const Database = use('Database')
class PessoaController {
  
  async index ({ request, response, view }) {
    const a = await Database.raw(`SELECT pessoa.id_pessoa, pessoa.acesso, pessoa.nome, pessoa.cpf, pessoa.telefone, municipio.nome as municipio FROM pessoa inner join municipio on pessoa.id_municipio = municipio.id_municipio `)
      return response.json(a)
  } 

  async store ({ request, response }) {
    const nome = request.input('nome');
    const endereco = request.input('endereco');
    const bairro = request.input('bairro');
    const municipio = request.input('municipio');
    const telefone = request.input('telefone');
    const celular = request.input('celular');
    const cpf = request.input('cpf');
    const email = request.input('email');
    const crea = request.input('crea');
    const consultor = request.input('consultor');
    const produtor = request.input('produtor');
    const administrador = request.input('administrador');
   // const b = `'${administrador}', '${bairro}', '${celular}', '${consultor}', '${nome}', '${endereco}', '${produtor}', '${telefone}', '${municipio}', '${email}', '${cpf}', '${crea}'`;
    
    const a = await Database.raw(` INSERT INTO pessoa (administrador, bairro, celular, consultor, endereco, nome, produtor, telefone, id_municipio, email, cpf, crea, acesso)
     VALUES ('${administrador}', '${bairro}', '${celular}', '${consultor}', '${endereco}', '${nome}', '${produtor}', '${telefone}', '${municipio}', '${email}', '${cpf}', '${crea}', 'true') `);
    return response.json(a);

  }
 
  async update ({ params, request, response }) {    
    const nome = request.input('nome');
    const endereco = request.input('endereco');
    const bairro = request.input('bairro');
    const municipio = request.input('municipio');
    const telefone = request.input('telefone');
    const celular = request.input('celular');
    const cpf = request.input('cpf');
    const email = request.input('email');
    const crea = request.input('crea');
    const consultor = request.input('consultor');
    const produtor = request.input('produtor');
    const administrador = request.input('administrador');
    const acesso = request.input('acesso');
    const id = request.input('id_pessoa') 

    const a = await Database.raw(` UPDATE pessoa set administrador = '${administrador}', bairro='${bairro}', celular='${celular}', consultor='${consultor}', endereco='${endereco}', nome='${nome}', produtor='${produtor}', telefone='${telefone}', id_municipio='${municipio}', 
    email='${email}', cpf='${cpf}', crea='${crea}', acesso='true' WHERE id_pessoa = '${id}' `);
    return response.json(a); 
  }

  async destroy ({ params, request, response }) {
    

    const id = request.input('id_pessoa')
    const a = await Database.raw(` DELETE FROM pessoa WHERE id_pessoa = '${id}' `)
    return response.json(a)

  }

  async busca ({ request, response, view, send }) {
    const nome = request.input('nome')
    const cpf = request.input('cpf')
    const municipio = request.input('municipio')

    if(!cpf && !nome && !municipio){
      const a = await Database.raw(`SELECT pessoa.id_pessoa, pessoa.nome, pessoa.cpf, pessoa.telefone, municipio.nome as municipio FROM pessoa inner join municipio on pessoa.id_municipio = municipio.id_municipio`)
      return response.json(a)
    }else{
      const a = await Database.raw(`SELECT pessoa.id_pessoa, pessoa.nome, pessoa.cpf, pessoa.telefone, municipio.nome as municipio FROM pessoa inner join municipio on pessoa.id_municipio = municipio.id_municipio WHERE pessoa.nome ILIKE '%${nome}%' or pessoa.cpf ILIKE '%${cpf}%' or municipio.nome ILIKE '%${municipio}%' `)
      return response.json(a)
    }
      
  } 

  async buscada ({ request, response, view, send }) {
    
    const id = request.input('id_pessoa')
      const a = await Database.raw(`SELECT * from pessoa WHERE id_pessoa = '${id}' `)
      return response.json(a)
  }
  
  async ad({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('pessoa')
  .where('id_pessoa', b)
  .update({ acesso: 'false' })
  return response.json(a)
   }

  async da({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('pessoa')
  .where('id_pessoa', b)
  .update({ acesso: 'true' })
  return response.json(a)
   }


 

}

module.exports = PessoaController
