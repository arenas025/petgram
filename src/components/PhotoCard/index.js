import React, { useState, useEffect, useRef } from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import { Article,Img, ImgWrapper, Button } from './styles'

export const PhotoCard = ({id, likes, src }) => {

    const likesState = likes

    const [amountLikes,setAmountLikes] = useState(likesState)

    const handleLike = () => {
        setAmountLikes(amountLikes+1)
    }

    const ref = useRef('')

    const [isShown, setIsShown] = useState()

    useEffect(()=>{
            const observer = new window.IntersectionObserver((e)=>{
                const shown = e[0].isIntersecting
                shown && setIsShown (true)
            })
            observer.observe(ref.current)
    },[ref])

    console.log(isShown)

    return (
    <Article ref={ref}>
        {isShown ? (<a href={`/detail/${id}`}>
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
        </a>) : <></> }
        <Button onClick={(handleLike)}> 
            <AiOutlineHeart/> 
            {amountLikes} Likes!
        </Button>
    </Article>
)
}
