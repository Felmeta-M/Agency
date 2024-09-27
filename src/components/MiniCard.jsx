import styled from "styled-components";
import Search from "../assets/img/Search.png";

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover{
        box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
        transform: scale(1.1);
    }
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
    <Container>
        <Image src = {Search}/>
        <Text>Lorem dolor sit amet consecutor.</Text>
    </Container>
  )
}

export default MiniCard;