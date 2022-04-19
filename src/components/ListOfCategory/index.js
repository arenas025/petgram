import React,{useState, useEffect} from 'react'
import { Category } from '../Category'
import { List,ListItem } from './styles'
import {categories} from '../../../api/db.json'


export const ListOfCategory = () => {

    const [isFixed, setIsFixed] =useState(false)

    useEffect (()=>{
        const handleFixed = e => {
            const Fixed = window.scrollY > 200
            isFixed !== Fixed && setIsFixed(Fixed)
        }
        document.addEventListener('scroll',handleFixed);
        return()=>document.removeEventListener('scroll',handleFixed)
    })

    const renderList = (fixed) =>{
        return(
        <List className={fixed?'fixed' : ''}>
        {
        categories.map(category=>(
            <ListItem key={category.id}>
                <Category {...category}/>
            </ListItem>
        ))
    }
    </List>)
    }


    return (
        <>
            {renderList()}
            {isFixed && renderList(true)}
        </>

)
}
