import React, { Component } from 'react';

class Education extends Component {

    constructor(props) {
        super(props);

        this.state = {
            school: '',
            degree: '',
            date: '',
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
        console.log('school: ' + this.state.school);
        console.log('degree: ' + this.state.degree);
        console.log('date: ' + this.state.date);
    };




    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                School name: 
                <input name='school' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                Degree earned: 
                <input name='degree' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                Graduation date: 
                <input name='date' type="date" value={this.state.value} onChange={this.handleChange} />
                </label>


                <input type="submit" value="Submit" />
            </form>

        )
    }



}

export default Education;
