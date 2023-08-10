import { View } from "react-native";
import { AddImage, ImageBlock, TipButton, ScrollFoodFields } from "../components"

const Home = () => (
  <>
    <View className="absolute top-[50px] right-[30px] z-[100]">
      <AddImage />
    </View>
    <View className="flex-1 flex-col">
      <ImageBlock />
      <View className="bg-zinc-300 rounded-t-[30px] py-3 z-50 flex-1 justify-start items-center flex-col">
        <TipButton />
        <ScrollFoodFields />
      </View>
    </View>
  </>
)

export default Home