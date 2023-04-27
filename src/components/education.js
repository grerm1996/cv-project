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

        if (this.props.submitted == false) {

            return (
                <form>
                    <fieldset>
                    <legend>Education</legend>
                        <input name='school' placeholder='School name' type="text" value={this.state.value} onChange={this.handleChange} />

                        <input name='degree' placeholder='Degree earned' type="text" value={this.state.value} onChange={this.handleChange} />

                        <div className='datecontainer'>
                        <label>
                        Date of degree completion: 
                        <input name='date' placeholder='Date of degree completion' type="date" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        </div>
                    </fieldset>
                </form>

            )
        }

        if (this.props.submitted == true) {
            return (
            <div className='section'>
                <h3>Education</h3>
                    <p>{this.state.degree}</p>
                    <p>{this.state.school}</p>
                    <p>Completed {this.state.date}</p>
                </div>
            )    
    }
    }



}

export default Education;
