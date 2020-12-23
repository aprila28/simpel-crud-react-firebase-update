import React from "react";
const Button = ({title, onClick, loading}) => {
    if (loading) {
        return <button className="btn disable">Loading...</button>
    }
    return (
        <button onClick={onClick}>{title}</button>
    )
}

export default Button;