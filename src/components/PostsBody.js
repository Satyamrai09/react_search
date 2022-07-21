import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
// import axios from 'axios'
import PostCard from './PostCard'

export default function PostsBody() {

    // https://hn.algolia.com/api/v1/search?query={keyword}

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
   
    const [searchParam] = useState(["title", "author", "num_comments"]);
    useEffect(() => {
        // LoadData();
        getData();
    }, []);

    async function getData() {
        const baseURL = 'https://hn.algolia.com/api/v1/search?query={keyword}'
        const result = await fetch(baseURL);
        const getResult = await result.json();
        setItems(getResult);
        console.log(getResult)
    }

    return (
        <Container>
            <form className='form-group mt-5 d-flex'>
                <input type="text" className='form-control me-2' value={query} onChange={(e) => setQuery(e.target.value)} />
            </form>

            <div className='container bg-white results-container p-4 my-4'>


                {items.hits.map(item => (
                    <li key={item.created_at}>
                        <PostCard
                            title={item.title}
                            num_comments={item.num_comments}
                            author={item.author}
                            url="baseURL"
                        />
                    </li>
                ))}



            </div>
        </Container>
    )
}
