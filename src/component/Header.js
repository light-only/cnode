import {Affix, Col, Layout, Menu, Row} from "antd";
import {routers} from '../router/index'
import {Link, useLocation} from "react-router-dom";
const {Header} = Layout;

export default ()=>{
    const {pathname} = useLocation();
    // console.log(pathname);
    const activeIndex = routers.findIndex(item=>{
        return item.path === pathname;
    });
    return (
        <Affix
            offsetTop={0}
        >
            <Header id='header'>
                <div className='wrap'>
                    <Row>
                        <Col xs={6} ms={4} md={2}>
                            <h1 className='logo'><Link to='/'>logo</Link></h1>
                        </Col>
                        <Col
                            xs={18}
                            ms={20}
                            md={22}
                        >
                            <Menu mode='horizontal' theme='dark' defaultSelectedKeys={[activeIndex +'']}>
                                {routers.map((item,index)=>{
                                    return <Menu.Item key={index}><Link to={item.path}>{item.txt}</Link></Menu.Item>
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Header>
        </Affix>
    )
}