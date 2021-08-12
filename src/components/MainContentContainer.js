import React from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom';


const Container = styled.div`
    height : 100%;
    width: ${({primary}) => (primary ? 'calc(100% - 55px)' : 'calc(100% - 357px)')};;
`;

const MainContentContainer = ({showMenu}) => {
    return (
        <Container>
          <h2>Here is second container</h2>  
        </Container>
    )
}

export default MainContentContainer
