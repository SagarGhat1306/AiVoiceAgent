'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import AddNewSession from './AddNewSession';


export default function HistoryList() {


    const [HistoryList , setHistoryList] = useState([]);
  return (
    <div className=''>
        { HistoryList.length == 0 ?


            <div className='flex items-center justify-center flex-col gap-5 p-7 border rounded-2xl'>

                <Image src = "/globe.svg"  width = {20} height={20} alt = "" />
                <h2 className='text-bold text-xl'>
                    No Recent Consultation 
                </h2>
                <p>it Looks like you haven't any doctor yet</p>
                <AddNewSession />
            </div> 
            : <div>List</div>
        }
    </div>
  )
}
