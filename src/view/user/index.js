import {Card} from 'antd'
import {useUserList} from "../../store/action";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import TopicsList from "../../component/TopicsList";

export default ()=>{
    let {loginname} = useParams();
    console.log(loginname)
    let getData = useUserList();
    useEffect(()=>{
        getData(loginname)
    },[loginname]);
    const {loading,data} = useSelector(state=>state.user);
    const {recent_replies,recent_topics,score,avatar_url,create_at} = data;
    return <div className='user_index'>
       <Card
           loading={loading}
           data={111}
           title={'最近创建的话题'}
       >
       </Card>
        <Card
            loading={loading}
            type={"inner"}
            title={'最近创建的话题'}
        >
            <TopicsList
                data={recent_topics}
                isLoading={loading}
            />
        </Card>
        <Card
            loading={loading}
            data={recent_replies}
            title={'最近参与的话题'}
        >
            <TopicsList
                data={recent_replies}
                isLoading={loading}
            />
        </Card>
    </div>
}