import React , {useState}from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom';
import Home from '../pages/dashPages/Home';


const Container = styled.div`
    height : 100%;
    width: ${({primary}) => (primary ? 'calc(100% - 360px)' : 'calc(100% - 55px)')};;
    border: 2.5px solid #7A838C;
    border-radius: 3px;
`;



const MainContentContainer = ({showMenu}) => {
    const [hovered, setHovered] = useState(null)
    return (
        <Container
            primary={showMenu}>
                <Home />
          
        </Container>
    )
}

export default MainContentContainer

/*
 width: ${({primary}) => (primary ? 'calc(100% - 55px)' : 'calc(100% - 357px)')};;

 color: #9FA2B4;
**/
