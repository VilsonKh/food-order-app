import PromoText from "./PromoText";
import MealsList from "./MealsList";
import React from "react"

const Meals = (props) => {
  return (
    <React.Fragment>
      <PromoText></PromoText>
      <MealsList></MealsList>
    </React.Fragment>
  )
}

export default Meals;