import React from 'react';
import image from "../images/pexels-fauxels-3184454.jpg";

export default function Home() {
  return (
    <main>
      <img className="object-cover absolute w-full h-screen" src={image} alt="Work stuff on a desk"/>
      <section className="relative flex justify-center items-center min-h-screen px-4 py-64 z-10">
        <h1 className="font-semibold text-white bg-gray-900 bg-opacity-50 text-5xl border-b-8 border-green-400 py-5 px-8 transform -skew-x-12 rounded-lg"><span className="block transform skew-x-12">Welcome to my Portfolio!</span></h1>
      </section>
    </main>
  )
}