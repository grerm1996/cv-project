import React, { useState } from 'react';

const Education = (props) => {
    const [school, schoolSet] = useState('');
    const [degree, degreeSet] = useState('');
    const [date, dateSet] = useState('');

    const handleChange = (e) => {
        let category = e.target.name;
        let categorySet = e.target.name + 'Set';
        let value = e.target.value;
        eval(categorySet)(value);
      };
    
    if (props.submitted == false) {

        return (
        <form>
            <fieldset>
            <legend>Education</legend>
                <input name='school' placeholder='School name' type="text" value={school} onChange={handleChange} />

                <input name='degree' placeholder='Degree earned' type="text" value={degree} onChange={handleChange} />

                <div className='datecontainer'>
                <label>
                Date of degree completion: 
                <input name='date' placeholder='Date of degree completion' type="date" value={date} onChange={handleChange} />
                </label>
                </div>
            </fieldset>
        </form>
        );}

    if (props.submitted == true) {
        return (
        <div className='section'>
            <h3>Education</h3>
                <p>{degree}</p>
                <p>{school}</p>
                <p>Completed {props.submitted}</p>
            </div>
        )    
}}

/* class Education extends Component {

    constructor(props) {
        super(props);

        this.state = {
            school: '',
            degree: '',
            date: '',
        }
    }

    handleChange = (e) => {
        let category = e.target.name;g
        this.setState({
            [category]: e.target.value,
        });
    };



    render() {

        if (this.props.submitted == false) {

            return (
                <form>
                    <fieldset>
                    <legend>Education</legend>
                        <input name='school' placeholder='School name' type="text" value={this.state.school} onChange={this.handleChange} />

                        <input name='degree' placeholder='Degree earned' type="text" value={this.state.degree} onChange={this.handleChange} />

                        <div className='datecontainer'>
                        <label>
                        Date of degree completion: 
                        <input name='date' placeholder='Date of degree completion' type="date" value={this.state.date} onChange={this.handleChange} />
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



} */

export default Education;
