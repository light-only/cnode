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
    let {tab,page} = qs.parse(search.substr(1));
    let getData = useTopicsList();
    useEffect(()=>{
        getData(tab,page);
    },[tab,page])
    return <>
        <IndexNav/>
        <TopicsList data={data} isLoading={loading}/>
        <IndexPagination/>
    </>
}