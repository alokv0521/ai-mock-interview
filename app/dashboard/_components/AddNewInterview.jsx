"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import * as schema from '@/utils/schema';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GemniAIModels'
import { LoaderCircle } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import {v4 as uuidv4} from 'uuid';

function AddNewInterview() {
    const[openDialog, setOpenDialog]=useState(false)
    const[jobPos, setJobPosition]=useState('');
    const[jobDesc, setJobDescription]=useState('');
    const[jobExp, setJobExperiance]=useState('');
    const[loading, setLoading]=useState(false );
    const[jsonResponse, setJsonResonse]=useState([])
    const{user}=useUser();

    const onSubmit=async(e)=>{
      setLoading(true)
        e.preventDefault()
        console.log(jobPos, jobDesc, jobExp);

        const InputPrompt ="Job position:"+jobPos+", job description:"+jobDesc+", years of experience :"+jobExp+". give"+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Question along with Answer in JSON format. Give us question and answer in field in JSON format , also please ask only technical question , also make this interview on easy level "

        const result =await chatSession.sendMessage(InputPrompt);
        const MockJsonResponse=(result.response.text()).replace('```json','').replace('```','')
        console.log(JSON.parse(MockJsonResponse));
        setJsonResonse(MockJsonResponse);

        const test = await db.select().from(schema.MockInterview).limit(1);
console.log(test);

    // if(MockJsonResponse){
    //   //   const resp=await db.insert(MockInterview)
    //   //   .values({
    //   //     mockId:uuidv4(),
    //   //     jsonMockResponse:MockJsonResponse,
    //   //     jobPosition:jobPos,
    //   //     jobDescription:jobDesc,
    //   //     jobExperience:jobExp,
    //   //     createdBy:user?.primaryEmailAddress?.emailAddress,
    //   //     createdAt:moment().format('DD-MM-yyyy')
    //   //   }).returning({mockId:MockInterview.mockId});
    //   //   console.log("inserted id:", resp);
    //   // 
    //   console.log('everythin is ok')

    //   }
    //   else {
    //     console.log("some error encounterd")
    //   }

        setLoading(false)
    }
// till this it will need some review 

  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md hover:font-semibold cursor-pointer transition-all'
        onClick={()=>setOpenDialog(true)}
        >
            <h2 className=' text-large text-center'>
                + Add New
            </h2>

        </div>

        <Dialog open={openDialog}>
  
  <DialogContent className='max-w-2xl'>
    <DialogHeader>
      <DialogTitle className="text-2xl">Tell us more about you job interview</DialogTitle>
      <DialogDescription>
    <form onSubmit={onSubmit}>
       <div>
                <h2> Add details about your job role/position, job description and experiance</h2>

            <div className='mt-5 my-3'>
                <label >Job Role/Job Position</label>
                <Input placeholder='Ex. Full Stack Developer' required 
                onChange={(event)=>setJobPosition(event.target.value)}
                />
            </div>

            <div className='my-3'>
                <label >Job Description/Requirements (in short)</label>
                <Textarea placeholder='Ex. React, Angular, Next, etc.' required 
                onChange={(event)=>setJobDescription(event.target.value)}
                />
            </div>

            <div className='my-3'>
                <label >Years of experiance</label>
                <Input placeholder='Ex. 3' type="number" max="10" required
                onChange={(event)=>setJobExperiance(event.target.value)}
                />
            </div>
       </div>

        <div className='flex gap-5 justify-end'>
            <Button type="button" variant="ghost" onClick={()=>setOpenDialog(false)} >Cancel</Button>
            <Button type="submit" disable={loading}>
              {loading?
              <>
              <LoaderCircle className='animate-spin'/ >Genie is thinking
              </>:'Start Interview'
              }
              </Button>

        </div>

        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddNewInterview