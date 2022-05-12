import {Button, Layout} from 'antd';
import {routers} from './router/index'
import { useSelector} from "react-redux";
import {Routes,Route,Navigate} from 'react-router-dom'
import Header from "./component/Header";
import Footer from './component/Footer';
import './static/css/index.less';
const {Content} = Layout;
function App() {
    // console.log(useSelector(state=>state));
  return (
      <div className='wrap'>
            <Layout className='page'>
                <Header>
                </Header>
                <Content>
                    <Routes>
                        {
                            routers.map((item,index)=>{return <Route path={item.path} element={item.element} key={index}/>})
                        }
                    </Routes>
                </Content>
                <Footer>
                </Footer>
            </Layout>
      </div>
  );
}

export default App;
