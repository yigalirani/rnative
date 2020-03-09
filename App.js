import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';

import {usePair} from './utils.js'
var pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};
function Thepic({count=200}){
    return <Image source={pic} style={{width: count%300, height: 110}}/>
}
function Tiker() {
    var [count,setCount]=useState(0);
    function tick(){
      setCount(count=>count+10)
    }
    useEffect(()=>{
        var timerID=setInterval(tick,10);
        console.log('setinterval',count)
        return function cleanup() {
            clearInterval(timerID);
            console.log('clearinterval')
        };
    },[]);
    return <><Thepic count={count}/><Text>{count}</Text></>
}
function Translator(){
    var text=usePair('the_text')
    return <>
        <TextInput
          style={{height: 40,backgroundColor:'white'}}
          placeholder="Type here to translate!"
          onChangeText={x => text.set(x)}
          value={text.val}
        />
       <Text style={{padding: 10, fontSize: 42}}>
          {text.val.split(' ').map((word) => word && '🍕').join(' ')}

      </Text>  
    </>    
  }
function Pressme(){
    return <Button
    onPress={() => {
    alert('You tapped the button!');
    }}
    title="Press Me"
    />
}

export default function App() {
  return (
  <View style={styles.container}>
      <Pressme/>
      <Translator/>
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
