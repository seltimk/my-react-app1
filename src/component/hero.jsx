

import React from 'react'
import Button from './button'

export default function hero() {
  return (
    <>
    
   


<section class="px-4 mt-12 md:mt-16 md:px-8">
   <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
         <div>
            <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
               <p class="mb-2 font-medium text-blue-700 text-sm uppercase dark:text-blue-500"><span
                     class="rotate-90 inline-block mr-2">|</span> app that help your business grow</p>
               <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl dark:text-blue-500">Simple
                  Solutions for Complex Problems</h1>
               <p class="text-slate-600 text-lg leading-relaxed dark:text-slate-400">Our intuitive platform streamlines
                  every aspect of your business operations.
                  Effortlessly manage projects, track inventory, and automate workflows, Connect meaningfully with
                  customers through.</p>

               
            </div>

            <div class="flex items-center flex-wrap max-lg:justify-center gap-4 mt-8">
               <div class="flex -space-x-2">
                  <img class="w-10 h-10 rounded-full border-2 border-white" src="https://readymadeui.com/team-1.webp"
                     alt="team img-1" />
                  <img class="w-10 h-10 rounded-full border-2 border-white" src="https://readymadeui.com/team-2.webp"
                     alt="team img-2" />
                  <img class="w-10 h-10 rounded-full border-2 border-white" src="https://readymadeui.com/team-3.webp"
                     alt="team img-3" />
               </div>
               <div class="text-slate-600 text-base dark:text-slate-400">
                  <span class="font-semibold">Over 10,000</span> Professionals trust us
               </div>
            </div>

             { Button() };

         </div>

        
         <div class="w-full aspect-[42/33]">
            <img src="https://readymadeui.com/images/mobile-app-img-5.webp" alt="hero image"
               class="w-full h-full object-contain" />
         </div>
      </div>
   </div>
</section>
    
    
    </>
  )
}
