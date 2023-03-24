import React from "react";
import s from './Users.module.css'

export let Users = (props) => {

    // if(props.usersPage.users.length === 0) {
    //     props.setUsers([
    //             {
    //                 id: 1,
    //                 photoUrl: 'https://2.bp.blogspot.com/-w1KcztzMZTQ/VnXQHtY39GI/AAAAAAAAYQM/iB_PhFgDW9Y/s1600/bane.jpg',
    //                 followed: true,
    //                 fullName: 'Dima',
    //                 status: 'I am the boss',
    //                 location: {city: 'Minsk', country: 'Belarus'}
    //             },
    //             {
    //                 id: 2,
    //                 photoUrl: 'https://image.stern.de/31693958/t/O6/v6/w1440/r1.7778/-/star-wars-schurke-was-wurde-aus-darth-maul.jpg',
    //                 followed: false,
    //                 fullName: 'Vasa',
    //                 status: 'I am the boss too',
    //                 location: {city: 'Moscow', country: 'Russia'}
    //             }
    //
    //         ]
    //     )
    // }


    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                  <span>
                    <div><img src={u.photoUrl} className={s.photo}/></div>
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

            {/*{ <div>{props.users.fullName[1]} </div>}*/}
        </div>
    )
}

