import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const MainPage = () => {
    return (
      <div>
        <div className="h-16">
          {/* <Nav></Nav> */}
          <Nav></Nav>
        </div>
        <div className='min-h-[calc(100vh-116px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

MainPage.propTypes = {
    
};

export default MainPage;