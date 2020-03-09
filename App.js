import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
function Thepic(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return <Image source={pic} style={{width: 193, height: 110}}/>
}
function Tiker() {
    var [count,setCount]=useState(0);

    useEffect(()=>{
        var timerID=setInterval(_=>setCount(count=>count+1) //setCount(count+1) wont work.after frw months: great comment!
            ,100);
        console.log('setinterval',count)
        return function cleanup() {
            clearInterval(timerID);
            console.log('clearinterval')
        };
    },[]);
    return <Text>{count}</Text>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Thepic/><Tiker/>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
