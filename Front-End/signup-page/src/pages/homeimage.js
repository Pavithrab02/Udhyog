import Card from 'react-bootstrap/Card';
import img1 from "../images/img5.jpg";
import "../App.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import jobmain from "../images/homeimg.webp";
function ImgOverlayExample() {
    return (
      <div>
        {/* <div className="right-card-container">
          <Card className="custom-card">
            <Card.Img src="https://incserv.com/wp-content/uploads/2020/02/shutterstock_394991071.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
          </Card> */}

          {/* <Card className="custom-card">
            <Card.Img src="https://th.bing.com/th/id/OIP.KYHsnUur_VyFCuqtr72hvAHaE8?w=221&h=180&c=7&r=0&o=5&pid=1.7.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text>
                 */}
              {/* </Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
          </Card>
          
        </div> */}


        <div className="left-card-container">
          {/* <Card className="custom-card">
            <Card.Img src="https://incserv.com/wp-content/uploads/2020/02/shutterstock_394991071.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
          </Card> */}
{/* <div>
      <Col xs={1} md={2}>
      Embark on a journey where every click brings you closer to your dream job, and every connection propels you towards your professional zenith.
          <Image src="https://th.bing.com/th/id/OIP.KYHsnUur_VyFCuqtr72hvAHaE8?w=221&h=180&c=7&r=0&o=5&pid=1.7.jpg" rounded style={{marginBottom:'-230px',marginRight:'200px'}}/>
        </Col>
        </div>
        <div> */}

<div>
</div>
          <Col xs={1} md={2}>
          <Image src={jobmain} rounded  style={{ width: '400px', height: '300px',marginTop:'80px', marginBottom:'80px',marginRight:'50px',marginLeft:'250px'}} />
        </Col>
        </div>
          </div>

          


        
      );
    }
    

export default ImgOverlayExample;