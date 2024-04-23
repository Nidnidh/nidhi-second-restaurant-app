import classes from './AvailableMeals.module.css';


const DUMMY_MEALS = [
    
  ];

  const AvailabeMeals = () =>
  {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
    return <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
  };

  export default AvailabeMeals;