import { Button, Grid, Typography } from '@mui/material';
import googleButton from "../google.png"
import { GoogleLogin } from 'react-google-login';
import { axios } from 'axios';


const GoogleButton = () => {

    const responseGoogle = async (response) => {
        console.log(response);
        const id_token = response.id_token;
        let options = {
            Authorization: id_token
        }   
        const authUrl =  BASE_URL + POSTFIX + "/auth";
        const creds = await axios.get(authUrl, options)
        localStorage.setItem("id_token" , id_token)
        localStorage.setItem('aws_cred' , JSON.stringify(creds));

    }

    const failureGoogle = async (response) => {
        console.log(response);
      

    }
    return <Grid item textAlign="center" sx={{ background: "#FFFFFF", boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)", borderRadius: "10px" }}>
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={failureGoogle}
            cookiePolicy={'single_host_origin'}
            render={(renderProps) => <Button container
                justifyContent={"flex-start"}
                alignItems="center"
                sx={{
                    borderRadius: "10px",
                    boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
                    padding: "16px"
                }}
                onClick={renderProps.onClick} disabled={renderProps.disabled}
            >
                <Grid item>
                    <img alt="google-logo" src={googleButton}
                        style={{ height: "40px", width: "40px", marginTop: "4px" }} />
                </Grid>
                <Grid item sx={{ width: "190px" }}>
                    <Typography
                        style={{
                            fontFamily: "Nunito",
                            fontWeight: 800,
                            fontSize: "16px",
                            marginLeft: "8px",
                            lineHeight: "19px",
                            width: "186px",
                            color: "#282846",
                            paddingTop: "2px",
                        }}>Login with Google</Typography>
                </Grid>

            </Button>

            }
        />
    </Grid >
}

export default GoogleButton;