import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            name: '',
            price: 0,
            action: 'ADD ITEM',
            laptop: [
                {
                    name: 'Laptop MSI GF63',
                    price: 18390000
                },
                {
                    name: 'Laptop HP Pavilion',
                    price: 19390000
                },
                {
                    name: 'Laptop Dell Latitude',
                    price: 20390000
                },
                {
                    name: 'Laptop ThinkPad 14s',
                    price: 22390000
                },
                {
                    name: 'Laptop HP Probook 450',
                    price: 22390000
                },
                {
                    name: 'Lenovo ThinkPad T470s 450',
                    price: 22390000
                }
            ]
        }
        this.changeName = this.changeName.bind(this);
        this.changePrice = this.changePrice.bind(this);
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    addItem = () => {
        if (!this.state.laptop.find(item => item.name === this.state.name)) {
            this.setState({
                laptop: [
                    ...this.state.laptop,
                    {name: this.state.name, price: this.state.price}
                ],
                name: "",
                price: ""
            })
        }
    }

    edit = (item, index) => {
        this.setState({
            action: 'UPDATE ITEM',
            name: item.name,
            price: item.price,
            index: index
        })
    }

    updateItem = () => {
        let data = this.state.laptop;
        data.map((item, index) => {
            if (this.state.index === index) {
                item.name = this.state.name;
                item.price = parseInt(this.state.price);
            }
        })

        this.setState({
            laptop: data,
            name: '',
            price: '',
            action: 'ADD ITEM'
        })
    }

    deleteItem = (name) => this.setState({
        laptop: this.state.laptop.filter(item => item.name !== name)
    })

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>{this.state.action}</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="" className="form-control" onChange={this.changeName}
                                   value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" name="" className="form-control" onChange={this.changePrice}
                                   value={this.state.price}/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary"
                                    onClick={this.state.action === 'ADD ITEM' ? this.addItem : this.updateItem}>Add
                            </button>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h1>List Products</h1>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Modify</th>
                                <th scope="col">Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.laptop.map((laptop, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{laptop.name}</td>
                                    <td>{laptop.price}</td>
                                    <td>
                                        <button className="badge badge-warning"
                                                onClick={() => this.edit(laptop, index)}>Modify
                                        </button>
                                    </td>
                                    <td>
                                        <button className="badge badge-danger"
                                                onClick={() => this.deleteItem(laptop.name)}>Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
