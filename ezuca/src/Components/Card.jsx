import React from 'react'
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { TfiUser } from 'react-icons/tfi';

const Card = (props) => {
    const { image, heading } = props
    return (
        <div>
            <div className='bg-white  w-[315px] h-[330px] flex items-start flex-col gap-4 border-r border-b border-[grey]'>
                <div className='ml-7 mt-5'>{image}</div>
                <h2 className='text-black text-2xl ml-7'>{heading}</h2>
                <p className='text-[grey] ml-7'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                <div className='ml-7'><FaLongArrowAltRight color='#19C880' size='20' /></div>
            </div>
        </div>
    )
}

export default Card



export const Card2 = (props) => {
    const {image, heading, name, date, price} = props
    return (
        <div>
           <div className='flex items-center flex-row'>
            <div><img src={image} alt="" /></div>
            <div>
            <FaStar color='#f3a90b'/>
            <FaStar color='#f3a90b'/>
            <FaStar color='#f3a90b'/>
            <FaStar color='#f3a90b'/>
            <FaStar color='grey'/>
            <h2>{heading}</h2>
            <i><span className='text-[#19c880]'>{name}</span>/{date}</i>
            <h4>{price}</h4>
            </div>
           </div>
        </div>
    )
}


