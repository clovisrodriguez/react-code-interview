import React from 'react'

const Pagination = ({ pageId, history }) => {
    const handleClick = (foward) => {
        foward ? pageId++ : pageId --;
        history.push(`${pageId}`);
    }
    return (
        <div>
           {pageId > 1 && <button onClick={() => handleClick(false)}>BACK</button>}
            <button onClick={() => handleClick(true)}>FOWARD</button>
        </div>
    )
}

export default Pagination
