import blogs from '/public/blog.json'
import Link from 'next/link';

import React from 'react';


// async function getData() {
//     const res = await fetch('/blog.json')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }


const Blog = async () => {
    console.log(blogs);

    // const data = await getData()

    return (
        <div>
           {
            blogs.map(blog => <div key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                <h1>{blog.title}</h1>
                </Link>
            </div>)
           }
        </div>
    );
};

export default Blog;