import { FETCHREQUEST, FETCHSUCCESS, FETCHFAILURE} from './action'; 
const initialState = {
    recipes: [],
    loading: false,
    error: null,
    recipe: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHREQUEST:
            return { ...state, loading: true, error: null, recipe: null };
        case FETCHSUCCESS:
            return { ...state, recipes: action.payload, loading: false, error: null, recipe: action.payload };
        case FETCHFAILURE:
            return { ...state, loading: false, error: action.payload, recipe: null };
        default:
            return state;
    }
};

export default reducer;
