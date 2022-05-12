import Index from "../view/index";
import About from "../view/about";
import GetStart from "../view/getStart";
import Topic from "../view/topic";
import User from '../view/user/index';
import Undefined from '../view/404/index';
import {Navigate, useLocation} from "react-router-dom";
const types = ['all','good','share','job','dev']
const routers = [
    {
        path:'/',
        txt:'首页',
        element: <Index/>
    },
    {
        path:'/about',
        txt:'关于我们',
        element: <About/>
    },
    {
        path:'/user/username',
        txt:'用户中心',
        element:<User/>
    },
    {
        path:'/topic/:id',
        txt:'话题中心',
        element: <Topic/>
    },
    {
        path:'/getstart',
        txt:'新手入门',
        element: <GetStart/>
    },
    {
        path:'/404',
        element: <Undefined/>
    },
    {
        path:'*',
        element: <Navigate replace to='/404'/>
    }
];
const nav = [
    {
        name:'首页',
        to:'/'
    },
    {
        name:"新手入门",
        to:"/getstart"
    },
    {
        name:'话题中心',
        to:'/user/1'
    }
];
const indexNav = [
    {
        name:'全部',
        to:'/?tab=all'
    },
    {
        name:'精华',
        to:'/?tab=good'
    },
    {
        name:"分享",
        to:'/?tab=share'
    },
    {
        name:'招聘',
        to:'/?tab=job'
    },
    {
        name:"客户端测试",
        to:"/?tab=dev"
    }
]
export {routers,nav,indexNav,types};