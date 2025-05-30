import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Tooltip,
  IconButton,
  Box,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { text: 'Chat', icon: <ChatBubbleOutlineIcon />, path: '/' },
    { text: 'History', icon: <HistoryIcon />, path: '/history' },
  ];

  const drawerContent = (
    <List>
      {items.map((item) => {
        const selected = location.pathname === item.path;
        return (
          <Tooltip
            title={isMobile ? item.text : ''}
            placement="right"
            key={item.text}
          >
            <ListItemButton
              selected={selected}
              onClick={() => {
                navigate(item.path);
                if (isMobile) setOpen(false); 
              }}
              sx={{
                justifyContent: isMobile ? 'center' : 'flex-start',
                px: 2,
                py: 1.5,
                backgroundColor: selected ? '#d0cbff' : 'inherit',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: isMobile ? 0 : 2 }}>
                {item.icon}
              </ListItemIcon>
              {!isMobile && <ListItemText primary={item.text} />}
            </ListItemButton>
          </Tooltip>
        );
      })}
    </List>
  );

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: 8,
            left: 8,
            zIndex: 1300,
          }}
        >
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        anchor="left"
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        sx={{
          width: isMobile ? 60 : 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isMobile ? 200 : 200,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
            borderRight: '1px solid #ddd',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
