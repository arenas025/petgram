import React, { useState } from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import { Img, ImgWrapper, Button } from './styles'

export const PhotoCard = ({id, likes, src }) => {

    const likesState = likes

    const [amountLikes,setAmountLikes] = useState(likesState)

    // console.log(amountLikes)

    const handleLike = () => {
        setAmountLikes(amountLikes+1)
    }
    return (
    <article>
        <a href={`/detail/${id}`}>
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
        </a>
        <Button onClick={(handleLike)}> 
            <AiOutlineHeart/> 
            {amountLikes} Likes!
        </Button>
    </article>
)
}
