import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItemValues = [
  { title: 'Gallery', url: '/' },
  { title: 'Detail Page', url: '/detailpage' },
];

export default function Navbar({ title }: { title: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NavigationItemValues.map((value) => (
          <ListItem key={value.title} disablePadding>
            <ListItemButton LinkComponent={Link} href={value.url}>
              <ListItemText primary={value.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          backgroundColor: 'transparent',
          display: 'grid',
          gridTemplateColumns: '1fr 10fr 1fr',
          gridAutoRows: 'minmax(120px, auto)',
          justifyItems: 'center',
        }}
      >
        <Button color='inherit' onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ fontSize: '1.8rem' }} />
        </Button>
        <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Typography
          variant='h5'
          fontWeight='900'
          color='inherit'
          component='div'
        >
          {title}
        </Typography>
        <Button color='inherit'>
          <MoreIcon sx={{ fontSize: '2rem' }} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
