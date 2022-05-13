import {useParams} from "react-router-dom";
import {useTopic} from "../../store/action";
import {Fragment, useEffect} from "react";
import {useSelector} from "react-redux";
import {Alert} from "antd";
import {useNavigate} from "react-router";
import Detail from './detail'
export default ()=>{
    let {id} = useParams();
    let getData = useTopic();
    const navigate = useNavigate();
    const {loading,data,isError,err_msg} = useSelector(state => state.topic);
    useEffect(()=>{
        getData(id);
    },[id]);
    return<div id='topic'>
            {isError?<Alert
                closable
                message={'请求失败'}
                type='error'
                description={
                    <Fragment>
                        <p>{err_msg}</p>
                        <p>点击关闭按钮返回上一步</p>
                    </Fragment>
                }
                afterClose={()=>{
                    navigate(-1);
                }}/>: <Fragment>
                        <Detail loading={loading} data={data}/>
                    </Fragment>}
        </div>
}