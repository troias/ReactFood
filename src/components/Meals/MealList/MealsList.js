import { useEffect, useReducer } from "react";
import Meals from "../MealItem/Meals";
import { DUMMY_MEALS } from "../../../dummyMeals";

const intialReducerObj = {
  meals: {

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
        meals: action.payload
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
          throw new Error("Something went wrong");
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

          console.log(loadedMeals)

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

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p> {state.error.message} </p>}
      {state.loaded && state.meals.map((meals) => {
        return <Meals key={meals.id} props={meals} />;
      })}
    </div>
  );
};

export default MealsList;
