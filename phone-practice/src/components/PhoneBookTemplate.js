import React from 'react'


const PhoneBookTemplate = ({input, list, children }) => {

    const style = {
        margin : "10px",
        padding : "20px",
        border : "1px solid green"
    }

    return (
        <main className="pbt" style={style}>
            <section className="input-wrapper">{input}</section>
            <hr/>
            <section className="list-wrapper">{list}</section>
        </main>

    )



}

export default PhoneBookTemplate