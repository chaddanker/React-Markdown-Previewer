export default (state = '', action) => {
    switch(action.type){
        case 'PREVIEW': return action.payload;
        default: return state;
    }
};