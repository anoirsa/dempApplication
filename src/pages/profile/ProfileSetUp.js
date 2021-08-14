import React from 'react';
import styled, { css } from 'styled-components/macro'
import LogoImageSource from '../images/klablogo.png';
import { customInputFieldStyle, customInputStyle } from '../SharedStyles';
const Container = styled.div`
    width: 100%;
    height: 100vh;

`;

const TopBar = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
`;
const Image = styled.img`
     height: 50px;
     width: 200px;
     object-fit: contain;
     margin-right: 10px;
`;

const BottomSection = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    
`;

const LeftColumn = styled.div`
    flex:2;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
   
`;

const RightColumn = styled.div`
    flex:1;
    width:100%;
    border-left: 1px solid black;
    padding: 10px;
`;

const InputField = styled.div`
    ${customInputFieldStyle}
    width: 100%;
    margin-bottom: 25px;
    p {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 500;
    }
    

`;
const Input = styled.input`
    ${customInputStyle}
    width: 100%;
    height: 35px;
    border-radius: 3px;
    border:1px solid #7A838C;
`;

const WrapperRight = styled.div`
    display: flex;
    min-width: 420px;
    max-width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;

    h3 {
        color: #ED9400;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 30px;

    }


`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 0 10px;
`;

const CheckBox = styled.input`
    width: 20px;
    height: 24px;
    border-radius: 0px;
    margin-right: 15px;
`;

const CheckBoxSection = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    p {
        font-size: 18px;
        color:#455263;
    }

    a {
        color : #89B6E1;
        cursor: pointer;
    }


`;

const OutsidePuts = styled.div`
    padding-left: 10px;
    font-weight: 300;
    color: #7A838C;

    h4 {
        font-size: 18px;
        font-weight: 500;
    }
`;

const ChechBoxes = styled.div`
    display: flex;
    gap : 10px;
    justify-content: flex-start;
    align-items: center;
`;
const ProfileSetUp = () => {
    return (
        <Container>
            <TopBar>
                <Image
                    src={LogoImageSource} />
                <hr style={{ width: '100%', position: 'absolute', bottom: '0' }} />
            </TopBar>
            <BottomSection>
                <LeftColumn>
                    <form>
                        <WrapperRight>
                            <h3>Let's set up your profile:</h3>
                            <Inputs>
                                <InputField>
                                    <p>First name : </p>
                                    <Input type="text" />
                                </InputField>

                                <InputField>
                                    <p>Last name : </p>
                                    <Input type="text" />
                                </InputField>
                                <InputField>
                                    <p>Username: </p>
                                    <Input type="text" />
                                </InputField>
                                <InputField>
                                    <p>Phone number: </p>
                                    <Input type="text" />
                                </InputField>
                                <OutsidePuts>
                                    <h4>I would like to register as :</h4>
                                    <ChechBoxes>
                                        <CheckBoxSection>
                                            <CheckBox type="checkbox" />
                                            <p>Data scientist</p>
                                        </CheckBoxSection>
                                        <CheckBoxSection>
                                            <CheckBox type="checkbox" />
                                            <p>Software engineer</p>
                                        </CheckBoxSection>
                                    </ChechBoxes>

                                </OutsidePuts>
                            </Inputs>

                        </WrapperRight>
                    </form>
                </LeftColumn>

                <RightColumn>

                </RightColumn>

            </BottomSection>


        </Container>
    )
}

export default ProfileSetUp
