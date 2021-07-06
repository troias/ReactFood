import React from "react";
import Meals from "../MealItem/Meals";
import { DUMMY_MEALS } from "../../../dummyMeals";


const MealsList = () => {

  return (
    <div>
      {DUMMY_MEALS.map((meals) => {
        return (
              <Meals key={meals.id} props={meals} />
        )
      })}
    </div>
  );
};

export default MealsList;
