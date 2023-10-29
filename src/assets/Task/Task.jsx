// eslint-disable-next-line react/prop-types
function Task({taskName, done}){
    return(
        <>
        {done ? <li className="mx-3"><strike>{taskName}</strike></li> : <li className="mx-3">{taskName}</li>}
        </>
    )
}

export default Task