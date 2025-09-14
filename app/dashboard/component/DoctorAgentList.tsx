import { doctors } from '@/sahred/list'
import React from 'react'
import Doctorcard from './Doctorcard'

export default function DoctorAgentList() {
  return (
    <div className='my-10 mx-10'>
        <h1 className='items-center'>AI specilist doctor agent</h1>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

            {doctors.map((doctor : any , index) => (
                <div key = {index}>
                        <Doctorcard doctoagnet = {doctor}/>
                </div>
            ))}
        </div>
    </div>
  )
}
