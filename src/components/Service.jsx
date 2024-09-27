import styled from "styled-components";
import How from "../assets/img/How.png";
import MiniCard from "./MiniCard";
import Play from "../assets/img/Play.png";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    height: 100%;
`;
const Left = styled.div`
    width: 50%;
    position: relative;
`;
const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
`;
const Vedio = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`;
const Right = styled.div`
    width: 50%;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;

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

const Service = () => {
    const [open, setOpen] = useState(false);
  return (
    <Container>
        <Left>
            <Image open={open} src={How}/>
            <Vedio open={open} autoPlay loop controls src="https://www.youtube.com/watch?v=1Ut6RouSs0w"/>
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Desc>
                    We provide digital marketing solutions to help you reach more customers. 
                    We provide digital marketing solutions to help you reach more customers. 
                    And we are here to help you with your business reach more.
                    And we are here to help you with your business.
                </Desc>
                <CardContainer>
                    <MiniCard />
                    <MiniCard />
                    <MiniCard />
                </CardContainer>
                <Button onClick={()=>setOpen(true)}><Icon src={Play}/>How it works </Button>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service;