import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { UserDetails } from '../pages /detailPage';
import React from 'react';

export default function UserCard(props: UserDetails) {
  return (
    <React.Fragment>
      <Card
        sx={{
          display: 'flex',
          gap: 2,
          padding: '20px ',
        }}
        elevation={0}
      >
        <CardMedia
          className='styles.media'
          sx={{
            minWidth: '20%',
            flexShrink: 0,
            boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
          }}
          image={props.pictureDetails.url}
        />
        <CardContent sx={{ padding: '0 !important' }}>
          <Box mb={1}>
            <Typography variant='h5' gutterBottom>
              {props.name}
            </Typography>
          </Box>
          <p className='styles.body'>{props.description}</p>

          <Stack direction='row' spacing={2}>
            <Stack direction='row' spacing={1} sx={{ paddingRight: '2rem' }}>
              <AccessTimeFilledIcon fontSize='small' color='disabled' />
              <Typography variant='caption' display='block' gutterBottom>
                {props.onlineTime} minutes ago
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <FavoriteIcon fontSize='small' color='disabled' />
              <Typography variant='caption' display='block' gutterBottom>
                {props.favorite}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              <ChatBubbleIcon fontSize='small' color='disabled' />
              <Typography variant='caption' display='block' gutterBottom>
                {props.messages}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Divider light />
    </React.Fragment>
  );
}
