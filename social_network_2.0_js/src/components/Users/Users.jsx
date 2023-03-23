import React from "react";

export const Users = (props) => {

    if(props.setUsers.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://image.stern.de/31693958/t/O6/v6/w1440/r1.7778/-/star-wars-schurke-was-wurde-aus-darth-maul.jpg',
                    followed: true,
                    fullName: 'Dima',
                    status: 'I am the boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://image.stern.de/31693958/t/O6/v6/w1440/r1.7778/-/star-wars-schurke-was-wurde-aus-darth-maul.jpg',
                    followed: false,
                    fullName: 'Vasa',
                    status: 'I am the boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                }
            ]
        )
    }




    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                  <span>
                    <div><img src={u.photoUrl}/></div>
                </span>

                <div>
                    {
                        u.followed
                            ? <button onClick={()=> {props.follow(u.id)}}>Follow</button>
                            : <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    }

                </div>

                <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>

                    <span>
                        <div>{u.location.city}</div>
                       <div>{u.location.country}</div>
                    </span>
                </span>

            </div>)}
        </div>
    )
}

