import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ChatMessage from './ChatMessage';

const ChatWindow = () => {
  return (
    <Box >
        <Grid container spacing={2}>

            <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant='h5' component="h5">
                            Hi, What is the Weather?
                        </Typography>
                        <Typography variant='body2' component="p">
                            Get immediate AI generated response
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant='h5' component="h5">
                            Hi, What is my Location?
                        </Typography>
                        <Typography variant='body2' component="p">
                            Get immediate AI generated response
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant='h5' component="h5">
                            Hi, What is the Temperature?
                        </Typography>
                        <Typography variant='body2' component="p">
                            Get immediate AI generated response
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant='h5' component="h5">
                            Hi, How are You?
                        </Typography>
                        <Typography variant='body2' component="p">
                            Get immediate AI generated response
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    </Box>
  );
};

export default ChatWindow;
