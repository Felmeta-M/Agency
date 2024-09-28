import styled from "styled-components";
import Map from "../assets/img/map.png";
import Phone from "../assets/img/phone.png";
import Send from "../assets/img/send.png";

const Container = styled.div`
    height: 90%;
    background-color: #f1f1f1;
`;
const Wrapper = styled.div`
    height: 90%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const FormContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;
const Title = styled.h1`
    margin: 50px 110px;
    margin-top: 0;
    @media only screen and (max-width: 480px) {
        margin: 20px;
        margin-top: 0;
        margin-left: 50px;
    }
`;
const Form = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        margin-right: 0;
        height: 50%;
    }
`;
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        height: 50%;
    }
`;
const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        padding: 5px;
    }
`;
const TextArea = styled.input`
    width: 200px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        margin-top: 20px;
    }
`;
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: #00ff99;
    color: black;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        font-size: 16px;
    }
`;
const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-top: 20px;
    }
`;
const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;
const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        width: 15px;
    }
`;
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>Any Questions? <br /> Lets Get in Touch</Title>
                <Form>
                <LeftForm>
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" />
                    <Input placeholder="Your Subject" />
                </LeftForm>
                <RightForm>
                    <TextArea placeholder="Your Message" />
                    <Button>Send</Button>
                </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Icon src={Map} />
                    <Text>Arada, Addis Ababa, Ethiopia</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone} />
                    <Text>+251924193212</Text>
                    <Text>+251935117912</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send} />
                    <Text>c@agent.dev</Text>
                    <Text>s@agency.dev</Text>
                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact;