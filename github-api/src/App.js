import React from 'react';
import SearchResults from './components/SearchResults';
import Navbar from './components/Navbar';
import axios from 'axios';

class App extends React.Component {
  state = {
    items: [],
    // status: "Input the Username for Github"
  }

  creatRepo = (data) => {
    axios.post(`http://localhost:9000/tasks`, data)
      .then(response => {
        this.setState({ items: response.data })
        console.log('response.data', response.data);
      })
      .catch(error => {
        console.log("Error", error)
      })
    // this.readRepo()
  }

  readRepo = () => {
    console.log('readrepo');
    axios.get(`http://localhost:9000/tasks`)
      .then(response => {
        this.setState({ items: response.data })
        console.log('response.data', response.data);
      })
      .catch(error => {
        console.log("Error", error)
        // this.setState({ items: [], status: "User name is not found" })
      })
    // console.log('this.state.items', this.state.status);
    // this.state.items.message ? this.setState({ status: "no data" }) : this.setState({ status: "there is no data" })


  }

  updateRepo = (item) => {
    console.log("change in repo id ", item);
    axios.put(`http://localhost:9000/tasks`, item)
      .then(response => {
        this.setState({ items: response.data })
        console.log('response.data', response.data);
      })
      .catch(error => {
        console.log("Error", error)
      })
    // this.readRepo()
  }
  deleteRepo = (item) => {
    axios.delete(`http://localhost:9000/tasks`, item)
      .then(response => {
        this.setState({ items: response.data })
        console.log('response.data', response.data);
      })
      .catch(error => {
        console.log("Error", error)
      })
    // this.readRepo()
  }

  reload = () => {
    window.location.reload();
  }

  render() {
    const { reload, readRepo, creatRepo, deleteRepo, updateRepo } = this
    const { items } = this.state
    return (
      <>
        <Navbar readRepo={readRepo} reload={reload} creatRepo={creatRepo} />
        <br></br>
        <SearchResults updateRepo={updateRepo} deleteRepo={deleteRepo} items={items} />
        {/* <h1 align="center" >{this.state.status}</h1> */}
      </>
    );
  }
}

export default App;


