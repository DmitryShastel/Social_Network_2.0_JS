import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/image/userPhoto.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/api";


export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const handleFollow = (id) => {
        usersAPI.follow(id).then(data => {
            debugger
            if (data.resultCode === 0) {
                props.follow(id);
            }
        })
    };

    const handleUnfollow = (id) => {
        usersAPI.unFollow(id).then(data => {
            if (data.resultCode === 0) {
                props.unfollow(id);
            }
        });
    };

    return (
        <div className={s.wrapper}>
            <div>
                {pages.map(p => {

                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.changedPage(p)
                                 }}>{p}</span>

                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null
                            ? u.photos.small
                            : userPhoto} className={s.photo} className={s.photo}/>
                            </NavLink>
                    </div>
                     <div>
              {u.followed ? (
                  <button
                      onClick={() => handleUnfollow(u.id)}>
                      Unfollow
                  </button>
              ) : (
                  <button
                      onClick={() => handleFollow(u.id)}>
                      Follow
                  </button>
              )}
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


// <div>
//
//
// {
//         u.followed
//             ? <button onClick={() => {
//                 usersAPI.follow(u.id).then(res => {
//                     if (res.data.resultCode === 0) {
//                         props.unfollow(u.id)
//                     }
//                 })
//             }}>Unfollow</button>
//
//             : <button onClick={() => {
//                 usersAPI.unFollow(u.id).then(res => {
//                     if (res.data.resultCode === 0) {
//                         props.unfollow(u.id)
//                     }
//                 })
//                     .then(res => {
//                         if (res.data.resultCode === 0) {
//                             props.follow(u.id)
//                         }
//                     })
//             }}>Follow</button>}
//
//
//     {/*{*/}
//     {/*    u.followed*/}
//     {/*        ? <button onClick={() => {*/}
//     {/*            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,*/}
//     {/*                {*/}
//     {/*                    withCredentials: true,*/}
//     {/*                    headers: {*/}
//     {/*                        'API-KEY': '9f9da7ee-2def-4ec9-bde3-f37a343d34bd'*/}
//     {/*                    },*/}
//     {/*                })*/}
//     {/*                .then(res => {*/}
//     {/*                    if (res.data.resultCode === 0) {*/}
//     {/*                        props.unfollow(u.id)*/}
//     {/*                    }*/}
//     {/*                })*/}
//     {/*        }}>Unfollow</button>*/}
//
//     {/*        : <button onClick={() => {*/}
//     {/*            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},*/}
//     {/*                {*/}
//     {/*                    withCredentials: true,*/}
//     {/*                    headers: {*/}
//     {/*                        'API-KEY': '9f9da7ee-2def-4ec9-bde3-f37a343d34bd'*/}
//     {/*                    },*/}
//     {/*                })*/}
//     {/*                .then(res => {*/}
//     {/*                    if (res.data.resultCode === 0) {*/}
//     {/*                        props.follow(u.id)*/}
//     {/*                    }*/}
//     {/*                })*/}
//     {/*        }}>Follow</button>}*/}
//
// </div>