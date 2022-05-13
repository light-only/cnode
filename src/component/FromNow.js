import dayjs from 'dayjs'

export default (props)=>{
    let {data} = props;
    //fromNow,如果是dayjs则必须使用插件relativeTime否则会报错。
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    //修改语言为中文
    require('dayjs/locale/zh-cn');
    dayjs.locale('zh-cn');
    // console.log(dayjs().set('moment',0).fromNow());
    return dayjs(data).fromNow();
}