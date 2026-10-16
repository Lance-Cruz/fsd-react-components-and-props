function MemberCard(props) 
{
    return (
        <div className="member-card">
            <div className="member-container">
                <img src={props.img}></img>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Sport: {props.sport}</p>
                <p>"{props.quote}"</p>
            </div>
        </div>
    )
}

export default MemberCard;