import { Card, CardMedia, CardActions, Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { VideoDetails } from '../pages /gallery';

export default function ImageCard(props: VideoDetails) {
  return (
    <Card sx={{ position: 'relative', borderRadius: 0 }}>
      <CardMedia sx={{ height: 200 }} image={props.url} title={props.title} />
      <CardActions
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Button>
          <PlayCircleOutlineIcon
            sx={{
              fontSize: '80px',
            }}
            color='secondary'
          />
        </Button>
      </CardActions>
      <CardActions sx={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Button size='small'>
          <ThumbUpIcon color='secondary' />
        </Button>
      </CardActions>
    </Card>
  );
}
