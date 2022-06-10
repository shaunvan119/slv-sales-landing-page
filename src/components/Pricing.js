
   
import * as React from 'react';
import {Link} from "react-router-dom"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Sales rep by the hour',
    price:  '86 p/hr',
    description: [
      'Cold calling',
      'Appointment setting',
      'B2B and B2C cold outreach',
      'Lead list creation',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  {
    title: 'Sales rep + Digital transform',
    
    price: '5430',
    description: [
      'Cold calling',
      'Appointment setting',
      'B2B and B2C cold outreach',
      'Outreach automation',
      'Digital transform package'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
  {
    title: 'Digital transform ',
    price: '1990',
    description: [
      'Website creation',
      'Website design',
      'Lead landing pages',
      'LinkedIn automation',
      'Automated email campaigns',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];



function PricingContent() {
    const styleObj = {
    fontFamily: "Plus Jakarta Sans",
}


  return (
   
    <React.Fragment >
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none', } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main"  sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="#83869A"
          style={styleObj}
          
          
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography style={styleObj} variant="h5" align="center" color="#83869A" component="p" >
          Get an uplift in lead conversions for fraction of the cost of a fulltime BDM and marketing agency.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
              
            >
              <Card>
                <CardHeader
              
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  style={styleObj}
                  sx={{
                    backgroundColor: '#13183F',
                    color:'#FFFFFF',

                  }}
                />
                <CardContent>
                  <Box
                  
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                      
                    }}
                  >
                    <Typography style={styleObj} component="h2" variant="h5" color="#83869A">
                      From ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="#83869A">
                      
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                      style={styleObj}
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        color="#83869A"
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                <Link style={{ textDecoration: 'none', width: "100%", display: 'flex', justifyContent: 'center' }} to="/contact">
                  <Button fullWidth variant={tier.buttonVariant} style={styleObj} sx={{color:'#83869A', background: '#13183F'}}>
                    {tier.buttonText}
                  </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        
      >
        
        <Copyright style={styleObj} sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
      
  );
}

export default function Pricing() {
  return <PricingContent />;
}