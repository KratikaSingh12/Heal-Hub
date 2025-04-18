import React from "react";
import { assets } from "../assets/assets";
const Footer = () =>{
     return(
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">  
                 {/* -----left-----*/}
                     <div>
                        <img className="w-10 h-50 border-black mb-7" src={assets.logo} alt=""/>

                        <p className="w-full md:w-1/2 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque saepe consequatur, cum dicta explicabo consectetur doloremque voluptate ea doloribus rem quasi, incidunt autem harum velit excepturi enim tempora animi.</p>
                     </div>
                  {/* -----center----*/}
                     <div>
                        <p className="text-xl font-medium mb-5">COMPANY</p>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Orivacy policy</li>
                        </ul>
                     </div>
                  {/* ------right----*/}
                     <div>
                            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                            <ul className="flex flex-col gap-2 text-gray-600">
                            <li>+91-79890XXXXX</li>
                            <li>emergency@gmail.com</li>
                            </ul>
                     </div>
            </div>
                {/* -----copyright text ----*/}
                <div>
                    <hr/>
                    <p className="py-5 text-sm text-center">Copyright 2025@Heal-Hub - All Right Reserved </p>
                </div>
        </div>
     )
}
export default Footer