import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './App.css';
import Header from './component/Header';
import ContactList from './component/ContactList';
import ContactFrom from './component/ContactForm';

const App = () => {
  return (
    <Wrapper>
            <ContactWrapper>
                <Header />
                <ContactList />
            </ContactWrapper>
            <ContactFrom />
        </Wrapper>
  );
}



const Wrapper = styled.div`
    ${({theme}) => theme.fontFamily.jua}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;
const ContactWrapper = styled.div`
    width: 400px;
    height: 700px;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
`;

export default App;