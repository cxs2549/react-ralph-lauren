import styled from "styled-components"

const HeroWrap = styled.div`
    background-image: url(${props => props.hero});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 90vh;
    width: 100%;
`

const Hero = ({hero}) => {
    return <HeroWrap hero={hero}></HeroWrap>
}

export default Hero
