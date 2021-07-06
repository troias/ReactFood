import React from "react";
import classes from "../MealList/MealsList.module.css";
import Card from "../../UI/Card/Card";
import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";

const Meals = (props) => {
  const { name, description, price, id } = props.props;

  return (
    <div className={classes.meals}>
      <Card>
        <div className={styles.meal}>
          <ul>
            <li>
              <div>
                <h3>{name}</h3>
                <div className={styles.description}>
                  <p>{description}</p>
                </div>
                <div className={styles.price}>
                  <h3>{`$${price.toFixed(2)}`}</h3>
                </div>
              </div>
            </li>
          </ul>
          <div className={styles[`vertical-center`]}>
            <MealItemForm id={id}/>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Meals;
