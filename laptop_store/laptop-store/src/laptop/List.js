import React from "react";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            laptop: [
                {
                    id: 1,
                    name: 'Laptop MSI GF63',
                    price: '18,390,000'
                },
                {
                    id: 2,
                    name: 'Laptop HP Pavilion',
                    price: '19,390,000'
                },
                {
                    id: 3,
                    name: 'Laptop Dell Latitude',
                    price: '20,390,000'
                },
                {
                    id: 4,
                    name: 'Laptop ThinkPad 14s',
                    price: '22,390,000'
                },
                {
                    id: 4,
                    name: 'Laptop HP Probook 450',
                    price: '22,390,000'
                },
                {
                    id: 5,
                    name: 'Lenovo ThinkPad T470s 450',
                    price: '22,390,000'
                }
            ]
        }
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {this.state.laptop.map((laptop, i) =>
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{laptop.name}</td>
                        <td>{laptop.price}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}
export default List;
