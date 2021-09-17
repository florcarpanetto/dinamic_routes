import React from "react";


function Course({title, description}) {
    return (
        <div className="course__item">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
    )
}

export default Course