import React,{useState,useEffect } from "react";
function Pair([val,set_value]){
    function set(x){
      console.log('set:'+val+'->'+x)
      set_value(x)
    }
    function append(x){
        set_value(val.concat([x]))
    }
    function toggle(){
        set_value(!val)
    } 
    return {val,set,append,toggle}
}
export function usePair(init){
  return Pair(useState(init))
}