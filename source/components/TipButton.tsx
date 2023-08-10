import { TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TipButton = () => (
  <TouchableOpacity className="flex-1 flex-row justify-center items-center bg-emerald-500 w-[320px] max-h-12 rounded-lg gap-x-2" activeOpacity={0.5}>
    <MaterialCommunityIcons name="silverware-fork-knife" size={18} color="white" />
    <Text className="text-white text-lg">Here is a Tip!</Text>
  </TouchableOpacity>
)

export default TipButton
