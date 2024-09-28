import styled from "styled-components";
import How from "../assets/img/How.png";
import MiniCard from "./MiniCard";
import Play from "../assets/img/Play.png";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    height: 100%;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;
const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
    width: 73%;
`;
const Vedio = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;
const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        padding: 20px;
        align-items: center;
    }
`;
const Title = styled.h1`
    font-size: 70px;
    @media only screen and (max-width: 480px) {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;
const Desc = styled.p`
    font-size: 20px;
    color: #888;
    margin-top:20px;
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;
const Button = styled.button`
    width: 180px;
    border: none;
    background-color: #00ff99;
    color: black;
    font-size: 20px;
    padding: 15px;
    border-radius: 10px;
    margin-top: 50px;
    display: flex;
    align-items: center;
`;
const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`;
const Modal = styled.div`
    width: 100vh;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
`;
const CloseButton = styled.button`
    position: absolute;
    background-color: #00ff99;
    padding: 10px;
    border: none;
    border-radius: 5px;
    top: 27%;
`;

const Service = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
        <Left>
            <Image open={open} src={How}/>
            <Vedio open={open} autoPlay loop controls src="https://www.youtube.com/watch?v=1Ut6RouSs0w"/>
        </Left>
        <Right>
            <Wrapper>
                <Title>Easy steps to get started</Title>
                <Desc>
                We offer digital marketing solutions designed to expand your 
                customer base and grow your business. Our team is here to support 
                you in reaching a wider audience and achieving your goals.
                </Desc>
                <Desc>
                Our dedicated team is committed to supporting your business`s growth, 
                ensuring you achieve your goals and expand your market reach effectively.
                </Desc>
                <CardContainer>
                    <MiniCard />
                </CardContainer>
                <Button onClick={()=>setOpen(true)}><Icon src={Play}/>How it works </Button>
            </Wrapper>
        </Right>
        {smallScreen && open && 
        <Modal>
            <Vedio 
                open={open} 
                autoPlay 
                loop 
                controls 
                src="https://www.youtube.com/watch?v=1Ut6RouSs0w"
            />
            <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>}
    </Container>
  )
}

export default Service;