import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Article, Img, ImgWrapper, Button } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

export const PhotoCard = ({ id, likes, src }) => {
  const likesState = likes

  const key = `like-${id}`

  const [liked, setLiked] = useLocalStorage(key, false)
  const [isShown, ref] = useNearScreen()

  const [amountLikes] = useState(likesState)

  return (
    <Article ref={ref}>
      {isShown
        ? (<a href={`/detail/${id}`}> <ImgWrapper> <Img src={src} /> </ImgWrapper> </a>)
        : <></>}
      <Button onClick={() => { setLiked(!liked) }}>
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        {amountLikes} Likes!
      </Button>
    </Article>
  )
}
