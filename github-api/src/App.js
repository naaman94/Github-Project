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
        // console.log('response.data from creatRepo -app -react', response.data);
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
        // console.log('response.data from readRepo -app -react', response.data);
      })
      .catch(error => {
        console.log("Error", error)
      })


  }

  updateRepo = (item) => {
    console.log("change in repo id ", item);
    axios.put(`http://localhost:9000/tasks`, item)
      .then(response => {
        this.setState({ items: response.data })
        // console.log('response.data from updateRepo -app -react', response.data);
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
        // console.log('response.data from delete -app -react', response.data);
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
      </>
    );
  }
}

export default App;


