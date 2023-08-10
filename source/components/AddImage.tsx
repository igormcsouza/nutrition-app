import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AddImage = () => (
  <TouchableOpacity className="p-4 bg-emerald-500 rounded-lg" activeOpacity={0.5}>
    <MaterialCommunityIcons name="camera-plus" size={24} color="white"/>
  </TouchableOpacity>
)

export default AddImage