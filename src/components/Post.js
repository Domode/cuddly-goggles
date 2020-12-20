import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  });

  return (
    <main className="bg-gray-200 min-h-screen py-20">
      <section className="container m-auto px-4">
        <div className="border-b border-gray-400 pb-6">
          <h1 className="font-bold text-3xl text-gray-700 mb-2">My Blog</h1>
          <h2 className="text-lg text-gray-500">Welcome to my page of blog posts</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {postData && postData.map((post, index) => (
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span className="block h-72 relative rounded shadow leading-snug bg-white border-l-8 border-green-400 transform hover:scale-105 transistion-all duration-200 ease-out">
                  <img 
                    src={post.mainImage.asset.url} 
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute"
                  />
                  <span className="block relative h-full flex items-end">
                    <h3 className="w-full text-right text-gray-700 text-lg px-3 py-4 bg-white">{post.title}</h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}