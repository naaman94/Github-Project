import React, { Component } from 'react'

export class Slice extends Component {
    render() {
        const { item, i, deleteRepo, updateRepo } = this.props
        return (
            <>
                <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.private ? "PRIVET" : "PUBLIC"}</td>
                    <td><input onChange={updateRepo.bind(this, item)} type="checkbox" name="check" defaultChecked={item.private} /> </td>
                    <td>{item.private ? "YES" : "NO"}</td>
                    <td>{item.language}</td>
                    <td><button onClick={deleteRepo.bind(this, item)} type="button" style={{ width: "30px", height: "30px", textAlign: "center", padding: "6px 0", fontSize: "12px", lineHeight: "1.428571429", borderRadius: "15px" }} className="btn btn-warning btn-circle btn-lg">X</button>
                    </td>
                </tr>
            </>
        )
    }
}


export default Slice

