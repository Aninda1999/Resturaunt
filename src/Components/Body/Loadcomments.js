import React from 'react'
import dateFormat from 'dateformat';

const Loadcomments = ({ comments }) => {
    console.log('I am load comments');
    return (
        <div>
            {comments.map((c) => {
                return (
                    <div key={c.id}>
                        <h5>{c.author}</h5>
                        <p>{c.comment}</p>
                        <p>{dateFormat(c.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>

                    </div>
                )
            })}
        </div>
    )
}

export default Loadcomments;