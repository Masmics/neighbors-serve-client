import React from 'react'; 
import { Link } from 'react-router-dom';

const button = {
  borderRadius: '100px', backgroundColor: 'black', fontSize: '11px',
  padding: '12px 4px 12px 4px', border: '2.5px solid #8274cd', color: '#bbff00', margin: '5px'
};

const Header = () => (
  <>
    <header style={{ height: '122px', width: '100%', color: '#bbff00', 
      backgroundColor: 'black', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center' }}>
        
      <div>
        <Link to="/home" >
          <button type="button" style={button}>
            <b>
              <div>  Sign In/  </div>
              <div>  Sign Up  </div>
            </b>
          </button>
        </Link>
      </div>

      <div>
        <Link to={'/home'}>        
          <img src="../../assets/logomakr_829Z40.png" alt="Neighbors title and logo: two stick 
            figures lifting a box together" style={{ height: '94px', lineHeight: '94px' }} />
        </Link>
      </div>

      <div>
        <Link to={'/'}>
          <img src="../../assets/LogoMakr_72c7g0.png"  style={{ height: '60px', margin: '5px' }} />
        </Link>
      </div>

    </header>
  </>
);

export default Header;
