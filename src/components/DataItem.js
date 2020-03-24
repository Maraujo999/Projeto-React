import React, {Fragment} from 'react';
const DataItem =
({id, nome, email, disciplina, situacao, nota1, nota2, senha, foto})=>(
  <Fragment>
      <div className='col-md-6'>
          <div className='card mb-2 shadow'>
              <div className='card-header'>
                <h5>Nome: {nome}</h5>
              </div>  
    <div className='card-body'>
        <div className='row'>
            <div className='col-md-4'>
                <img src={foto} className="img-thumbnail shadow" />
            </div>
            <div className='col-md-8'>
                <b>Id:</b> {id}<br/>
                <b>Email:</b> {email}<br/>
                <b>Disciplina:</b> {disciplina}<br/>
                <b>Nota1:</b> {nota1}<br/>
                <b>Nota2:</b> {nota2}<br/>
                <b>Situacao:</b> {situacao}<br/>
                <b>Senha:</b> {senha}<br/>
            </div>
        </div>
    </div>
    </div>
    </div>
        </Fragment>
)
export default DataItem;
