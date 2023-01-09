import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useState } from 'react';

const NoteModal = ({ onClose, lable }) => {
    const [note, setNote] = useState({
        title: "",
        description: "",
        category: "",
        date: "",
        time: ""
    })

    const onChange = (e) => {
        setNote({ ...note, [e.target.id]: [e.target.value] })
    }
    return <Grid container justifyContent="center">
        <Grid item container flexDirection="column" alignContent="stretch"
            sx={{
                background: "#FFFFFF",
                boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)",
                borderRadius: "10px",
                padding: "40px 20px 10px 20px"
            }}
            lg={4}
            md={9}
            xs={12}
        >
            <Grid item
                textAlign="center"
                fontSize={30}
                fontWeight={500}
                color="#29A19C"
            >{lable} Note</Grid>
            <Grid item flexDirection="column" alignContent="flex-start" padding="10px"
            >
                <Grid item textAlign="left" height="30px">
                    <Typography
                        style={{
                            fontFamily: "Nunito",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "19px",
                            height: "19px",
                            width: "72px",
                            color: "#282846"
                        }}>Title</Typography>
                </Grid>
                <Grid item>
                    <TextField fullWidth variant="outlined"
                        onChange={(e) => onChange(e)}
                        value={note.title}
                        id={"title"}

                    />

                </Grid>
            </Grid>

            <Grid item flexDirection="column" alignContent="flex-start" padding="10px"
            >
                <Grid item textAlign="left" height="30px">
                    <Typography
                        style={{
                            fontFamily: "Nunito",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "19px",
                            height: "19px",
                            width: "72px",
                            color: "#282846"
                        }}>Descriptions</Typography>
                </Grid>
                <Grid item>
                    <TextField fullWidth variant="outlined"
                        onChange={(e) => onChange(e)}
                        value={note.description}
                        id={"description"}
                    />


                </Grid>


            </Grid>

            <Grid item container flexDirection="row" justifyContent="space-around" padding="10px"
            >
                <Grid item flexDirection="column" alignContent="flex-start" padding="10px"
                    lg={4}
                    md={4}
                    xs={12}
                >
                    <Grid item textAlign="left" height="30px">
                        <Typography
                            style={{
                                fontFamily: "Nunito",
                                fontWeight: 400,
                                fontSize: "25x",
                                lineHeight: "19px",
                                height: "19px",
                                width: "72px",
                                color: "#282846"
                            }}>Category</Typography>
                    </Grid>
                    <Grid item>
                        <TextField fullWidth variant="outlined"
                            onChange={(e) => onChange(e)}
                            value={note.category}
                            id={"category"}
                        />
                    </Grid>
                    </Grid>

                <Grid item flexDirection="column" alignContent="flex-start" padding="10px"
                    lg={4}
                    md={4}
                    xs={12}
                >
                    <Grid item textAlign="left" height="30px">
                        <Typography
                            style={{
                                fontFamily: "Nunito",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "19px",
                                height: "19px",
                                width: "72px",
                                color: "#282846"
                            }}>Date</Typography>
                    </Grid>
                    <Grid item>
                        <TextField fullWidth variant="outlined"
                            onChange={(e) => onChange(e)}
                            value={note.date}
                            id={"date"}
                        />


                    </Grid>


                </Grid>

                <Grid item flexDirection="column" alignContent="flex-start" padding="10px"
                    lg={4}
                    md={4}
                    xs={12}
                >
                    <Grid item textAlign="left" height="30px">
                        <Typography
                            style={{
                                fontFamily: "Nunito",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "19px",
                                height: "19px",
                                width: "72px",
                                color: "#282846"
                            }}>Time</Typography>
                    </Grid>
                    <Grid item>
                        <TextField fullWidth variant="outlined"
                            onChange={(e) => onChange(e)}
                            value={note.time}
                            id={"time"}
                        />

                    </Grid>


                </Grid>

            </Grid>

            <Grid item container flexDirection="row" justifyContent="space-around" padding="10px"
            >
                <Grid item flexDirection="column" alignContent="flex-start" padding="10px"
                    lg={6}
                    md={6}
                    xs={12}
                >
                    <Grid item textAlign="center">
                        <Button
                            style={{
                                fontFamily: "Nunito",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "19px",
                                height: "42px",
                                width: "126px",
                                color: "#FAFAFA",
                                backgroundColor: "#F05454"
                            }}
                            onClick={onClose}
                            variant="outlined"
                        >Cancel</Button>
                    </Grid>
                </Grid>

                <Grid item flexDirection="column" alignContent="flex-start" padding="10px"
                    lg={6}
                    md={6}
                    xs={12}
                >
                    <Grid item textAlign="center">
                        <Button
                            style={{
                                fontFamily: "Nunito",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "19px",
                                height: "42px",
                                width: "126px",
                                color: "#FAFAFA"
                            }}
                            variant="contained"
                            color="primary"
                        >{lable}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid >
}

export default NoteModal;