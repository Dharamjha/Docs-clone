import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({data,reference}) {
  return (
   
        <motion.div drag  dragConstraints ={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-purple-400/60 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-right mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose/> : <FaDownload size=".7em" color='#000'/>}
                
                </span>
                
            </div>
            {
                data.tag.isOpen ? (<div className={`tag w-full py-6 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3> 
              </div>) : null
            }
            
        </div>

        </motion.div>
    
  )
}

export default Cards