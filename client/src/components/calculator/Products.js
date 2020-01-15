import React from 'react'
import axios from 'axios'

import { getProducts } from '../../redux/actions/productAction'
import store from '../../redux/store'

import Table from '../table/Table'


class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterOption: null,
            showProducts: true,
        }
    }

    componentDidUpdate() {
        if(this.state.filterOption !== null) {
            axios.get(`https://stark-island-29614.herokuapp.com/app/v1/products/?sort=${this.state.filterOption}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                }
            )
                .then(res => {
                    store.dispatch(getProducts(res.data));

                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    filterHandler = (event) => {
        this.setState({ filterOption: event.target.value })

    }

    render() {
        return (
            <React.Fragment>
                <div className="main-div">
                    <h3>Products</h3>
                    <label htmlFor="sort">Filter by:
                <select name="filterOption" id="sort" onChange={this.filterHandler}>
                            <option value="date:desc">Last Purchase</option>
                            <option value="date:asc">First Purchase</option>
                            <option value="price:desc">Highest Price</option>
                            <option value="price:asc">Lowest Price</option>
                        </select>
                    </label>
                </div>
                <Table showProducts={this.state.showProducts}/>
            </React.Fragment>
        )
    }
}

export default Products