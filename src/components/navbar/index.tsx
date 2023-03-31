import {ReactNode} from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const NavBar = () => {
  return (
    <View style={{flex:.1}} className="  flex flex-row justify-around items-center w-full h-full   bg-black">
      <View>
        <Entypo
          color={'white'}
          size={30}
          name="home"
        />
        <Text className="text-white text-xs">Home</Text>
      </View>
      <View>
        <Ionicons
          color={'white'}
          size={30}
          name="people"
        />
        <Text className="text-white text-xs">Friends</Text>
      </View>
      <View className="bg-red-500 max-h-10 pl-1 rounded-xl">
        <View className="bg-blue-400 pr-1 rounded-xl">
          <View className="bg-white rounded-xl flex justify-center items-center h-10 w-12">
            <Ionicons name="add" color={"black"} size={30}></Ionicons>
          </View>
        </View>
      </View>

      <View>
        <Entypo
          color={'white'}
          size={30}
          name="message"
        />
        <Text className="text-white text-xs">Inbox</Text>
      </View>

      <View>
        <Ionicons
          color={'white'}
          size={30}
          name="person"
        />
        <Text className="text-white text-xs">Profile</Text>
      </View>
    </View>
  );
};

export default NavBar;
