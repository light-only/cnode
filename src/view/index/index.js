import IndexNav from "./indexNav";
import TopicsList from "../../component/TopicsList";
import {useSelector} from "react-redux";
import {useTopicsList} from "../../store/action";
import {useCallback, useEffect} from "react";
import {useLocation} from "react-router-dom";
import qs from 'qs'
import IndexPagination from "./indexPagination";
export default (props)=>{
    let {data,loading} = useSelector(state=>state.topics);
    let {search} = useLocation();
    let {tab='all',page=1} = qs.parse(search.substr(1));
    let getData = useTopicsList();
    useEffect(()=>{
        getData(tab,page);
    },[tab,page])
    return <>
        <IndexNav/>
        <TopicsList data={data} isLoading={loading}/>
        {/*<IndexPagination/>*/}
        {/*分页存在一个bug，当全部页面在3的时候，跳转导航菜单到精华页面还是保留在3，可以通过loading的方式，重新渲染页面.*/}
        {loading?'': <IndexPagination/>}
    </>
}