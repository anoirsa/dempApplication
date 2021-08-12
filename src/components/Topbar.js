import React from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom';
import Kandralogo from './images/klablogo.png';



const Container = styled.div`
    position: sticky;
    height: 70px;
    width: 100%;
    display: flex;
    padding:10px;
    justify-content:flex-start;
    align-items: center;
    margin-bottom: 5px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    .img--link {
        text-decoration: none;
    }
    img {
        height: 50px;
        width: 200px;
        object-fit: contain;
    }
`;

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Link className="img--link">
                    <img src={Kandralogo} />
                </Link>
    

            </Wrapper>
            
        </Container>
    )
}

export default Topbar
