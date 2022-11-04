import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    USER_DETAIL_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstans";



export const userLoginReducers = (state = { }, action) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true,}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducers = (state = { }, action) => {
    switch (action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true,}
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userDetailReducers = (state = { user: {}}, action) => {
    switch (action.type){
        case USER_DETAIL_REQUEST:
            return {...state, loading: true}
        case USER_DETAIL_SUCCESS:
            return {loading: false, user: action.payload}
        case USER_DETAIL_FAIL:
            return {loading: false, error: action.payload}
        case USER_DETAIL_RESET:
            return {user: {}}
        default:
            return state
    }
}

export const userUpdateProfileReducers = (state = { user: {}}, action) => {
    switch (action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true}
        case USER_UPDATE_PROFILE_SUCCESS:
            return {loading: false, success: true, userInfo: action.payload}
        case USER_UPDATE_PROFILE_FAIL:
            return {loading: false, error: action.payload}
        case USER_UPDATE_PROFILE_RESET:
            return {}
        default:
            return state
    }
}