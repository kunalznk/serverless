import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { deleteNote } from '../api';
const NoteCard = ({ setOpen, setLabel, noteId }) => {

    return <Grid item
        // xs={9}
        md={6}
        // lg={4}
        xl={3}
    >
        <Card
            elevation={8}
            sx={{ minWidth: 320, minHeight: 175 }}>
            <Grid item>
                <CardHeader
                    title={
                        <Typography
                            style={{
                                fontFamily: "Nunito",
                                fontWeight: 600,
                                fontSize: "30px",
                                lineHeight: "19px",
                                height: "19px",
                                width: "72px",
                                color: "#29A19C",
                            }}>Title</Typography>
                    }
                    subheader={
                        <Grid container alignItems={"center"} sx={{ marginTop: "14px", height: 32 }} spacing={"2px"}>
                            <Grid item container>
                                <Grid item>
                                    < AccessTimeIcon sx={{
                                        height: 22,
                                        width: 22
                                    }} />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontFamily: "Nunito",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "19px",
                                            width: "72px",
                                            color: "#282846",
                                            paddingTop: "2px",
                                            marginLeft: "-12px"
                                        }}>12:00</Typography>
                                </Grid>
                                <Grid item sx={{ marginLeft: "-10px" }}>
                                    < CalendarTodayIcon sx={{
                                        height: 20,
                                        width: 20
                                    }} />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{
                                            fontFamily: "Nunito",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "19px",
                                            width: "72px",
                                            color: "#282846",
                                            paddingTop: "2px",
                                            marginLeft: "0px"
                                        }}>01/2022</Typography>
                                </Grid>

                            </Grid>
                            <Grid item container>
                                <Grid item  sx={{
                                            height: 20,
                                            width: 20}} > 
                                    {/* <IconButton
                                        sx={{
                                            height: 20,
                                            width: 20,
                                            color: true ? "green" : "red"
                                        }}>
                                        < CheckCircleTwoToneIcon sx={{
                                            height: 20,
                                            width: 20,
                                            color: true ? "green" : "red"
                                        }} />
                                    </IconButton> */}
                                    <div class="checkbox-wrapper-19">
                                            <input type="checkbox" id="cbtest-19" />
                                                 <label for="cbtest-19" class="check-box" />
                                    </div>

                                </Grid>
                                <Grid item sx={{ marginLeft: "2px" }}>
                                    <Typography
                                        style={{
                                            fontFamily: "Nunito",
                                            fontWeight: 400,
                                            fontSize: "20px",
                                            marginLeft:"10px",
                                            lineHeight: "19px",
                                            width: "72px",
                                            color: "#282846",
                                            paddingTop: "2px",
                                        }}>Category</Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                    }
                    action={
                        <Grid container>
                            <Grid item>
                                <IconButton sx={{ color: "#282846" }} onClick={() => { setLabel("Update"); setOpen(true) }}><ModeEditOutlineTwoToneIcon /> </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: "#F05454" }} onClick={() => deleteNote(noteId).then(() => { })}><DeleteIcon /> </IconButton>
                            </Grid>
                        </Grid>
                    }>

                </CardHeader>
            </Grid>
            <Grid item>
                <CardContent sx={{ maxWidth: "375px", height: "70px" }}>
                    <Typography variant="body2" color="text.secondary" textOverflow={"ellipsis"}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Grid>

        </Card>

    </Grid >
}


export default NoteCard;