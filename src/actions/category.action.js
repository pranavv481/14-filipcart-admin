import axiosInstance from "../helpers/axios";
import { categoryConstant } from "./constants";

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({
            type: categoryConstant.GET_ALL_CATEGORIES_REQUEST
        })
        const res = await axiosInstance.get('category/getCategory');
        console.log(res)
        if (res.status == 200) {
            const { categoryList } = res.data
            dispatch({
                type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            })
        } else {
            dispatch({
                type: categoryConstant.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

export const addCategory = (form) =>{
    return async dispatch =>{
        dispatch({type:categoryConstant.ADD_NEW_CATEGORY_REQUEST});
        const res = await axiosInstance.post(`/category/create`, form);
        console.log(res)
        if(res.status==201){
            dispatch({
                type:categoryConstant.ADD_NEW_CATEGORY_SUCCESS,
                payload: {category: res.data.category}
            })
        } else{
            dispatch({
                type:categoryConstant.ADD_NEW_CATEGORY_FAILURE,
                payload: res.data.error
            })
        }
    }
}