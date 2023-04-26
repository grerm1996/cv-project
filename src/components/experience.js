import React, { Component } from 'react';

class Experience extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employer: '',
            position: '',
            duties: '',
            startdate: '',
            enddate: '',
        }
    }

    handleChange = (e) => {
        let category = e.target.name;
        this.setState({
            [category]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('employer: ' + this.state.employer);
        console.log('position: ' + this.state.position);
        console.log('duties: ' + this.state.duties);
        console.log('start: ' + this.state.startdate);
        console.log('end: ' + this.state.enddate);
    };




    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Employer: 
                <input name='employer' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                Position held: 
                <input name='position' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                Position responsibilities: 
                <input name='duties' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                Employment start: 
                <input name='startdate' type="date" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                Employment end: 
                <input name='enddate' type="date" value={this.state.value} onChange={this.handleChange} />
                </label>


                <input type="submit" value="Submit" />
            </form>

        )
    }



}

export default Experience;
