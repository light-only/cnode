import {Card,Avatar} from 'antd'
import {useUserList} from "../../store/action";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import TopicsList from "../../component/TopicsList";
import FromNow from "../../component/FromNow";
import {UserOutlined} from "@ant-design/icons";
export default ()=>{
    let {loginname} = useParams();
    console.log(loginname)
    let getData = useUserList();
    useEffect(()=>{
        getData(loginname)
    },[loginname]);
    const {loading,data} = useSelector(state=>state.user);
    const {recent_replies,recent_topics,score,avatar_url,githubUsername, create_at} = data;
    return <div className='user_index'>
       <Card
           loading={loading}
           data={111}
           className='user_details'
       >
           <Avatar
             size={80}
             icon={<UserOutlined />}
             src={avatar_url}

           />
           <p style={{marginTop:20}}>用户名：{loginname} 注册时间：{<FromNow data={create_at}/>} 积分：{score}</p>
           <p>github：<a href={`https://github.com/${githubUsername}`} target={'_blank'}>https://github.com/{githubUsername}</a></p>
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