
import './App.css'
import {useEffect, useState } from "react"
// import {useState} from 'react'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

// import userCard from './components/userCard'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech/users/'

  const [ users, getAllUsers, createNewUsers, deleteUsersById, updateUsersById  ] = useFetch(baseUrl)



  useEffect(() => {
    getAllUsers('')
  }, [])

  // console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
      <div>
      <h1 className="title1">Users</h1>
      <FormUser 
       createNewUsers= {createNewUsers}
       updateInfo={updateInfo}
       updateUsersById= {updateUsersById}
       setUpdateInfo={setUpdateInfo}
       />

      <div>
          {
             users?.map(user => (
             <UserCard
             key= {user.id}
             user={user}     
             deleteUsersById={deleteUsersById}
             setUpdateInfo={setUpdateInfo}
            //  handleOpenForm={handleOpenForm}   
             />
          ))
        }
      </div>
    </div>

  )
}



export default App
