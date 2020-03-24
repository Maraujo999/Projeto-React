import {all, put, takeEvery} from 'redux-saga/effects';

const URL = 'http://edsonbelemtreinamento.com.br/server-aluno/rs/aluno';
function* init(){
    console.log('Bem vindo ao React');
}
function* getData(){
    try{
        const data = yield fetch(URL + '/listar');
        const result = yield data.json();
        console.log(result);
        yield put({type: 'DATA_SUCCESS', data: result});
    }catch(e){
        yield put ({type: 'DATA_ERROR'});
    }
}
function* watcher(){
    yield takeEvery('DATA_REQUEST', getData);
}
export default function* root(){
    yield all([init(), watcher()]);
}