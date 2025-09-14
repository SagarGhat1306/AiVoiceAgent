'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import { Textarea } from "@/components/ui/textarea"

import React, { useState } from 'react'
import { DialogClose } from "@radix-ui/react-dialog"
import { ArrowRight } from "lucide-react"

export default function AddNewSession() {

    const [Detail , setDetail] = useState<string>()
  return (
  <Dialog>
  <DialogTrigger><Button>Start Consultant</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Basics details</DialogTitle>
      <DialogDescription asChild>
        <div>
            <h2>Add Symtoms or Any other </h2>

            <Textarea placeholder="Add Detail here.." className="h-[250px] mt-10" onChange={(e)=> setDetail(e.target.value)}/>
        </div>
      </DialogDescription>
    </DialogHeader>

    <DialogFooter>
        <DialogClose className="flex gap-5">
        <Button variant = {'outline'}>cancle</Button>
        <Button disabled = {!Detail} >Next <ArrowRight /></Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}
