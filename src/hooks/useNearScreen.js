import { useEffect,useState,useRef } from "react"


export const useNearScreen = () => {
    const [isShown, setIsShown] = useState()

    const ref = useRef('')

    useEffect(()=>{
        const observer = new window.IntersectionObserver((e)=>{
            const shown = e[0].isIntersecting
            shown && setIsShown (true)
        })
        observer.observe(ref.current)
    },[ref])

    return [isShown,ref]
}
