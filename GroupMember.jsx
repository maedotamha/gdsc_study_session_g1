import './GroupMembers.css'
function GroupMember (){
    const members = ['Maedot','Meklit','Nahom','Liya'];

    return (
        <>
        <h2>Group Members Names'</h2>
        <ul>
        {members.map((member, index) => (
            <li key= {index}>{member}</li>
        ))}
        </ul>
        </>
    )
}
export default GroupMember;