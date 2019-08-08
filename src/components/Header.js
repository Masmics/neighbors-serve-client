import React from 'react'; 
import {
  BrowserRouter as Router,
  Link 
} from 'react-router-dom';
// import styles from '../css/Header.css';

const button = {
  borderRadius: '28px', color: '3114cc', 
  backgroundColor: '#e0ff88', margin: '3px' 
};

const Header = () => (
  <>
    <header style={{ height: '122px', width: '100%', color: '#bbff00', 
      backgroundColor: 'black', display: 'inline-block' }}>
      <div>
        
        <div style={{ textAlign: 'left', verticalAlign: 'middle' }}>
          <Link to="/home" >
            <button type="button" style={button}><b>Sign In/Sign Up</b></button>
          </Link>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a>
            <Link to={'/'}>
              <img src="../../public/image/logomakr_829Z40.png" 
                alt="Neighbors title and logo: two stick figures lifting 
                a box together" style={{ height: '94px', lineHeight: '94px' }} />
            </Link>
          </a>
        </div>
      </div>
    </header>
  </>
);


// later:
{/* <div style={{ textAlign: 'right', marginBottom: '50px' }}>
<Link to="/" >
  <button type="button" style={button}><b>Back to Home</b></button>
</Link>
</div> */}

export default Header;
