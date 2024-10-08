import styled from "styled-components";
import man from "../assets/img/man.png"
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`;
const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 50px;
    }
`;
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 60px;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;
const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    }
`;
const Button = styled.button`
    padding: 15px;
    background-color: #00ff99;
    color: black;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
        border: 2px solid white;
    }
`;
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;
const Phone = styled.span`
    color: black;
`;
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;
const Image = styled.img`
    margin-top: 85px;
    width: 100%;
`;

const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Explorations in the era of creativity</Title>
            <Desc>
            We believe that collaborating closely with our clients in the design of 
            products and services is the key to making a meaningful impact on their business.
            </Desc>
            <Info>
                <Button>Start A Project</Button>
                <Contact>
                    <Phone>Call Us (+251922434343)</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right><Image src={man}></Image></Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro;