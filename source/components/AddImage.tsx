import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface AddImage {
  handleOnPress: Function,
  disabled: boolean
}

const AddImage = ({ handleOnPress, disabled }: AddImage) => (
  <TouchableOpacity
    className="p-4 bg-emerald-500 rounded-lg"
    activeOpacity={0.5}
    onPress={(e) => handleOnPress()}
    disabled={disabled}
  >
    <MaterialCommunityIcons name="camera-plus" size={24} color="white"/>
  </TouchableOpacity>
)

export default AddImage