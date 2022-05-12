import axios from 'axios';
import {useDispatch} from "react-redux";

const http = axios.create({
    baseURL:"https://cnodejs.org/api/v1",
});

//获取主题列表数据
function useTopicsList(){
    let dispatch = useDispatch();
    return function (tab='all',limit=20,page=1,mdrender='true'){
        dispatch({
            type:'topics_loading'
        })
        http.get(`topics?tab=${tab}&limit=${limit}&page=${page}&mdrender=${mdrender}`).then(res=>{
            dispatch({
                type:'topics_loadover',
                data:res.data.data
            })
        })
    }
}

export {useTopicsList};