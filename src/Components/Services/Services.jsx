import React from 'react'
import './Services.css'
const Services = () => {
    const data=[
        {
            num:"1",
            heading:"Explore AI Opportunities for Your Enterprise",
            para:"Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation."

        }
        ,
        {
            num:"2",
            heading:"Design AI Trust Layer",
            para:"Prioritize data security and build trust in generative AI applications with a dedicated trustlayer, emphasizing privacy-focused solutions that safeguard both organizational and customer data."

        }
        ,
        {
            num:"3",
            heading:"Scalability-Focused Solutions",
            para:"Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity."

        },
        {
            num:"4",
            heading:"End to end Workflow automation",
            para:"Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise,providing a future-proof approach to AI integration."

        }
    ]
  return (
    <section className="services" id="#services">
    <h2>Services</h2>
    <div className='abt-details'>
        {
            data.map((item,index)=>{
                return(
                    <div className="box" key={index}>
                    <div className="num">{"0"+item.num}</div>
                    <div className="box-matter">
                        <div className="box-heading"><h3>{item.heading}</h3></div>
                        <div className="box-write">{item.para}</div>
                    </div>
                    
                </div>
                )
            })
        }
                </div> 
            </section>
        
  )
}

export default Services