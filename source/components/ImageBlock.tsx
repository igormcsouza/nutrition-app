import { View, Text, Image } from "react-native";

interface ImageBlock {
  imageUri: string
}

const ImageBlock = ({ imageUri }: ImageBlock) => (
  <View className="w-full bg-zinc-100 h-[50%] flex justify-center items-center z-1 -mb-10">
    {
      imageUri !== "" ?
        <Image source={{ uri: imageUri }} className="flex-1 w-full h-full"/> :
        <Text className="text-emerald-500 text-lg"> There is no Picture uploaded yet! </Text>
    }
  </View>
)

export default ImageBlock