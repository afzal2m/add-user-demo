import { Formik } from 'formik'
import { errorInputValidation } from './SignUpSchema';

export const SignUp = () => {

  return (
    <Formik
      initialValues={{ fName: '', lName: '', date: '', adress: '', StreetAddress: '', gender: '', city: '', file: '', email: '', Height: '', weight: '', state: '', YardDash: '', comments: '' }}
      validationSchema={errorInputValidation}
      onSubmit={values => console.log(values)}>
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <div id='root' style={{ backgroundColor: '#7C56BD' }}>
          <form className="row g-3  w-50 h-50 text-dark text-start mx-auto p-4" onSubmit={handleSubmit} style={{ backgroundColor: '#F7F2FF' }}>
            <div className='row rounded-2' style={{ backgroundColor: '#0E4533' }}>
              <div className="row g-3 col-6 p-4">
                <img src={'/images/Player.png'} alt="..." />
              </div>
              <div className="row g-3 col-6 mx-auto p-4 text-white">
                <h1>Football Registration Form</h1>
                <h3>Register to the football team below</h3>
              </div>
            </div>
            <div className="col-md-6" >
              <label htmlFor="inputFirstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="Enter your First Name"
                onChange={handleChange('fName')}
                value={values.fName} />
              {touched.fName && errors.fName && <div style={{ color: 'red' }}>{errors.fName}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="inputLastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Enter your Last Name"
                onChange={handleChange('lName')}
                value={values.lName} />
              {touched.lName && errors.lName && <div style={{ color: 'red' }}>{errors.lName}</div>}
            </div>
            <label htmlFor="Date of Birth">Date of Birth</label>
            <input type="date" id="Date of Birth" name="date" className='col-6'
              onChange={handleChange('date')}
              value={values.date} />
            {touched.date && errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label" >
                Home Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                onChange={handleChange('adress')}
                value={values.adress} />
              {touched.adress && errors.adress && <div style={{ color: 'red' }}>{errors.adress}</div>}
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Street Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                onChange={handleChange('StreetAddress')}
                value={values.StreetAddress} />
              {touched.StreetAddress && errors.StreetAddress && <div style={{ color: 'red' }}>{errors.StreetAddress}</div>}
            </div>
            <div className="">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity"
                onChange={handleChange('city')}
                value={values.city} />
              {touched.city && errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
            </div>
            <div>
              <h6 className="">Gender</h6>
              <div className="form-check" onChange={handleChange('gender')}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Female
                </label>
              </div>
              <div className="form-check" onChange={handleChange('gender')}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Male
                </label>
              </div>
              {touched.gender && errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}
            </div>

            <div>
              <label htmlFor="inputCity" className="form-label">
                Upload Your Photo
              </label>
              <form action="/action_page.php">
                <input type="file" id="myFile" name="filename" className='form-control'
                  onChange={handleChange('file')}
                  value={values.file} />
                {touched.file && errors.file && <div style={{ color: 'red' }}>{errors.file}</div>}
              </form>
            </div>
            <div className="col-7">
              <label htmlFor="inputAddress2" className="form-label">
                Player E-mail
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="ex: myname@example.com"
                onChange={handleChange('email')}
                value={values.email} />
              {touched.email && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
            <div className="col-md-7">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select" onChange={handleChange('state')}>
                <option value={values.state}>Select your state</option>
                <option>Mumbai</option>
                <option>Rajasthan</option>
                <option>Delhi</option>
                <option>Punjab</option>
                <option>Haryana</option>
                <option>Chandigarh</option>
                <option>Gujrat</option>
              </select>
            </div>
            {touched.state && errors.state && <div style={{ color: 'red' }}>{errors.state}</div>}
            <div>
              <label htmlFor="inputCity" className="form-label">
                Offense or Defence
              </label>
              <input type='checkbox' id="Cricket" value='Cricket' name='skill'  onChange={handleChange} />
              <label>Cricket</label>
              <input type='checkbox' id="Vollyball" value='Vollyball' name='skill'  onChange={handleChange} />
              <label>Vollyball</label>
              <input type='checkbox' id="Hockey" value='Hockey' name='skill' onChange={handleChange} />
              <label>Hockey</label>
              <input type='checkbox' id="Golf" value='Golf' name='skill' onChange={handleChange} />
              <label>golf</label>
            </div>
            <div className="col-7">
              <label htmlFor="inputAddress2" className="form-label">
                Height
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="6'10"
                onChange={handleChange('Height')}
                value={values.Height} />
              {touched.Height && errors.Height && <div style={{ color: 'red' }}>{errors.Height}</div>}
            </div>
            <div className="col-7">
              <label htmlFor="inputAddress2" className="form-label">
                Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="220"
                onChange={handleChange('weight')}
                value={values.weight} />
              {touched.weight && errors.weight && <div style={{ color: 'red' }}>{errors.weight}</div>}
            </div>
            <div className="col-7">
              <label htmlFor="inputAddress2" className="form-label">
                40-Yard Dash
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="220"
                onChange={handleChange('YardDash')}
                value={values.YardDash} />
              {touched.YardDash && errors.YardDash && <div style={{ color: 'red' }}>{errors.YardDash}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Comments</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
                onChange={handleChange('comments')}
                value={values.comments} ></textarea>
              {touched.comments && errors.comments && <div style={{ color: 'red' }}>{errors.comments}</div>}
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn bg-success btn-lg my-4 text-light">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  )
}