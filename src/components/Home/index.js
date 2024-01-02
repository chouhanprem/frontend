import { Box, Button } from "@material-ui/core";
import React from "react";
import homeAv from "../../assets/images/homeAv.png"
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Style.css"
import { Helmet } from "react-helmet-async";



export default function Home() {
  return (
    <Box className="homeMain">
        <Helmet>
        <title>CareerPane</title>
        <meta
          name="description"
          content="Explore diverse career opportunities with CareerPane, your premier job portal. Discover the latest job listings, find employment opportunities, and embark on a journey towards professional development. Browse through our extensive job vacancies and access valuable resources for career guidance. Start your job search today with CareerPane!"
        />
        <meta
          name="keywords"
          content="job portal, career opportunities, job search, employment, job listings, professional development, job vacancies, career guidance, careerpane, careerpane jobs, startup jobs"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
        
        <Box className="homeTextmain">
            <Box  className="homeText">
            <span style={
                {
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "rgb(103 21 255)"
                }
            }>
            Empowering Futures
            </span>
            <span >
            Connecting Fresh Talent to Opportunities!
            </span>
            </Box>
            <Box>
            <a href="/jobs">
                <Button variant="contained" className="bgbtn" color="primary" >
                    <span className="findJobs">
                     <span style={{fontWeight:900}}>
                     Find Jobs
                    </span> 
                    <span className="findJobs">
                    <AiOutlineArrowRight/>
                    </span>
                    </span>
                </Button>
            </a>
            </Box>  
        </Box>
        <Box className="HomeImg">
            <img src={homeAv} alt="homeAv" />
        </Box>
    </Box>
  );

}