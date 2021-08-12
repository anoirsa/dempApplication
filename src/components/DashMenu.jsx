import React from 'react'
import './DashMenu.css';
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom';

const UserProfileBox = styled.div`
    width: 100%;
    height: 68px;
    -webkit-box-shadow: 0px 12px 26px 1px rgba(94,94,94,0.4); 
    box-shadow: 0px 12px 26px 1px rgba(94,94,94,0.4);
    z-index: 4;
    display: flex;
    gap:5px;
    padding: 7px;

    .status--container {
        flex: 3;
        height: 100%;
       
    }
`;

const AvatarIcon = styled(Link)`
     flex: 1;
     width: 100%;
     -webkit-box-shadow: 9px 6px 17px 4px rgba(74,74,74,0.33); 
     box-shadow: 9px 6px 17px 4px rgba(74,74,74,0.33);
     text-decoration: none;
     display: flex;
     justify-content: center;
     align-items: center;
     background: #EDBC00;
     border-radius: 2px;
     h4 {
         font-size: 24px;
         font-weight: 500;
         color:#fff;
     }
     &:hover {
         transform: scale(1.08);
         transition: all 300ms  ease-out;
     }
`;

const StatusContainer = styled.div`
    flex: 3;
    height:100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap:5px;
    align-items: flex-start;
    justify-content: center;

    p {
        font-size: 14px;
        color:#737171
    }

    .status--word {
        font-weight: 600;
    }
`;

const MenuContainer = styled.div`
    padding: 3rem 2rem;
    width:100%;
    height: calc(100% - 68px);
    

`;

const MenuContainerWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:20px;
`;

const MenuSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    h4 {
        font-size: 1.5rem;
        color : #ED8C00;
        margin-bottom: 10px;
        font-weight: 400;
    }
    .link--item {
        text-decoration:none;
        color:#7A838C;


    }

`;

const DashMenu = ({ cName }) => {
    const profileName = "Anouar"
    return (
        <div className={cName}>
            <UserProfileBox>
               <AvatarIcon>
                    <h4>{profileName.substring(0,2).toUpperCase()}</h4>
               </AvatarIcon>
                <StatusContainer>
                    <p>Anouar Belila contract</p>
                    <p>Status :<span className="status--word"> Active</span></p>
                </StatusContainer>
            </UserProfileBox>

            <MenuContainer>
                <MenuContainerWrapper>
                    <MenuSection>
                    <h4>DASHBOARD</h4>
                    <Link className="link--item">
                        Home
                    </Link>
                    <Link className="link--item">
                       Announcements
                    </Link>
                    </MenuSection>
                    <MenuSection>
                    <h4>QuickMenu</h4>
                    <Link className="link--item">
                        Users
                    </Link>
                    <Link className="link--item">
                       Ai Model
                    </Link>
                    <Link className="link--item">
                       BankEnergi
                    </Link>
                    </MenuSection>
                </MenuContainerWrapper>
            </MenuContainer>


        </div>
    )
}

export default DashMenu
