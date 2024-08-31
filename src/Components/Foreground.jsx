import React, { useRef, useState } from 'react'
import Cards from './Cards'

function Foreground() {

    const ref = useRef(null);

    const data =[
        { 
            desc: "The cookie that never crumbles! Download this delicious treat.", 
            filesize: "0.5mb", 
            close: true, 
            tag: { isOpen: false, tagTitle: "Munch Later", tagColor: "brown" } 
        },

        { 
            desc: "Warning: Highly addictive memes inside. Proceed with caution.", 
            filesize: "3.0mb", 
            close: true, 
            tag: { isOpen: false, tagTitle: "Open Memes", tagColor: "yellow" } 
        },
        { 
            desc: "How to be a coding ninja: tips, tricks, and ninja stars included!", 
            filesize: "1.5mb", 
            close: true, 
            tag: { isOpen: true, tagTitle: "Download Ninja Mode", tagColor: "black" } 
        },
        { desc: "Just a friendly AI trying to fit in! Please download responsibly.", filesize: "1.2mb", close: false, tag: { isOpen: true, tagTitle: "Download AI Wisdom", tagColor: "blue" } },

        { desc: "Time traveler’s guide to JavaScript – with paradoxes included!", filesize: "2.4mb", close: false, tag: { isOpen: true, tagTitle: "Download the Past", tagColor: "purple" } },

        { desc: "Secret formula to happiness – 99% laughter, 1% seriousness.", filesize: "0.8mb", close: false, tag: { isOpen: true, tagTitle: "Download Happiness", tagColor: "pink" } },

        


    ];

    useState

  return (
    <div ref={ref} className='relative w-full h-full p-5'>
        <div className='fixed top-0 left-0 z-[3] w-full h-[200vh] flex gap-8 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Cards data={item} reference ={ref}/>
        ))}
        </div>
    </div>
  )
}

export default Foreground