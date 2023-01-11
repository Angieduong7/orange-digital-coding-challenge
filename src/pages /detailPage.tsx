import Navbar from '../components/nav';
import Styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import React from 'react';
import UserCard from '../components/userCard';
import useSWR from 'swr';

export type UserDetails = {
  id: number;
  name: string;
  pictureDetails: { url: string };
  description: string;
  onlineTime: number;
  favorite: string;
  messages: string;
};

const HeaderBackground = Styled.div`
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background:  linear-gradient(to top, #291b66b8, #392377cc), url(/assets/detail-page-bg.png) no-repeat top center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const FlexBox = Styled.div`
  display: flex;
  gap: 5px;
  padding-right: 15px;
`;

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailPage() {
  const { data, error } = useSWR('http://localhost:8000/data', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Navbar title={data[1].pageName.toUpperCase()} />
      <HeaderBackground>
        <Box sx={{ margin: '0 10% 5% 10%' }}>
          <Typography
            variant='h3'
            color='secondary'
            sx={{ paddingBottom: '15px' }}
            fontSize={{ xs: 35, md: 48 }}
          >
            Lost on the Road to the mountains
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '5px',
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Stack direction='row' gap={5}>
                <Typography
                  variant='body1'
                  color='secondary'
                  sx={{ paddingBottom: '10px' }}
                >
                  By: Alan Tiger
                </Typography>
                <Typography
                  variant='body1'
                  color='secondary'
                  sx={{ paddingBottom: '10px' }}
                >
                  At: Paris, France
                </Typography>
              </Stack>

              <Typography variant='body1' color='secondary'>
                On March 31st, 2016
              </Typography>
            </Box>
            <FlexBox>
              <FlexBox>
                <FavoriteIcon />
                <Typography variant='body1' color='secondary'>
                  4.5K
                </Typography>
              </FlexBox>
              <FlexBox>
                <ChatBubbleIcon />
                <Typography variant='body1' color='secondary'>
                  1.1K
                </Typography>
              </FlexBox>
            </FlexBox>
          </Box>
        </Box>
      </HeaderBackground>

      <Box sx={{ paddingTop: '450px' }}>
        {data[1].userDetails.map((user: UserDetails) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </Box>
    </React.Fragment>
  );
}
