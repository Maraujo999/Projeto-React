import React from 'react';
import {Container, Spinner} from 'react-bootstrap';
import {connect} from 'react-redux';
import DataList from './DataList';
const MapStateToProps = state => {
    return{
        data: state.jsonData.data,
        isLoading: state.jsonData.isLoading
    }
}
const DataContainer = ({ data, isLoading })=> {
    return (
        <Container>
            { isLoading ? (
                <Spinner animation='border' role='status'></Spinner>
            ) : (
                <div className='row'>
                    <DataList list={data}></DataList>
                </div>
            ) }
        </Container>
    )
}

export default connect(MapStateToProps)(DataContainer);
