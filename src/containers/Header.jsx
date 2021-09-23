import React from 'react';

import { IconButton, Typography, Toolbar, AppBar } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

function Header(props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        Shopping Cart
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;