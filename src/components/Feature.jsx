import styled from "styled-components";
import App from "../assets/img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`;
const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;
const Image = styled.img`
    width: 76%;
`;
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        // align-items: center;
        justify-content: center;
    }
`;
const Title = styled.span`
    font-size: 70px;
    @media only screen and (max-width: 480px) {
        font-size: 50px;
    }
`;
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #999;
    margin-top: 30px;
    font-weight: bold;
`;
const Desc = styled.p`
    font-size: 20px;
    color: #999;
    margin-top: 30px;
`;
const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: #00ff99;
    color: black;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        border: 2px solid white;
        margin-top: 70px;
        margin-left: 100px;
    }
`;

const Feature = () => {
  return (
    <Container>
        <Left><Image src={App}/></Left>
        <Right>
            <Title>
                <b>good</b> design
                <br />
                <b>good</b> business
            </Title>
            <SubTitle> We know that good design means good business.</SubTitle>
            <Desc>
            We help our clients succeed by developing brand identities, digital experiences, 
            and print materials that convey messages clearly, meet marketing objectives, and look amazing.
            </Desc>
            <Desc>
            We care about your business and guarantee success in achieving your marketing goals.
            </Desc>
            <Desc>
            Our goal is to help your business grow and reach a wider audience.
            </Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature;