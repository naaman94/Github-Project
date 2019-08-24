import React, { Component } from 'react'
import Slice from './Slice'
export class SearchResults extends Component {
    state = {
        c: 10//counter for number on conntent in search result 
    };

    seeMore = () => {
        this.setState({ c: this.state.c + 10 })
    }
    render() {
        const { items, deleteRepo, updateRepo } = this.props
        // console.log('searchItem', searchItem);
        let searchItem = [...items.slice(0, this.state.c)]
        let list = searchItem.map((item, i) => (<Slice updateRepo={updateRepo} deleteRepo={deleteRepo} key={i} i={i} item={item} />));
        if (items[0]) {
            return (<>
                <div className="col-xl-9  mt-4  mx-auto">
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">Title</th>
                                <th scope="col">Repo state</th>
                                <th scope="col">Check</th>
                                <th scope="col">Is Private</th>
                                <th scope="col">Language</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <button className="btn btn-link" style={{ visibility: items.length <= 10 ? 'hidden' : 'visible' }} onClick={this.seeMore.bind(this.state.c)} >See more</button>
                </div>
            </>
            );
        }
        else { return (<></>); }
    }
}
export default SearchResults

