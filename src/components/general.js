import React, { Component } from 'react';

class General extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
        }
    };


    handleChange = (e) => {
        let category = e.target.name;
        console.log(category)
        this.setState({
            [category]: e.target.value,
        });
    };


    render() {

        if (this.props.submitted == false) {

        return (
            <form>
                <fieldset>
                    <legend>General</legend>
                    <input name='name' placeholder='Name' type="text" value={this.state.name} onChange={this.handleChange} />

                    <input name='email' placeholder='E-mail address' type="text" value={this.state.email} onChange={this.handleChange} />

                    <input name='phone' placeholder='Phone number' type="text" value={this.state.phone} onChange={this.handleChange} />
                </fieldset>
            </form>

        )}

        if (this.props.submitted == true) {
            return (
                <div className='section'>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.email}</p>
                    <p>{this.state.phone}</p>
                </div>
            )
        }
    }

}

export default General;
