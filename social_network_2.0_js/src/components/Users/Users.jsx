import React from "react";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/image/userPhoto.png'


export class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount)
            })

    }

    changedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.wrapper}>
                <div>
                    {pages.map(p => {

                        return <span className={this.props.currentPage === p && s.selectedPage}
                                     onClick={() => {
                                         this.changedPage(p)
                                     }}>{p}</span>

                    })}
                </div>
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