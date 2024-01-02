import React from 'react';
import { Formik, Field, Form } from 'formik';
import {  Button, Paper } from '@material-ui/core';
import "./Style.css"
import axios from 'axios';

// Example JSON object representing form fields
const formFields = [
  { name: 'companyName', label: 'Company Name', type: 'text' },
  { name: 'role', label: 'Role', type: 'text' },
  { name: 'specialization', label: 'Specialization', type: 'text' },
  { name: 'stream', label: 'Stream', type: 'text' },
  { name: 'criteria', label: 'Criteria', type: 'text' },
  { name: 'logo', label: 'Logo Link', type: 'text' },
  { name: 'passout', label: 'Passout', type: 'text' },
  { name: 'applyLink', label: 'Apply Link', type: 'text' },
  { name: 'Description', label: 'Description', type: 'textarea' }, // Use 'textarea' for a large text box
];

const AddJob = () => {
  // Initial form values
  const initialValues = {};
  formFields.forEach((field) => {
    initialValues[field.name] = '';
  });

  const validate = (values) => {
    const errors = {};
    // Add your validation logic here
    return errors;
  };

  // Submission function (add your submission logic)
  const onSubmit = (values, { setSubmitting }) => {
    axios.post('https://api.careerpane.com/admin/addjob', values)
    .then(response => {
      alert("Success") // Handle the response as needed
    })
    .catch(error => {
      console.error('Error submitting the form:', error);
    })
    .finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <Paper className='paperField'>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form className='formStyle'>
          {formFields.map((field) => (
            <div key={field.name}>
              <div className='fieldStyle'>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <Field as="textarea" id={field.name} name={field.name} style={{ height: '10em', width: '20em' }} />
                ) : (
                  <Field type={field.type} id={field.name} name={field.name} style={{ width: '20em' ,height:"2em" }} />
                )}
              </div>
            </div>
          ))}
          <Button variant="contained" className="bgbtn" color="primary" type="submit">Submit</Button>
        </Form>
      </Formik>
    </Paper>
  );
};

export default AddJob;
