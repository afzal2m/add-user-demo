import * as Yup from 'yup'
export const  errorInputValidation = Yup.object().shape({
  fName: Yup.string().required('Please provide your First Name').matches(/^[a-z]{3,}$/i),
  lName: Yup.string().required('Please provide your Last Name').matches(/^[a-z]{3,}$/i),
  date: Yup.string().required('Please provide your birth date').matches(
    /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    "Invalid date format. Please use YYYY-MM-DD."
  ),
  adress: Yup.string().required('Please provide your adress').matches(/^[a-zA-Z0-9\s,'-]*$/, "Invalid characters in address"),
  StreetAddress: Yup.string().required('Please provide your Street Address').matches(/^[a-zA-Z0-9\s,'-]*$/, "Invalid characters in address"),
  city: Yup.string().required('Please provide your city').matches(/^[a-z]{3,}$/i),
  file: Yup.string().required('Please choose your photo'),
   email: Yup.string().required('Please provide your email').matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email address"),
   Height: Yup.string().required('Please provide your Height'),
   weight: Yup.number().required('Please provide your weight'),
   YardDash: Yup.string().required('Please provide your Yard-Dash'),
   comments: Yup.string().required('write some thing about YourSelf'),
   state: Yup.string().required('Please Provide Your State'),
   gender: Yup.string().required('Please Provide Your gender'),
})