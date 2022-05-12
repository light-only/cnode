import {Menu} from "antd";
import {indexNav} from "../../router";
import {Link, useLocation, useParams} from "react-router-dom";
import {types} from "../../router";
import qs from 'qs';
export default ()=>{
    const {search} = useLocation();
    const {tab} = qs.parse(search.substr(1));
    let activeIndex = tab === undefined?0:(types.indexOf(tab));
    return <Menu mode='horizontal' defaultSelectedKeys={[activeIndex +'']} className='index_nav'>
        {
            indexNav.map((item,index)=>{
                return <Menu.Item key={index}><Link to={item.to}>{item.name}</Link></Menu.Item>
            })
        }
    </Menu>
}