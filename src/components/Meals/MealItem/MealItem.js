import MealItemFrom from './MealItemFrom';
import classes from './MealItem.module.css';
const MealItem = props => {
   // eslint-disable-next-line no-unused-vars
   const price = `$${props.price.toFixed(2)}`;


    return (
        <li className = {classes.meal}>
        <div><h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div>{price}</div>

        </div>
        <div>
            <MealItemFrom />
        </div>
    </li>
    )
    
};
export default MealItem;