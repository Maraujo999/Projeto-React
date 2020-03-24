const initialState = {
    data : [],
    isError: false,
    isLoading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case 'DATA_REQUEST':
            return {
                ...state, isLoading:true, isError:false
            }
        case 'DATA_SUCCESS':
            return {
                ...state, isLoading:false, isError: false,
                data: [...state.data, ...action.data]
            }
        case 'DATA_ERROR':
            return {
                ...state, isLoading:false, isError: true,
                data: []
            }
        default:
            return state;
    }
};