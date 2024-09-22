import React from 'react'
import Card, { Card2 } from '../Components/Card'
import { FaRegFolderClosed } from "react-icons/fa6";
import { TfiUser, TfiWorld } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";

const Index = () => {
    return (
        <div>
            <div className="image">
                <div className='img-text'>
                    <p className='started'>GET STARTED WITH ONLINR COURSES <br /><span className='best-system'>BEST ONLINE <br />LEARNING SYSTEM</span></p>
                    <p className='text-white text-base mt-9' >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptatem accusantium doloremque laudantium</p>
                    <button className='text-white bg-transparent border-solid border-2 border-[#19C880] p-3 w-40 mt-5'>Read More</button>
                </div>
                <div className='flex items-center justify-start flex-wrap -mt-[-90px]'>
                    <Card image={<TfiUser size={60} color='#19C880' />} heading='Learn From The Experts' />
                    <Card image={<FaRegFolderClosed size={60} color='#19C880' />} heading='Book Library & Store' />
                    <Card image={<IoBookOutline size={60} color='#19C880' />} heading='Best Course Online' />
                    <Card image={<TfiWorld size={60} color='#19C880' />} heading='Best Industry Leaders' />
                </div>
                <div className='flex justify-center gap-[600px]'>
                    <h1 className='text-black mt-5'>Featured Courses</h1>
                    <button className='text-black bg-transparent border-solid border-2
                    border-[#19C880] h-[50px] w-[150px] mt-5 hover:bg-[#19C880] active:bg-[#19C880]'>View All</button>
                </div>
                <div>
                    <Card2/>
                </div>
            </div>
        </div>
    )
}

export default Index
