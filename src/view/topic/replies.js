import {Card, List, Comment, Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import FromNow from "../../component/FromNow";
import {Link} from "react-router-dom";

export default (props)=>{
    let {data,loading} = props;
    return (
        <Card
            title='评论列表'
            loading={loading}
        >
            <List
                dataSource={data}
                renderItem={(itemData)=>{
                    let {author,content,create_at} = itemData;
                    return <List.Item>
                    <Comment
                        author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
                        avatar={<Avatar
                            icon={<UserOutlined/>}
                            src={author.avatar_url}
                            title={author.loginname}
                        />}
                        content={<div
                            dangerouslySetInnerHTML={{
                                __html:content
                            }}
                        ></div>}
                        datetime={<time>发布于： {<FromNow data={create_at}/>}</time>}
                    ></Comment>
                    </List.Item>
                }}
                pagination={true}
            />

        </Card>
    )
}