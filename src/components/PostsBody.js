import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import PostCard from './PostCard';



export default function PostsBody() {
    const [query, setQuery] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
          .get("https://hn.algolia.com/api/v1/search?query={react}")
          .then((res) => {
            console.log("response data", res.data.getAllprop);
            setQuery(res.data.hits);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
  
return (
    <Container>
        <form className='form-group mt-5 d-flex'>
            <input type="text" className='form-control me-2' onClick={(event)=> {setSearch(event.target.value);}}  />
        </form>

        <div className="container bg-white results-container p-4 my-4">
        {query.filter((val)=>{
         if(search===""){
            return val
         }else if(val.title.toLowerCase().includes(search.toLowerCase())){
            return val
         }
        }).map((prop, key) => (<PostCard title={prop.title} author={prop.author} num_comments={prop.num_comments}></PostCard>))}
        </div>
    </Container>
);

}
