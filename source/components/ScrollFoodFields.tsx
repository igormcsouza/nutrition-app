import { ScrollView, View, Text } from 'react-native'

interface FoodField {
  percentage: number,
  foodType: string
}

const FoodField = ({ percentage, foodType }: FoodField) => (
  <View className="flex-1 flex-row justify-start items-center bg-zinc-200 w-[320px] h-14 rounded-lg gap-x-2 mb-2 px-3">
    <View className="bg-emerald-500 p-2 rounded-md">
      <Text className="text-lg font-semibold text-white">{percentage}%</Text>
    </View> 
    <Text className="text-lg capitalize">{foodType}</Text>
  </View>
)

export interface foodItem {
  food: string,
  percentage: number
}

interface ScrollFoodFields {
  foodList: foodItem[]
}

const ScrollFoodFields = ({ foodList }: ScrollFoodFields) => (
  <ScrollView className="flex-1 flex-col mt-5 w-full" showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}>
    {
      foodList.map((foodItem) => (
        <FoodField key={foodItem.food} foodType={foodItem.food} percentage={foodItem.percentage} />
      ))
    }
  </ScrollView>
)


export default ScrollFoodFields;
