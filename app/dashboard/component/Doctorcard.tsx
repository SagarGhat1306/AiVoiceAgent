import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

type doctoagnet = {
    name : string,
    role: string,
    image: string,
    agentPrompt : string,
   description : string
}

type props = {
   doctoagnet : doctoagnet
}
export default function Doctorcard({doctoagnet} : props) {
  return (
    <div>
      <Image src={doctoagnet.image} alt={doctoagnet.role} width={200} height={300}
      className='w-full h-[250px] object-cover rounded-2xl'/>

      <h2>{doctoagnet.name}</h2>
      <p>{doctoagnet.description}</p>
      <Button>Start Consultaion</Button>
    </div>
  )
}
