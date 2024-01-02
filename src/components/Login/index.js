import React from "react";
import logo from "../../assets/images/loginImg.png"
import { Box } from "@material-ui/core";
import "./Style.css"
import LoginForm from "../LoginForm";


export default function Login(){

    return(
        <Box className="signMain">
            <Box className="signLogo">
            <img src={logo} alt="logo"/>
            </Box>
            <Box>
                <LoginForm/>
            </Box>
        </Box>
    )
}