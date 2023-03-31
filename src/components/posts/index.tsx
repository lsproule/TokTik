import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Dimensions, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Video, {LoadError,OnLoadData, OnProgressData } from 'react-native-video';
import Slider from '@react-native-community/slider';
import video from '../../assests/video.mp4';
import trump from '../../assests/trump.mp4'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntD from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/FontAwesome"
import Fontisto from "react-native-vector-icons/Fontisto"
import Entypo from "react-native-vector-icons/Entypo"


const Post = () => {
  const [pause, setPause] = useState<boolean>(false);
  const [changed, setChanged] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [time, setTime]= useState<number>(currentTime)
  const [doubleTap, setDoubleTap] = useState(false)

  const onBuffer = (buffer: { isBuffering: boolean }) => {
  };
 
  const onLoad = (data: OnLoadData) => {
    setDuration(data.duration);
  };

  const onProgress = (data: OnProgressData) => {
    if (changed){
      data.currentTime=time
      setCurrentTime(time)
      setChanged(false)
      return
    }
    setCurrentTime(data.currentTime)
  
};
  const onSliderValueChange = (value: number) => {
    setChanged(true)
    setCurrentTime(value)
    setTime(value)
  };
  const [lastPress, setLastPress] = useState(0);
  const doublePressRef = useRef(false);

  const handlePress = () => {
    const currentTime = new Date().getTime();
    const delta = currentTime - lastPress;

    if (delta < 200) {
      doublePressRef.current = true;
      handleDoublePress()
    }
    setPause((value) => !value)
    setLastPress(currentTime);
  };

  const handleDoublePress = () => {
    if (doublePressRef.current) {
      console.log('Double Pressed');
      setDoubleTap(true)
      doublePressRef.current = false;
    }
  };
  return (
    <View tw="w-full" style={{}}>
      <TouchableWithoutFeedback
        className="relative"
        onPress={handlePress}
        >
        <View className='w-full h-full '>
        <Video className="absolute z-0  top-0 left-0 right-0 bottom-0  aspect-square "
         repeat={true}
         paused={pause}
         onError={(e:LoadError)=>console.error(e)} 
         source={trump}
         onBuffer={onBuffer}
         onLoad={onLoad}
         currentTime={time}
         resizeMode="stretch"
         onProgress={onProgress}
        />
        <Text className='text-white'>{Math.round(currentTime*10)/10}/{Math.round(duration*10)/10}</Text>
        <SideBar doubleTap={doubleTap} setDoubleTap={setDoubleTap}></SideBar>
        <BottomText currentTime={currentTime} duration={duration} onSliderValueChange={onSliderValueChange}></BottomText>
        </View>


      </TouchableWithoutFeedback>

    </View>
  );
};


const BottomText = ({currentTime, duration, onSliderValueChange}:{currentTime:number, duration:number, onSliderValueChange:(x:number)=>void})=> {
    const [icon, setIcon] = useState()
  useEffect(() => {
    const runner = async () => {
        await MaterialIcons.getImageSource('stop-circle', 5, 'white').then(setIcon)
    }
    runner()
    
    },[])
    return         <View style={{backgroundColor: 'rgba(0,0,0,0.4)'}}  className='mt-auto   h-16   w-full'>
            <View className='relative opacity-100 h-full w-full'>
             <View className='flex flex-row items-center' >
                <Entypo style={{marginTop:5, marginLeft:5}} name="note" color="white" ></Entypo>
                <Text className='text-white ml-1 mt-1'>presidentes</Text>
            </View>   
            <Slider
            className=''
        style={{position:"absolute", bottom:0, opacity:80, height:10, width:"100%" }}
        minimumValue={0}
        minimumTrackTintColor="#FFFFFF"
        thumbImage={icon}
        maximumValue={duration}
        value={currentTime}
        onValueChange={(val:number)=>onSliderValueChange(val)}
        ></Slider>
    
        </View>
</View>
}



const SideBar = ({doubleTap, setDoubleTap}:any)=> {
    return <View className='absolute w-20 right-0 gap-6 items-center h-96 top-[30%] bottom-30'>
            <View className='flex items-center'>
                <TouchableWithoutFeedback onPress={()=>setDoubleTap(false)}>
                    <AntD name='heart' color={doubleTap? "hotpink":"white"} size={35}></AntD>
                </TouchableWithoutFeedback>
                <Text className='text-white mt-2'>1.2M</Text>
            </View>
            <View className='flex items-center'>
                <Icon name="commenting" color="white" size={35}></Icon>
                <Text className='text-white mt-2'>13.7K</Text>
            </View>
            <View className='flex items-center'>
                <Icon name='bookmark' color="white" size={35}></Icon>
                <Text className='text-white mt-2'>225.2K</Text>
            </View>
            <View className='flex items-center'>
                <Fontisto name="share-a" color="white" size={35}></Fontisto>
                <Text className='text-white mt-2'>612.0K</Text>
            </View>
        </View>
}


export default Post;
