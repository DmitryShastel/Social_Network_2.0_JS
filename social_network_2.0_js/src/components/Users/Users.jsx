import React from "react";

export const Users = (props) => {
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                  <span>
                    <div><img src={u.photoUrl}/></div>
                </span>

                <div>
                    <button>Follow</button>
                </div>

            </div>)}
        </div>
    )
}

