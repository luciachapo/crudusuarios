
import axios from "axios"
import { useState } from "react"



const useFetch = (baseUrl)  => {
    const [infoApi, setInfoApi] = useState()

    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
        .then(resp => setInfoApi(resp.data))
        .catch(err => console.log(err))

    }

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/` 
        axios.post(url, data)
        .then(resp => {
            console.log(resp.data)
            setInfoApi ([...infoApi, resp.data])
        })
        .catch(err => console.log(err))
    }

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
        .then(resp => {
            console.log(resp.data)
            const infoApiFiltered = infoApi.filter(e => e.id !== id)
            setInfoApi(infoApiFiltered)
        })
        .catch(err => cosole.log(err))
    }

        const updateApi = (path, id, data) => {
            const url = `${baseUrl}${path}/${id}/`
            axios.patch(url, data)
             .then(resp => {
                console.log(resp.data)
                const infoApiMapped =infoApi.map(e =>  e.id === id ? resp.data : e)
                setInfoApi(infoApiMapped)
             })
            .catch(err => console.log(err))
        } 

    return [ infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch 