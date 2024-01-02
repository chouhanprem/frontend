import { Box, CardActions, CardContent, Card, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Style.css";
import { Helmet } from "react-helmet-async";
// import AdSenseComponent from "../AdSense/AdsenseComponent";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [deleteJobId, setDeleteJobId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const logUser = localStorage.getItem("user");
  const logOption = logUser ? true : false;

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    let jobData = await fetch("https://api.careerpane.com/jobs");
    jobData = await jobData.json();
    setJobs(jobData);
  };

  const handleDelete = (jobId) => {
    setDeleteJobId(jobId);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      // Make a DELETE request to your backend
      await fetch(`https://api.careerpane.com/admin/job/${deleteJobId}`, {
        method: "DELETE",
      });
      alert("Job deleted successfully");

      // Refresh the job list after deletion
      getJobs();
    } catch (error) {
      console.error("Error deleting the job:", error);
    } finally {
      // Close the modal after deletion
      setModalOpen(false);
      setDeleteJobId(null);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setDeleteJobId(null);
  };

  return (
    <Box className="mainJob">
       <Helmet>
        <title>Job Listings - CareerPane</title>
        <meta
          name="description"
          content="Explore the latest job listings on CareerPane. Find diverse career opportunities and job vacancies. Start your job search and discover exciting employment options."
        />
        <meta
          name="keywords"
          content="job listings, career opportunities, job search, employment, job vacancies, professional development, job listings careerpane, careerpane jobs"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
      <Box className="allJobs">
        {jobs &&
          jobs.map((job, index) => (
            
            <Card key={job._id} sx={{ maxWidth: 600 }} className="jobcard">
              <CardContent>
              {/* <AdSenseComponent adSlot="9805664252" /> */}
                <Box className="imgAlign">
                  <img src={job.logo} alt="company logo" className="joblogo" />
                </Box>
                <Box className="jobDesc">
                <Typography className="subDescA" > <Typography className="titlename">Company Name </Typography>: {job.companyName}</Typography>
            <Typography className="subDescA" > <Typography className="titlename"> Role</Typography> : {job.role}</Typography>
            <Typography className="subDescA" > <Typography className="titlename">Stream</Typography> : {job.stream}</Typography>
            <Typography className="subDescA" > <Typography className="titlename">Specialization</Typography> : {job.specialization}</Typography>
            <Typography className="subDescA" > <Typography className="titlename">Criteria</Typography> : {job.criteria}</Typography>
            <Typography className="subDescA" > <Typography className="titlename">passout</Typography> :{job.passout}</Typography>
                </Box>
                {/* <AdSenseComponent adSlot="9805664252" /> */}
              </CardContent>
              <CardActions className="applyBtn">
                <Link to={`/viewjobs/${job._id}`}>
                  <Button size="small" variant="contained" className="bgbtn" color="primary">
                    View
                  </Button>
                </Link>

                {logOption && (
                  <Button
                    size="small"
                    variant="contained"
                    className="bgbtn"
                    color="secondary"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </Button>
                )}

                {logOption && 
                <Link to={`/updatejob/${job._id}`} >
                    <Button
                    size="small"
                    variant="contained"
                    className="bgbtn"
                    color="secondary"
                  >
                    Update Job
                  </Button>
                </Link>
                }
              </CardActions>
            </Card>
          ))}
      </Box>
      {/* <Box className="ads">ads</Box> */}

      {/* Confirmation Modal */}
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this job?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDelete} color="secondary">
            Yes
          </Button>
          <Button onClick={closeModal} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
