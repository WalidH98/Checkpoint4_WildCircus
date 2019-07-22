import { FETCH_PRODUCTS, FETCH_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from '../types/product';

const initialState = {
    product:[],
    currentProduct:{}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_PRODUCTS:
        return { ...state, product: [...payload] };

        case FETCH_PRODUCT:
        return { ...state, product:payload };

    default:
        return state;
    }
};