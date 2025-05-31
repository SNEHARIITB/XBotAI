import React, { useState } from 'react';
import { Drawer, IconButton, Box, useMediaQuery } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const items = [
    { text: 'New Chat', icon: <ChatBubbleOutlineIcon />, path: '/' },
    { text: 'Past Conversations', icon: <HistoryIcon />, path: '/history' },
  ];

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: 2,
      }}
    >
      {items.map(({ text, icon, path }) => {
        const selected = location.pathname === path;
        return (
          <a
            key={text}
            href={path}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              textDecoration: 'none',
              color: selected ? '#000' : '#555',
              backgroundColor: selected ? '#d0cbff' : 'transparent',
              borderRadius: 4,
              marginBottom: 8,
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
            onClick={() => {
              if (isMobile) setOpen(false);
            }}
          >
            <Box
              sx={{
                mr: isMobile ? 0 : 1.5,
                display: 'flex',
                justifyContent: 'center',
                width: 24,
                color: selected ? '#000' : '#555',
              }}
            >
              {icon}
            </Box>
            {!isMobile && <span>{text}</span>}
          </a>
        );
      })}
    </Box>
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
          <IconButton onClick={() => setOpen(true)} aria-label="Open menu">
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
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
            borderRight: '1px solid #ddd',
            paddingTop: 8,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
