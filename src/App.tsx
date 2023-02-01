import 'antd/dist/reset.css';
import { Button, Col, Row } from 'antd';
import './App.scss';
import { Header } from 'antd/es/layout/layout';
import HeaderStore from './components/header/HeaderStore';
import ContentStore from './components/content/ContentStore';


function App() {
  
  

  return (
    <>
      <HeaderStore />
      <ContentStore />
    </>
  );
}

export default App;
