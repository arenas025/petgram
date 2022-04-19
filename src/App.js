import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import {SvgComponent} from './components/Logo'

export const App = () => {
  return (
    <>
    <SvgComponent/>
    <ListOfCategory/>
    <ListOfPhotoCard/>
    </>
  )
}
