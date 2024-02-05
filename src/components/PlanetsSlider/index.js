import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container">
      <div data-testid="planets">
        <div className="slider-container">
          <h1 className="heading">Planets</h1>
          <Slider {...settings}>
            {planetsList.map(eachItem => (
              <PlanetItem planet={eachItem} key={eachItem.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PlanetsSlider
