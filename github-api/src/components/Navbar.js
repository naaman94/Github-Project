import React, { Component } from 'react'
export class Navbar extends Component {
    state = {
        title: "",
        private: false,
        language: ""
    }

    changeData = (e) => {
        if (e.target.name === "private" && e.target.value === "true") {
            console.log('e.taret.value', e.target.value);
            this.setState({ [e.target.name]: true });
        }
        else if (e.target.name === "private" && e.target.value === "false") {
            this.setState({ [e.target.name]: false });
        } else { this.setState({ [e.target.name]: e.target.value }); }
        console.log('e.taret.value', e.target.value);

    }
    sendData = (e) => {
        e.preventDefault();//prevent form to default
        let regTestTitle = /^[\S]/.test((this.state.title))
        let regTestLanguage = /^[\S]/.test((this.state.language))
        if (regTestLanguage && regTestTitle) {
            this.props.creatRepo(this.state)
            console.log('this.state', this.state);
            this.setState({
                title: "",
                private: false,
                language: ""

            })
        }
    }
    render() {
        const { sendData, changeData } = this
        return (
            <>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
                    <form onSubmit={sendData} className="form-inline container" >
                        <input value={this.state.title} name="title" onChange={changeData} className="form-control m-1 col-9 col-lg-3 " type="text" placeholder="Repo Title" aria-label="Repo Title" />
                        <input value={this.state.language} name="language" onChange={changeData} className="form-control m-1 col-9 col-lg-3 " type="text" placeholder="Repo Language" aria-label="Repo Language" />
                        <select value={this.state.private} onChange={changeData} name="private" className="input-group custom-select col-lg-2" id="inputGroupSelect01">
                            <option value="false">Public</option>
                            <option value="true">Private</option>
                        </select>

                        <button className="btn btn-outline-primary  col-12 col-lg-3 my-sm-0" value="Submit" type="submit">ADD</button>
                    </form>
                    <button onClick={this.props.readRepo} className="btn btn-outline-info  col-12 col-lg-2 my-sm-0" type="button">Get All Repo</button>

                </nav>
            </>
        );
    }
}


export default Navbar
