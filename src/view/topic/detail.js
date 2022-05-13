import {Card} from "antd";
import {Fragment} from "react";
import TopicsTag from "../../component/TopicsTag";
import {Link} from "react-router-dom";
import FromNow from "../../component/FromNow";
import Replies from "./replies";
export default (props)=>{
    let {loading,data} = props;
    let {author,content,create_at,good,top,tab,visit_count} = data;
    return <>
        <Card
            loading={loading}
            title={<Fragment>
                <h1><TopicsTag tab={top?'top':(good?'good':tab)}/>{111}</h1>
                <p>-作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link> - 创建时间：<FromNow data={create_at}/> - 浏览人数:{visit_count}</p>
            </Fragment>}
            type='inner'
        >
            <div
                dangerouslySetInnerHTML={{
                    __html:content
                }}
            >
            </div>
        </Card>
        <Replies data={data.replies} loading={loading}/>
    </>
}