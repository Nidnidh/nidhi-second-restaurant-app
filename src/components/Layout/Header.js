// Header.js

import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css'; // Changed import name to 'classes'

const Header = (props) => {
   
    return (
        <Fragment>
         <header className={classes.header}> {/* Using 'classes' */}
                <h1>ReactMeals</h1>
                <HeaderCartButton />
             
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food" />
            </div>
        </Fragment>
    );
};

export default Header;
