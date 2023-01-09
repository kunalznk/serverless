import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return <AppBar component="nav" position="relative">
        <Toolbar variant="dense">
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >NOTES APP</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    // aria-controls={menuId}
                    aria-haspopup="true"
                    // onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircleIcon />
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar >

}

export default Header;