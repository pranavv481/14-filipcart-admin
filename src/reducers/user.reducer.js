import { userConstant } from "../actions/constants"

const initialState = {
    error: null,
    message: '',
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case userConstant.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userConstant.USER_REGISTER_SUCCESS:
            state = {
                loading: false,
                message: action.payload.message
            }
            break;
        case userConstant.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
    }
    return state
}