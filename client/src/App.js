import { Backdrop, Button, CircularProgress, Grid, Modal, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import GoogleButton from './components/GoogleButton';
import Header from './components/Header';
import NoteCard from './components/NoteCard';
import NoteModal from './components/NoteModal';
import { getNotes } from './api';
import Loader from './components/Loader';
import { Box } from '@mui/system';


function App() {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [lable, setLabel] = useState("Add")
  const [user, setUser] = useState(true)
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (notes.length > 0) {
      setLoading(true);
      getNotes().then((newNotes) => setNotes(newNotes));
      setLoading(false);
    }
  }, [notes])



  return (
    <div className='App'>
      <Loader open={loading}/>
      <Header />
      <Paper sx={{backgroundColor: "red" , minHeight: "100vh" }} className="gradient">
      {user && <Grid container spacing={4} padding={4}
      // lg={12} md={10} xs={9} xl={3}   sx={{ background: "#FFFFFF", boxShadow: "0px 10px 25px rgba(29, 52, 54, 0.08)", borderRadius: "10px"  }}
      >
        {<AddNote onClick={() => { setOpen(!open) }} />}
        {[1, 2, 3, 4, 5, 6,7,8].map(() => <NoteCard setOpen={setOpen} setLabel={setLabel} />)}
      </Grid>}

      {open && <Modal
        open={open}
        onClose={() => setOpen(!open)}
      >
        <div className='App'>
          <NoteModal
            lable={lable}
            onClose={() => {setOpen(!open); setLabel("Add")}}
          />
        </div>
      </Modal>}
      {!user && <GoogleButton />}

      </Paper>
  

    </div >
  );
}

export default App;
