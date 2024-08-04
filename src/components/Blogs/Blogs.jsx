import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const Blogsdata=[
    {
        title:"How to choose percfect Smart Watch",
        subtitle:"A good battery life, options to monitor body vitals,and a clean OS. Here is what to keep in mind if you are looking at investing in a smartwatch",
        published:"Jan 20, 2024 by Dilshad",
        img:Img1,
        aosDelay:"0"
    },
    {
        title:"How to choose percfect Gadget",
        subtitle:"Determine Ypur budget before you start shopping for a gadget.This will help you narrow down your options and avoid overspending",
        published:"Jan 22, 2024 by Satya",
        img:Img2,
        aosDelay:"200"
    },
    {
        title:"How to choose percfect VR headset",
        subtitle:"If You are looking for affordable VR headsets online through which you can enjoy your favourite movies,Tv shows and Cricket Matches in an immersive manner, then this JioDive 360 degree VR Headset might be perfect choice for you",
        published:"Jan 23, 2024 by Sahip",
        img:Img3,
        aosDelay:"400",
    },
]

const Blogs = () => {
  return (
    <div className="my-12">
        <div className="container">
            {/* Header Section */}
            <Heading title="Recent News" subtitle={"Explore Our Blogs"}/>
            {/* Blog Section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {
                Blogsdata.map((data)=>(
                <div data-aos="fade-up" data-aos-delay={data.aosDelay} 
                key={data.title} className="bg-white dark:bg-gray-900">
                    {/* Image Section */}
                    <div className="overflow-hidden rounded-2xl mb-2">
                      <img className="w-full h-[220px] object-cover 
                      rounded-2xl hover:scale-105 duration-500" src={data.img} alt="blog_image" />
                    </div> 
                   {/* Content Section  */}
                   <div className="space-y-2">
                    <p className="text-xs text-gray-500">{data.published}</p>
                    <p className="font-bold line-clamp-1">{data.title}</p>
                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'> {data.subtitle}</p>
                   </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs