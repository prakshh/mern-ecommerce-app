import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h1``
const List = styled.ul``
const ListItem = styled.li``

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F" >
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE" >
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023" >
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
        </Container>
    )
}

export default Footer
