import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import {  Button, Paper } from '@material-ui/core';
import "../AddJob/Style.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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

const UpdateJob = () => {
  const params = useParams();
  const id = params.id;
  const [job, setJob] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      try {
        let response = await fetch(`https://api.careerpane.com/job/${id}`);
        let jobData = await response.json();
        setJob(jobData);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };
  
    getJobs();
  }, [id]);

  const initialValues = {
    companyName: job.companyName || '',
    role: job.role || '',
    specialization: job.specialization || '',
    stream: job.stream || '',
    criteria: job.criteria || '',
    logo: job.logo || '',
    passout: job.passout || '',
    applyLink: job.applyLink || '',
    Description: job.Description || '',
  };
  const validate = (values) => {
    const errors = {};
    // Add your validation logic here
    return errors;
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.put(`https://api.careerpane.com/admin/job/${id}`, values);
      alert('Update Success');
      console.log("🚀 ~ file: index.js:62 ~ onSubmit ~ response:", response)
      navigate('/jobs', { replace: true });
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper className='paperField'>
    {job._id &&  <Formik
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
                  <Field as='textarea' id={field.name} name={field.name} style={{ height: '10em', width: '20em' }} />
                ) : (
                  <Field type={field.type} id={field.name} name={field.name} style={{ width: '20em', height: '2em' }} />
                )}
              </div>
            </div>
          ))}
          <Button variant='contained' className='bgbtn' color='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Formik>
    }   
    </Paper>
  );
};

export default UpdateJob;
