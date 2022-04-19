import React from 'react'
import { Anchor,Img  } from './styles'
export const Category = ({cover,path,emoji}) => {
  return (
    <Anchor href={path}>
        <Img src={cover}/>
        {emoji}
    </Anchor>
  )
}
