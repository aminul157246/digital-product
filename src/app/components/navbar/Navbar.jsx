
'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link'

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import logo from '@/assets/logo.png'


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];



function Navbar() {



    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };




    return (



        <AppBar className='bg-white' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* <Image src={logo} alt='' width={80} height={80} priority></Image> */}
                    <Link href={'/'}><h3 className='text-black font-bold'>digital <br /> product</h3></Link>

                    {/* for responsive  */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {links.map((item) => (
                                <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                                    <Link href={item.url}>
                                        <Button className='text-gray-800'>{item.title}</Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box className="mx-auto max-w-fit" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {links.map((item) => (
                            <Link key={item.id} href={item.url}>
                                <Button className='text-gray-800'>{item.title}</Button>
                            </Link>
                        ))}
                    </Box>






                </Toolbar>
            </Container>
        </AppBar>




    );
}
export default Navbar;