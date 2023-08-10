import { foodItem } from "./components/ScrollFoodFields";

export function itContains(foodList: foodItem[], shoudlContain: string) {
  for (const item of foodList) {
    if (item.food.toLowerCase() === shoudlContain.toLowerCase()) {
      return true
    }
  }

  return false
}