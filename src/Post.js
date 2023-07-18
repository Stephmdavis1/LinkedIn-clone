import React, { forwardRef } from 'react'
import './Post.css'
import InputOption from './InputOption';
import { Avatar } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    const user = useSelector(selectUser);

    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>

    )
})

export default Post