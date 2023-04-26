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
        this.setState({
            [category]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('name: ' + this.state.name);
        console.log('email: ' + this.state.email);
        console.log('phone: ' + this.state.phone);
    };




    render() {

        if (this.props.submitted == false) {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input name='name' type="text" value={this.state.name} onChange={this.handleChange} />
                </label>

                <label>
                E-mail:
                <input name='email' type="text" value={this.state.email} onChange={this.handleChange} />
                </label>

                <label>
                Phone number:
                <input name='phone' type="text" value={this.state.phone} onChange={this.handleChange} />
                </label>


                <input type="submit" value="Submit" />
            </form>

        )}

        if (this.props.submitted == true) {
            return (
                <div className='section'>
                    <p>{this.state.name}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.phone}</p>

                </div>

            )
        }
    }



}

export default General;
