import React, { Component } from 'react';
import { 
    Container,
    Image,
    Carousel,
} from 'react-bootstrap';
import { 
    TropicalOasisPashmina,
    SkintonePashmina1,
    SkintonePashmina2,
} from '../../configs/Model';
import Style from './style';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
    <>
        <Container style={Style.container}>
            <Carousel>
                <Carousel.Item>
                    <Image 
                    fluid
                    src={TropicalOasisPashmina}
                    alt="Tropical Oasis"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    fluid
                    src={SkintonePashmina1}
                    alt="Skintone 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    fluid
                    src={SkintonePashmina2}
                    alt="Skintone 2"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    </>
    )
  }
}