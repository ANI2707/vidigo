import React from 'react'


const commentsData=[
    {
        name:'Aniket Bhosale',
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies:[
            {
                name:'Aniket Bhosale',
                text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
                replies:[],
            },
        ],
    },
    {
        name:'Aniket Bhosale',
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies:[],
    },
    {
        name:'Aniket Bhosale',
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies:[
            {
                name:'Aniket Bhosale',
                text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
                replies:[],
            },
            {
                name:'Aniket Bhosale',
                text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
                replies:[
                    {
                        name:'Aniket Bhosale',
                        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
                        replies:[],
                    },
                    {
                        name:'Aniket Bhosale',
                        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
                        replies:[
                            {
                                name:'Aniket Bhosale',
                                text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
                                replies:[
                                    {
                                        name:'Aniket Bhosale',
                                        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
                                        replies:[],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:'Aniket Bhosale',
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies:[],
    },
    {
        name:'Aniket Bhosale',
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies:[],
    },
    {
        name:'Aniket Bhosale',
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies:[],
    },
    {
        name:'Aniket Bhosale',
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies:[],
    },
]

const Comment =({data})=>{
    const {name,text,replies}=data;

    return <div className='my-4 flex shadow-lg bg-gray-200 p-2 rounded-lg'>
        <img className='w-8 h-8' src="logo192.png" alt="user-Image" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentsList =({comments})=>{
    return comments.map((comment,index)=>(
        <div key={index}>

            <Comment  data={comment}/>
            <div className='pl-5 border-l border-l-black ml-5'>
               <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
;}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer