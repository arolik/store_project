import 'antd/dist/reset.css';
import './App.scss';
import HeaderStore from './components/header/HeaderStore';
import ContentStore from './components/content/ContentStore';
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from './store/hooks';
import { changeStatusLogin } from './store/appSlice';
import { token } from './components/assets/vars';


const App = () => {

  const isLogin = useAppSelector(state => state.appSlice.isLogin);
  const dispatch = useAppDispatch();
  
  

    return (
        <>
          <HeaderStore />
          <ContentStore />
        </>
    );
}

export default App;
