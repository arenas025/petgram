import React from 'react'
import { Category } from '../Category'
import { List,ListItem } from './styles'
import {categories} from '../../../api/db.json'

export const ListOfCategory = () => {
console.log(categories)
    
    return (
    
    <List>
        {
        categories.map(category=>(
            <ListItem key={category.id}>
                <Category {...category}/>
            </ListItem>
        ))
    }
    </List>
)
}
