import Card from 'react-bootstrap/Card';
import image from './main.jpg'
import Product from './product';

function Home(){
  return(
    <>
    <div className="hero">
    <Card className="bg-dark text-white hero cutout">
      <Card.ImgOverlay>
      <Card.Img src={image} alt="Card image"  style={{width:425}} className='ladies'/>
        <div className="container">
        <Card.Title className='display-1 fw-bolder text-info  card-head'>Big Million Deals</Card.Title>
        <Card.Text className='card-sub'>
          Check out the trends and fashion in our website
        </Card.Text>
        </div>
        
      </Card.ImgOverlay>
    </Card>
    <Product />
    </div>
    </>
  )
}

export default Home;