import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import "../Style/card.css"

const CardStructure = (props) => {
    console.log(props)
    const {img,title,country,googleMapsLink,dates,text} = props.entry
  return (
    <>
      <div className="details_card">
        <div className="location_image">
          <img
            src={img.src}
            alt={img.title}
          />
        </div>

        <div className="location_section">
          <div className="place_detail">
            <span>
              <FaLocationDot />
            </span>
            <span>{country}</span>
            <a href={googleMapsLink}>View on Map</a>
          </div>
          <div className="des_section">
            <p>{title}</p>
            <p>{dates}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardStructure
