import axios from 'axios';
import {useDispatch} from "react-redux";

const http = axios.create({
    baseURL:"https://cnodejs.org/api/v1",
});

//获取主题列表数据
function useTopicsList(){
    let dispatch = useDispatch();
    return function (tab='all',page=1,limit=20,mdrender='true'){
        dispatch({
            type:'topics_loading'
        })
        http.get(`topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(res=>{
            dispatch({
                type:'topics_loadover',
                data:res.data.data
            })
        })
    }
}

//获取列表数据详情
function useTopic(){
    let dispatcth = useDispatch();
    return function (id){
        dispatcth({
            type:'topic_loading'
        })
        http.get(`/topic/${id}`).then(res=>{
            dispatcth({
                type:'topic_loadover',
                data:res.data.data
            })
        }).catch(res=>{
            // console.log(res.response.data.error_msg)
           dispatcth({
               type:'topic_err',
               err_msg:res.response.data.error_msg
           })
        })

    }
}
//获取用户数据详情
function useUserList(){
    let dispatch = useDispatch();
    return function (loginname){
        dispatch({
            type:'user_loading'
        });
        http.get(`/user/${loginname}`).then(res=>{
            dispatch({
                type:'user_loadover',
                data:res.data.data
            })
        }).then(res=>{
            dispatch({
                type:'user_error',
                error_msg:res.response.data.error_msg
            })
        })
    }
}

export {useTopicsList,useTopic,useUserList};