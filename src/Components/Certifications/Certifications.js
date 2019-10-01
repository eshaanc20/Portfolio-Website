import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Certifications.css';
import Button from '@material-ui/core/Button';

const Certifications = () => {
  return(
    <div>
      <div style={{width: '80%', margin: 'auto'}}>
        <p className='certifications-title'>Certifications</p>
        <div style={{display: 'flex', margin: 'auto', justifyContent: 'space-evenly', flexWrap: 'wrap'}} className='certifications'>
          <Card style={{width: '320px'}}> 
            <CardContent>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Name</p>
              <p>Neural Networks and Deep Learning</p>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Issued Organization</p>
              <p>Coursera</p>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Issue date</p>
              <p>June 2019</p>
              <div style={{margin: 'auto', width: '60%'}}>
                <Button href='https://www.coursera.org/account/accomplishments/verify/EG664QR863PV'>
                  View certification
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card style={{width: '320px'}}> 
            <CardContent>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Name</p>
              <p>Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization</p>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Issued Organization</p>
              <p>Coursera</p>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Issue date</p>
              <p>August 2019</p>
              <div style={{margin: 'auto', width: '60%'}}>
                <Button href='https://www.coursera.org/account/accomplishments/verify/ANDAHXW42PM3'>
                  View certification
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card style={{width: '320px'}}>
            <CardContent>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Name</p>
              <p>Structuring Machine Learning Projects</p>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Issued Organization</p>
              <p>Coursera</p>
              <p style={{fontWeight: 'bold', marginBottom: '-10px'}}>Issue date</p>
              <p>September 2019</p>
              <div style={{margin: 'auto', width: '60%'}}>
                <Button href='https://www.coursera.org/account/accomplishments/verify/WVE6MYCWFFHZ'>
                  View certification
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Certifications;