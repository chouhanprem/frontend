import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useState } from 'react';
import { Box, Button, Paper, Typography } from "@material-ui/core";
import "./Style.css"
import { AiOutlineExport } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
// import AdSenseComponent from "../AdSense/AdsenseComponent";


export default function ViewJob(){
    const params = useParams()
    const id = params.id
    const [job, setJob] = useState([]);
    const [jobTitle,setjobTitle] = useState("")

  useEffect(() => {
    getJobs();
  });

  const getJobs = async () => {
    let jobData = await fetch(`https://api.careerpane.com/job/${id}`);
    jobData = await jobData.json();
    setJob(jobData);
    setjobTitle(jobData.companyName)
  }
    return(
        <Box className="mainBox">
           <Helmet>
              <title>{`${jobTitle} Details - CareerPane`}</title>
              <meta
                name="description"
                content={`Explore detailed information about the job "${jobTitle}" on CareerPane. Find key details, requirements, and application instructions. Start your career journey with this exciting opportunity.`}
              />
              <meta
                name="keywords"
                content={`job details, ${jobTitle}, career opportunity, job requirements, application instructions`}
              />
              {/* Add more meta tags as needed */}
            </Helmet>
        <Paper elevation={2} className="mainPaper">
        {job && 
            <Box>
              
            <Box className="imgAlign">
            <img src={job.logo} alt="company logo" className="joblogo"/>
            </Box>
            <Box className="jobDesc2">
            {/* <AdSenseComponent adSlot="9805664252" /> */}
            <Typography className="subDesc" > <Typography className="titlename">Company Name </Typography>: {job.companyName}</Typography>
            <Typography className="subDesc" > <Typography className="titlename"> Role</Typography> : {job.role}</Typography>
            <Typography className="subDesc" > <Typography className="titlename">Stream</Typography> : {job.stream}</Typography>
            <Typography className="subDesc" > <Typography className="titlename">Specialization</Typography> : {job.specialization}</Typography>
            <Typography className="subDesc" > <Typography className="titlename">Stream </Typography>: {job.stream}</Typography>
            <Typography className="subDesc" > <Typography className="titlename">Criteria</Typography> : {job.criteria}</Typography>
            <Typography className="subDesc" > <Typography className="titlename">passout</Typography> :{job.passout}</Typography>
            <Typography> <Typography className="titlename">Description:</Typography>
            {job.Description}
            </Typography>
            {/* <AdSenseComponent adSlot="9805664252" /> */}
            </Box>
            <Box className="btnApplyJob">
            <a href={job.applyLink} target="_blank" rel="noreferrer">
                <Button size="small" variant="contained" className="bgbtn" color="primary">
                    <span style={{display:"flex", gap:"5px"}}>
                        <span style={{fontWeight:900}}>
                        Apply now
                        </span> 
                        <span style={{fontWeight:900}} className="findJobs">
                        <AiOutlineExport/>
                        </span>
                    </span>
              </Button>
              </a>
              </Box>
            </Box>
        }
        </Paper>
        </Box>
    ) 

}