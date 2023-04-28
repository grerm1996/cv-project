import React, { useState } from 'react';

const Experience = (props) => {
    const [employer, employerSet] = useState('');
    const [position, positionSet] = useState('');
    const [duties, dutiesSet] = useState('');
    const [startdate, startdateSet] = useState('');
    const [enddate, enddateSet] = useState('');


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
                <legend>Experience</legend>
                    <input name='employer' placeholder='Employer name' type="text" value={employer} onChange={handleChange} />

                    <input name='position' placeholder='Position held' type="text" value={position} onChange={handleChange} />

                    <input name='duties' placeholder='Position responsibilities' type="text" value={duties} onChange={handleChange} />

                    <div className='datecontainer'>
                    <label>
                    Employment start: 
                    <input name='startdate' type="date" value={startdate} onChange={handleChange} />
                    </label>

                    <label>
                    Employment end: 
                    <input name='enddate' type="date" value={enddate} onChange={handleChange} />
                    </label>
                    </div>
                </fieldset>
            </form>

        )}

        if (props.submitted == true) {
            return (
                <div className='section'>
                    <h3>Work Experience</h3>
                        <p>{employer}</p>
                        <p>{position}</p>
                        <p>{duties}</p>
                        <p>{startdate}</p>
                        <p>{enddate}</p>
    
                </div>
                )    
        }
    }


/* class Experience extends Component {

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
                    <legend>Experience</legend>
                        <input name='employer' placeholder='Employer name' type="text" value={this.state.employer} onChange={this.handleChange} />

                        <input name='position' placeholder='Position held' type="text" value={this.state.position} onChange={this.handleChange} />

                        <input name='duties' placeholder='Position responsibilities' type="text" value={this.state.duties} onChange={this.handleChange} />

                        <div className='datecontainer'>
                        <label>
                        Employment start: 
                        <input name='startdate' type="date" value={this.state.startdate} onChange={this.handleChange} />
                        </label>

                        <label>
                        Employment end: 
                        <input name='enddate' type="date" value={this.state.enddate} onChange={this.handleChange} />
                        </label>
                        </div>
                    </fieldset>
                </form>

            )
        }

        if (this.props.submitted == true) {
            return (
            <div className='section'>
                <h3>Work Experience</h3>
                    <p>{this.state.employer}</p>
                    <p>{this.state.position}</p>
                    <p>{this.state.duties}</p>
                    <p>{this.state.startdate}</p>
                    <p>{this.state.enddate}</p>

            </div>
            )    
    }
    }



}*/

export default Experience;
 