import 'antd/dist/reset.css';
import './App.scss';
import HeaderStore from './components/header/HeaderStore';
import ContentStore from './components/content/ContentStore';

const App = () => {

    return (
        <>
          <HeaderStore />
          <ContentStore />
        </>
    );
}

export default App;
