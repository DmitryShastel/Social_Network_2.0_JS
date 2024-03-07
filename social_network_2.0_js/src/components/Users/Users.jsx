import React, {useState} from "react";
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


    const [followingInProgress, setFollowingInProgress] = useState([]);

    const handleFollow = (id) => {
        setFollowingInProgress([...followingInProgress, id]);
        // props.toggleFollowingProgress(true, id)
        usersAPI.follow(id).then(data => {
            setFollowingInProgress(followingInProgress.filter(userId => userId !== id));
            // props.toggleFollowingProgress(false, id)
            if (data.resultCode === 0) {
                props.follow(id);
            }
        })
    };

    const handleUnfollow = (id) => {
        setFollowingInProgress([...followingInProgress, id]);
        // props.toggleFollowingProgress(true, id)
        usersAPI.unFollow(id).then(data => {
            setFollowingInProgress(followingInProgress.filter(userId => userId !== id));
            // props.toggleFollowingProgress(false, id)
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
                      //disabled={props.followingInProgress.some(id => id === u.id)}
                      disabled={followingInProgress.includes(u.id)}
                      onClick={() => handleUnfollow(u.id)}>
                      Unfollow
                  </button>
              ) : (
                  <button
                      //disabled={props.followingInProgress.some(id => id === u.id)}
                      disabled={followingInProgress.includes(u.id)}
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