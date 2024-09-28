import styled from "styled-components";
import Search from "../assets/img/Search.png";

const Container = styled.div`
    width: 100px;
    margin-right: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #00ff99;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    cursor: pointer;    
    @media only screen and (max-width: 480px) {
        font-size: 14px;
        margin-right:5px;
        padding: 10px;
        width: 60px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 20px;
`;
const Text = styled.span`
    margin-top: 10px;
    text-align: center;
    color: #888;
`;

const MiniCard = () => {
  return (
    <>
    <Wrapper>
    <Container>
        <Image src = {Search}/>
        <Text>Digital Marketing</Text>
    </Container>
    <Container>
        <Image src = {Search}/>
        <Text>Brand Identities</Text>
    </Container>
    <Container>
        <Image src = {Search}/>
        <Text>Business Solutions</Text>
    </Container>
    <Container>
        <Image src = {Search}/>
        <Text>Business Consultancy</Text>
    </Container>
    </Wrapper>
    </>
  )
}

export default MiniCard;