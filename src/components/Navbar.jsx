import styled from "styled-components";

const Container = styled.div`
    height: 50px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.h1`
    color: #1c1c22;
    font-weight: bold;
    text-decoration: underline #00ff99;
    //hover: #00e187
`;
const Menu = styled.ul`
    display: flex;
    list-style: none;
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    hover: #00e187;
`;
const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: #00ff99;
    font-size: 16px;
    color: black;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Agency</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Left>
            <Button>Join Now!</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar;