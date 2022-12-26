import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterCard() {
  return (
    <div className={'display-flex'}>
    <Card style={{backgroundColor :'black',color:'white' ,textAlign:'left' , width: '18rem' }}>
      <Card.Body>
        <Card.Title>Our Address</Card.Title>
        <Card.Text>
        4 Grand Central Terminal New York,
        NY 10 City name, CA 90896 USA. contact@example.com
        </Card.Text>
        <Button style={{color:'white'}} variant="trasparent"><i class="fa fa-telegram" aria-hidden="true"></i></Button>
        <Button style={{color:'white'}} variant="trasparent"><i class="fa fa-facebook" aria-hidden="true"></i></Button>
        <Button style={{color:'white'}} variant="trasparent"><i class="fa fa-twitter" aria-hidden="true"></i></Button>
        <Button style={{color:'white'}} variant="trasparent"><i class="fa fa-linkedin" aria-hidden="true"></i></Button>
      </Card.Body>
    </Card>

    {/* --------------------------- */}
    <Card style={{backgroundColor :'black',color:'white' ,textAlign:'left' , width: '18rem' }}>
      <Card.Body>
        <Card.Title>Useful Links</Card.Title>
        <Card.Text>
            <ul className='listStyle'>
                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i> Collectibles</li>
                <li> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Photography</li>
                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i> Trading Cards</li>
                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i> Virtual Worlds</li>
            </ul>
        </Card.Text>
       
      </Card.Body>
    </Card>

    {/* ----------------------- */}
    <Card style={{backgroundColor :'black',color:'white' ,textAlign:'left' , width: '20rem' }}>
      <Card.Body>
        <Card.Title>Our Address</Card.Title>
        <Card.Text>
        <ul className='listStyle'>
                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>  Collectibles</li>
                <li> <i class="fa fa-angle-double-right" aria-hidden="true"></i>  Photography</li>
                <li> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Trading Cards</li>
                <li> <i class="fa fa-angle-double-right" aria-hidden="true"></i>  Virtual Worlds</li>
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>

    {/* -------------------------------- */}
    <Card style={{backgroundColor :'black',color:'white' ,textAlign:'left' , width: '25rem' }}>
      <Card.Body>
        <Card.Title>Our Address</Card.Title>
        <Card.Text>
        Stay Informed By Newsletter
        </Card.Text>
        *Subscribe to our newsletter to receive early discount offers and updates.
      </Card.Body>
    </Card>
    </div>
  );
}

export default FooterCard;