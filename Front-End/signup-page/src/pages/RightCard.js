import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import  img1  from "./images/employer.png";
import { Link } from 'react-router-dom';
 
function RightCard() {
    return(
      <div style={{ marginLeft: '200px' }}>
        <Card sx={{ maxWidth: 270  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={img1}
          alt="employee"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Employer
          </Typography>
          <Typography variant="body2" color="text.secondary">
                Register as an Employer
                and find the best fit for your requirements.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              Recruiter Registeration
            </Button>
          </Link>
      </CardActions>
    </Card>
    </div>
 
    );
 
}
 
export default RightCard;