import React from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import PostCard from './PostCard'

export default function PostsBody() {

    // https://hn.algolia.com/api/v1/search?query={keyword}

    const baseURL = ''

    return (
        <Container>
            <form className='form-group mt-5 d-flex'>
                <input type="text" className='form-control me-2' />
            </form>
            
            <div className='container bg-white results-container p-4 my-4'>

                    <PostCard title="Title 1 Goes here" num_comments="101"
                        author="Author 1" url="#" />
                    <PostCard title="Title 2 Goes here" num_comments="201"
                        author="Author 2" url="#" />
                    <PostCard title="Title 1 Goes here" num_comments="301"
                        author="Author 3" url="#" />

            </div>
        </Container>
    )
}
