import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { text: 'Chat', icon: <ChatBubbleOutlineIcon />, path: '/' },
    { text: 'History', icon: <HistoryIcon />, path: '/history' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: isMobile ? 60 : 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isMobile ? 60 : 200,
          boxSizing: 'border-box',
          background: '#eee',
        },
      }}
    >
      <List>
        {items.map((item) => (
          <ListItemButton
            key={item.text}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            sx={{
              justifyContent: isMobile ? 'center' : 'flex-start',
              px: 2,
              py: 1.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: isMobile ? 0 : 2 }}>
              {item.icon}
            </ListItemIcon>
            {!isMobile && <ListItemText primary={item.text} />}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
