import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';


import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';



function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>


            <div className='header__left'>
                <img src='data:image/png;base64,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' alt='' />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />

            </div>


        </div>
    )
}

export default Header