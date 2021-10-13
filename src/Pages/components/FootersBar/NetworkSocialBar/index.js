import React from 'react'
import { BtnContainer, Btn } from './styleNetwork'

import watszap from '../../../../assets/image/watszap.svg'
import telefone from '../../../../assets/image/telefone.png'
import email from '../../../../assets/image/email.png'
import internet from '../../../../assets/image/internet.svg'
import facebook from '../../../../assets/image/facebook.svg'
import instagram from '../../../../assets/image/instagram.svg'

export function NetworkSocialBar() {
  const listBtn = [
    { id: 1, img: watszap, label: 'watszap', onClick: () => {} },
    { id: 2, img: telefone, label: 'telefone', onClick: () => {} },
    { id: 3, img: email, label: 'email', onClick: () => {} },
    { id: 4, img: internet, label: 'internet', onClick: () => {} },
    { id: 5, img: facebook, label: 'facebook', onClick: () => {} },
    { id: 6, img: instagram, label: 'instagram', onClick: () => {} }
  ]
  return (
    <BtnContainer>
      {listBtn.map(({ id, img, label, onClick }) => {
        return <Btn key={id} img={img} title={label} />
      })}
    </BtnContainer>
  )
}
