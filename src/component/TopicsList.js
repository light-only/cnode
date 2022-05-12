import {Avatar, Col, List} from "antd";
import {Link} from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import TopicsTag from "./TopicsTag";
import dayjs from 'dayjs'
//fromNow,如果是dayjs则必须使用插件relativeTime否则会报错。
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
//修改语言为中文
require('dayjs/locale/zh-cn');
dayjs.locale('zh-cn');
console.log(dayjs().set('moment',0).fromNow());
export default (props)=>{
    const {data,isLoading} = props;
    return (
        <>
            <List
                className='topics_list'
                dataSource={data}
                loading={isLoading}
                renderItem={data => {
                    // console.log(data);
                    let {author,last_reply_at,good,top,tab,title,id} = data;
                    let {loginname,avatar_url} = author;
                    return <List.Item>
                        <Col
                            xs={22}
                            sm={20}
                        >
                            <Link to={`/user/${loginname}`}>
                            <Avatar
                                icon={<UserOutlined />}
                                src={avatar_url}
                                title={loginname}
                            />
                            </Link>
                            <TopicsTag
                                tab={top?'top':(good?'good':tab)}
                            />
                            <Link to={`/topic/${id}`}>{title}</Link>
                        </Col>
                        <Col
                            xs={2}
                            sm={4}
                            className='topic_date'
                        >
                            {dayjs(last_reply_at).fromNow()}
                        </Col>
                    </List.Item>
                }}
            >

            </List>
        </>
    )
}


