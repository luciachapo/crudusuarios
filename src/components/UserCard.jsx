const UserCard = ({ user, deleteUsersById, setUpdateInfo, handleOpenForm }) => {

    const handleDelete = () => {
        deleteUsersById('', user.id)

    }

    const handleUpdate = () => {
        setUpdateInfo(user)
    }

    return (
        // <div>UserCard</div>
        <article>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <hr />
            <ul>
                <li><span>Email</span>
                <span>{user.email}</span></li>
                <li><span>Birthday</span>
                <span>{user.birthday}</span></li>
            </ul>
            <hr />
            <footer>
                <button className="botones" onClick={handleDelete}><i class='bx bx-trash'></i></button>
                <button className="botones" onClick={handleUpdate}><i class='bx bx-edit'></i></button>

            </footer>
        </article>
    )
}

export default UserCard