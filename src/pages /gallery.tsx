import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/nav';
import Styled from '@emotion/styled';
import TabPanel from '../components/tabpanel';
import ImageCard from '../components/imageCard';
import { fetcher } from './detailPage';
import useSWR from 'swr';

export type VideoDetails = {
  id: number;
  title: string;
  url: string;
};

const HeaderBackground = Styled.div`
   height: 120px;
   position: fixed;
   background-image: linear-gradient(to right, #9c77e1 ,#4317a2);
   background-color: white;
   top: 0;
   left: 0;
   width: 100%; 
   z-index: 1000;
  `;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Gallery() {
  const [value, setValue] = React.useState(0);

  const { data, error } = useSWR(
    'https://orange-digital-coding-challenge-8xro.vercel.app/data',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Navbar title={data[0].pageName.toUpperCase()} />
      <HeaderBackground />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          marginTop: '112px',
          position: 'fixed',
          backgroundColor: 'white',
          zIndex: '1100',
          width: '100%',
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label='VIDEOS'
            {...a11yProps(0)}
            sx={{
              width: '50%',
              fontSize: '1.5rem',
              maxWidth: 'none',
              fontWeight: '900',
            }}
          />
          <Tab
            label='PHOTOS'
            {...a11yProps(1)}
            sx={{
              width: '50%',
              fontSize: '1.5rem',
              maxWidth: 'none',
              fontWeight: '900',
            }}
          />
        </Tabs>
      </Box>

      <Box sx={{ paddingTop: '140px' }}>
        <TabPanel value={value} index={0}>
          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 6, md: 12 }}
            >
              {data[0].videoDetails.map((video: VideoDetails) => {
                return (
                  <Grid item xs={4} sm={3} md={4} key={video.id}>
                    <ImageCard key={video.id} {...video} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Hi, photos are coming soon!</Typography>
        </TabPanel>
      </Box>
    </React.Fragment>
  );
}
