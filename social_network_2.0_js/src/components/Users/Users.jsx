import React from "react";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/image/userPhoto.png'


export class Users extends React.Component {

    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div className={s.wrapper}>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null
                            ? u.photos.small
                            : userPhoto} className={s.photo} className={s.photo}/>
                    </div>
                    <div>
                 {
                     u.followed
                         ? <button onClick={() => {
                             this.props.unfollow(u.id)
                         }}>Unfollow</button>
                         : <button onClick={() => {
                             this.props.follow(u.id)
                         }}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                         <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                    </div>)}
            </div>
        )
    }
}


// export let Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(res => {
//                     props.setUsers(res.data.items)
//                 })
//         }
//     }
//     return (
//
//         <div className={s.wrapper}>
//             <button onClick={getUsers}>Get Users</button>
//             {
//                 props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos.small !== null
//                             ? u.photos.small
//                             : userPhoto} className={s.photo} className={s.photo}/>
//                     </div>
//                     <div>
//                  {
//                      u.followed
//                          ? <button onClick={() => {
//                              props.unfollow(u.id)
//                          }}>Unfollow</button>
//                          : <button onClick={() => {
//                              props.follow(u.id)
//                          }}>Follow</button>}
//                     </div>
//                 </span>
//                     <span>
//                     <span>
//                          <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{'u.location.country'}</div>
//                         <div>{'u.location.city'}</div>
//                     </span>
//                 </span>
//                 </div>)}
//         </div>
//     )
// }


//old user data
// [
//     {
//         id: 1,
//         photoUrl: 'https://2.bp.blogspot.com/-w1KcztzMZTQ/VnXQHtY39GI/AAAAAAAAYQM/iB_PhFgDW9Y/s1600/bane.jpg',
//         followed: true,
//         fullName: 'Dima',
//         status: 'I am the boss',
//         location: {city: 'Minsk', country: 'Belarus'}
//     },
//     {
//         id: 2,
//         photoUrl: 'https://image.stern.de/31693958/t/O6/v6/w1440/r1.7778/-/star-wars-schurke-was-wurde-aus-darth-maul.jpg',
//         followed: false,
//         fullName: 'Vasa',
//         status: 'I am the boss too',
//         location: {city: 'Moscow', country: 'Russia'}
//     }
// ]