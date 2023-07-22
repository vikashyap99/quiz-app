import { useScrollTrigger } from "@mui/material"
import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import ScorePage from "@/Components/Score"

const Wrapper  = styled.div`

    background: blueviolet;
    width: 100vw;
    height: 100vh;
    padding-top: 15vh;

`

export default function Score(){

    const [score, setScore] = useState(0)

    useEffect(() => {
        const score = localStorage.getItem('score')
        setScore(score)
    }, [])

    return(
        <Wrapper>
            <ScorePage score={score} />
        </Wrapper>
    )

}