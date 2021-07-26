import { useEffect, useReducer } from "react";
import Meals from "../MealItem/Meals";
import classes from "./MealsList.module.css"


const intialReducerObj = {
  meals: {
    price: 0, 
    description: "", 
    name: "", 
    id: 1
  },
  loading: false,
  error: false,
  loaded: false,
};

const mealsReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET-MEALS":
      return {
        ...state,
        meals: action.payload,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "LOADED":
      return {
        ...state,
        loaded: action.payload,
      };
    default:
      return intialReducerObj;
  }
};

const MealsList = () => {
  const [state, dispatch] = useReducer(mealsReducer, intialReducerObj);

  useEffect(() => {
    const getIntialMeals = async () => {
      try {
        dispatch({
          type: "LOADING",
          payload: true,
        });

        const req = await fetch(
          "https://food-app-a635f-default-rtdb.firebaseio.com/meals.json"
        );

        if (!req.ok) {
          throw new Error();
        }

        const res = await req.json();

        let loadedMeals = [];

        for (const key in res) {
          loadedMeals.push({
            id: key,
            name: res[key].name,
            price: res[key].price,
            description: res[key].description,
          });

  
          dispatch({
            type: "SET-MEALS",
            payload: loadedMeals,
          });
        }
        dispatch({
          type: "LOADED",
          payload: true,
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: error.message,
        });
      }
      dispatch({
        type: "LOADING",
        payload: false,
      });
    };

    getIntialMeals();
  }, []);

  let meals = state.loaded &&
        state.meals.map((meals) => {
          return <Meals key={meals.id} props={meals} />;
        })

  return (
    <div>
      {state.loading && <p className={classes.mealsLoading}>Loading...</p>}
      {state.error && <p className={classes.mealsError}> {state.error} </p>}
      {meals}
    </div>
  );
};

export default MealsList;
