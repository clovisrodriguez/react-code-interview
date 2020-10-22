import React from 'react'
import './SwapiList.style.css'

const SwapiList = ({ list, history }) => {
    const selectUser = (name) => history.push(`?name=${name}`)
    return (
        <table>
            <caption>users</caption>
            <tr>
                <th>name</th><th>gender</th><th>mass</th><th>birth</th>
            </tr>
            {list.map(({ name, gender, mass, birth_year: birthYear }) => (
                <tr key={name} onClick={() => selectUser(name)}>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{mass}</td>
                    <td>{birthYear}</td>
                </tr>
            ))}
        </table>
    )
}

export default SwapiList
