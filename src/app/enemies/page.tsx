"use client";

import { useEffect, useRef } from "react";
import card from "../page.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { useSearchParams } from "next/navigation";

import UseFetch from "@/hooks/UseFetch";

const Page = () => {

    const [data] = UseFetch("https://enemy.pages.dev/assets/data.json");

    const searchParams = useSearchParams();

    const queryString = searchParams.get('id');

   // const dataID = query as string;

   // const id = parseInt(dataID);

   const id = Number(queryString)


    console.log(id);

    const refObj = useRef<HTMLDivElement>(null);

    useEffect( ()=>{

        gsap.to(refObj.current,{

            duration:0.05,
            scaleX:-1,
            alpha:0,
            repeat:3,
            yoyo:true,
            onComplete: ()=>{

                gsap.to(refObj.current, {
                   
                    duration:0.05,
                    alpha:1,
                    scaleX:1                    
                })
            }

        })


    },[id] )

    return (

        <main>
{data &&
            <section ref = {refObj} id={card.cardContainer}>
                <div id={card.card}>
                    <div id={card.headline}>{data?.content[id].name}</div>
                    <div id={card.imagecon}>

                      <Image
                       src={`/assets/${data.content[id].img}`} 
                       alt = "Picture"
                       width={250}
                       height = {250}
                       />


                    </div>
                    <div id={card.content}>{data.content[id].text}</div>

                </div>
            </section>
}
        </main>

    )
}

export default Page;