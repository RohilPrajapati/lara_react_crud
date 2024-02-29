import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../config'

export default function Post() {
    const [data, setData] = useState();
    const [showAddForm, setShowAddForm] = useState(false);
    useEffect(() => {
        axios.get(BASE_URL + 'post')
        .then((response) => {
            console.log(response)
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    const handleAddForm = () => {
        setShowAddForm(!showAddForm)
        console.log("working")
        console.log(showAddForm)
    }
    if (!data) return null
    
    return (
        <div>
            <button onClick={handleAddForm}>add</button>
            { showAddForm && <AddForm /> }
            <table>
                <tr>
                    <th>S. N.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            {data.map((row) => {
                return <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.description}</td>
                    <td>{row.status?'Active':'Inactive'}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            })}
            </table>
        </div>
    );
}


const AddForm = () => {
    return (
        <>
            <input type="text" placeholder='title'/>
        </>
    );
}