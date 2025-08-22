import React,{useState}from 'react'
export default function Square({values,handleClick}){
  return(
       <div onClick={handleClick}>{values}</div>
  )
}