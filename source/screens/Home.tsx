import { useState } from "react";
import { Alert, View } from "react-native";

import { AddImage, ImageBlock, TipButton, ScrollFoodFields, Loading } from "../components"
import { foodItem as foodItemInterface } from "../components/ScrollFoodFields";
import { api } from '../services'
import { itContains } from "../utils";

import * as ImagePicker from "expo-image-picker"
import * as ImageManipulator from "expo-image-manipulator"

const Home = () => {
  const [imageUri, setImageUri] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [foodList, setFoodList] = useState([] as foodItemInterface[])
  const [tip, setTip] = useState("Here is a Tip!")

  async function handleAddImage() {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (status !== ImagePicker.PermissionStatus.GRANTED){
        return Alert.alert("It's necessary to give permission to access the Media!")
      }

      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        allowsMultipleSelection: false
      })

      if (response.canceled) {
        console.log("User canceled the operation.")
        return
      }

      setIsLoading(true)

      const image = await ImageManipulator.manipulateAsync(
        response.assets[0].uri,
        [{ resize: { width: 900 } }],
        {
          compress: 1,
          format: ImageManipulator.SaveFormat.JPEG,
          base64: true
        }
      )

      setImageUri(image.uri)
      const foodDetected = await fetchDetection(image.base64)

      const foodList = foodDetected.concepts.map((concepts: any) => {
        return {
          food: concepts.name,
          percentage: Math.round(concepts.value * 100)
        }
      })

      setFoodList(foodList.filter((element: foodItemInterface) => element.food !== 'no person'))
 
      if (!itContains(foodList, "vegetable")) {
        setTip("Bring more vegetables!")
      }

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchDetection(imageB64: string | undefined) {
    const MODEL_ID = "general-image-recognition"
    const MODEL_VERSION = "aa7f35c01e0642fda5cf400f543e7c40"

    const response = await api.post(`/v2/models/${MODEL_ID}/versions/${MODEL_VERSION}/outputs`, {
      user_app_id: {
        user_id: process.env.EXPO_PUBLIC_CLARIFAI_USER_ID,
        app_id: "nutrition-app"
      },
      inputs: [
        {
          data: {
            image: {
              base64: imageB64
            }
          }
        }
      ]
    })

    return response.data.outputs[0].data
  }

  return (
    <>
      <View className="absolute top-[50px] right-[30px] z-[100]">
        <AddImage handleOnPress={handleAddImage} disabled={isLoading}/>
      </View>
      <View className="flex-1 flex-col">
        <ImageBlock imageUri={imageUri} />
        <View className="bg-zinc-300 rounded-t-[30px] py-3 z-50 flex-1 justify-start items-center flex-col">
        {
          isLoading ? 
            <Loading /> :
            <>
              <TipButton message={tip} />
              <ScrollFoodFields foodList={foodList} />
            </>
        }
        </View>
      </View>
    </>
  )
}

export default Home