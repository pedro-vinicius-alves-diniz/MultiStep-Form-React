import React from 'react'
import ImgThanks from "../assets/icon-thank-you.png"
import { ConfirmedStyled } from './Confirmed.style'

export default function Confirmed() {
  return (
    <ConfirmedStyled >
        <img src={ImgThanks} alt="Logo thanks" width="40"/>
        <h1>Thank you!</h1>
        <div className="confirmed-texts">
          <p>Thanks for confirming your subscription!</p>
          <p>
            We hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
          </p>
        </div>
      </ConfirmedStyled>
  )
}
