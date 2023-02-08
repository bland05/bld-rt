import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {FaGithub} from 'react-icons/fa'
import {ImFacebook} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><SlSocialLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://facebook.com" target="_blank"><ImFacebook/></a>
    </div>
  )
}

export default HeaderSocials