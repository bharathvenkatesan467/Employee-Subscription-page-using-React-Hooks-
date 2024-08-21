import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Form = () => {
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [date, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [stime, setStartTime] = useState('');
  const [etime, setEndTime] = useState('');
  const [job, setJob] = useState('');
  const [team, setSelectTeam] = useState('');
  const [desiganation, setSelectDesiganation] = useState('');
  const [hours, setBill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { firstname,middlename,lastname,date, email, phone ,gender ,stime ,etime,job,team,desiganation,hours});
  };

  return (
    <div class="tdiv">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div class="d1">
        <label>
          FirstName <span style={{ color: 'red' }}>*</span>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Middle Name <span style={{ color: 'red' }}>*</span>
          <input
            type="text"
            value={middlename}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </label>
        <label>
          Last Name 
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        </div>
        <div class="d2">
        <label>
          Birth Date 
          <input
            type="date"
            value={date}
            onChange={(e) => setDOB(e.target.value)}
            required
          />
        </label>
        <label>
          Email 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone 
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        </div>
        <div class="d3">
        <label>
          Select Gender 
          <select id="gender" type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required>
            <option>choose your gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </label>
        <label>
          Start Time 
          <input
            type="time"
            value={stime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </label>
        <label>
        End Time
          <input
            type="time"
            value={etime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </label>
        </div>
        <div class="d4">
        <label>
          Job Position 
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </label>
        <label>
          Select Team 
          <select  type="text"
            value={team}
            onChange={(e) => setSelectTeam(e.target.value)}
            required>
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <label>
          Select Designation 
          <select  type="text"
            value={desiganation}
            onChange={(e) => setSelectDesiganation(e.target.value)}
            required>
            <option>Select</option>
            <option>HR</option>
            <option>TL</option>
            <option>MANAGER</option>
          </select>
        </label>
        </div>
        <div class="d5">
        <label>
          Billable Hours
          <input
            type="text"
            value={hours}
            onChange={(e) => setBill(e.target.value)}
            required
          />
        </label>
        </div>

        <button type="submit">Submit</button>
    </form>
    </div>
  );
};

// export default Form;
ReactDOM.render(<Form/>,document.getElementById('root'));


