import styled from "styled-components";

const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 5px 0px #00ff99;
    box-shadow: 0px 0px 5px 0px #00ff99;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 10px;
        padding: 10px;
    }
`;
const PriceContainer = styled.div`
    display:flex;
    align-items: center;
`;
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and (max-width: 480px) {
        font-size: 30px;
    }
`;
const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #00ff99;
    color: #888;
    font-weight: bold;
    background-color: white;
    border-radius: 20px;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;
const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 30px 0;
    @media only screen and (max-width: 480px) {
        margin: 10px;
        font-size: 14px;
    }
`;
const Button = styled.button`
    border: none;
    background-color: #00ff99;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        font-size: 14px;
        padding: 10px;
    } 
`;

const PriceCard = () => {
  return (
    <>
    <Container>
        <PriceContainer>
            $<Price>10</Price>/month
        </PriceContainer>
            <Type>Basic Plan</Type>
            <List>
                <ListItem>10 Hand Crafted Template</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>No PreBuilt Websites </ListItem>
                <ListItem>No Premium Plugins  </ListItem>{ " "}
            </List>
            <Button>Join Now</Button>
    </Container>
    <Container>
        <PriceContainer>
            $<Price>50</Price>/month
        </PriceContainer>
            <Type>Premium Plan</Type>
            <List>
                <ListItem>50 Hand Crafted Template</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites </ListItem>
                <ListItem>Premium Plugins  </ListItem>{ " "}
            </List>
            <Button>Join Now</Button>
    </Container>
    <Container>
        <PriceContainer>
            $<Price>100</Price>/month
        </PriceContainer>
            <Type>Advanced Plan</Type>
            <List>
                <ListItem>100 Hand Crafted Template</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites </ListItem>
                <ListItem>Premium Plugins  </ListItem>{ " "}
            </List>
            <Button>Join Now</Button>
    </Container>
    </>
  )
}

export default PriceCard;