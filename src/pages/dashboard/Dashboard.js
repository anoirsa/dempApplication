import React,{useState} from 'react'
import SideBar from '../../components/SideBar';
import Topbar from '../../components/Topbar';
import styled from 'styled-components';
import './Dashboard.css';
import MainContentContainer from '../../components/MainContentContainer';

const Dashboard = () => {
    const [showMenu,setShowMenu] = useState(false);
    return (
        <div>
            <Topbar />
            
            <div className="main--container">
            <SideBar 
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <MainContentContainer 
                showMenu={showMenu}
            />

            </div>
        </div>
    )
}

export default Dashboard
