import {Tag} from "antd";
function setTag(tab){
    switch (tab){
        case 'good':
            return <Tag color='#550' className='topic_tag'>精华</Tag>
        case 'top':
            return <Tag color='#87d068' className='topic_tag'>置顶</Tag>
        case 'share':
            return <Tag color='green' className='topic_tag'>分享</Tag>
        case 'ask':
            return <Tag color='gold' className='topic_tag'>问答</Tag>
        case 'job':
            return <Tag color='blue' className='topic_tag'>招聘</Tag>
        case 'dev':
            return <Tag color='purple' className='topic_tag'>测试</Tag>
    }
}

export default (props)=>{
    let {tab} = props;
    return setTag(tab);
}