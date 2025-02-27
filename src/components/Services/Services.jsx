import React from 'react'
import { FaCarSide,FaHeadphones,FaWallet, FaCheck} from 'react-icons/fa6'

const ServiceData=[
    {
     id:1,
     icon: <FaCarSide className="text-4xl md:text-5xl text-primary"/> , 
     title:"Free Shipping",
     description:"Free Shipping on All Order",
    },
    {
        id:2,
        icon: <FaCheck className="text-4xl md:text-5xl text-primary"/> , 
        title:"Safe money",
        description:"30 Days Money Back",
    },
      {
        id:3,
        icon: <FaWallet className="text-4xl md:text-5xl text-primary"/> , 
        title:"Secure Payment",
        description:"All Payments Secure",
       },
       {
        id:4,
        icon: <FaHeadphones className="text-4xl md:text-5xl text-primary"/> , 
        title:"Online Support 24/7",
        description:"Technical Support 24/7",
       },
];

const Services = () => {
  return (
    <div>
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                 ServiceData.map((data)=>(
                    <div className="flex flex-col items-start sm:flex-row gap-4">
                      {data.icon}
                      <div>
                        <h1 className="lg:text-xl font-bold">{data.title}</h1>
                        <h1 className="text-gray-400 text-sm">{data.description}</h1>
                      </div>
                    </div>
                 ))   
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default Services