import React from 'react';
import DataItem from './DataItem';

const DataList = ({list}) => {
    return list.map(({id, nome, email, disciplina, nota1, nota2, 
        situacao, senha, foto}) => (
            <DataItem 
                id={id}
                nome={nome}
                email={email}
                disciplina={disciplina}
                nota1={nota1}
                nota2={nota2}
                situacao={situacao}
                senha={senha}
                foto={foto}>
            </DataItem>
        ));
}

export default DataList;