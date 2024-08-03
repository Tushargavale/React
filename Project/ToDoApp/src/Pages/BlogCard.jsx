import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate ,Link} from 'react-router-dom';
import { setBlog } from '../Redux/BlogSlice';
import parse from 'html-react-parser'


const BlogCard = ({ title, slug, content, option ,user }) => {
    const naigate=useNavigate()
    const dispatch=useDispatch()
    const Fun=()=>{
        console.log({title,slug,content,user})
        dispatch(setBlog({title,slug,content,option,user}))
        naigate('/ReadBlog')
    }

    return (
        <div>

        
        <div onClick={Fun} className="max-w-sm rounded overflow-hidden shadow-lg p-6 m-4 bg-white transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <h3 className="text-xl text-gray-600 mb-2">{slug}</h3>
          
          
        </div>
        {/* </Link> */}
    </div>
    );
};

export default BlogCard;
