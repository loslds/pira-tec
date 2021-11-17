import React, { useCallback, useEffect, useState } from 'react'
import { LayoutContainer } from '../components/LayoutContainer'
import { LayoutHeader } from '../components/LayoutHeader'
import { LayoutMain } from '../components/LayoutMain'
import { LayoutFooter } from '../components/LayoutFooter'
import { getMe } from '../../services/api/makeData/user'

export const PageContact = () => {
  const [userData, setUserData] = useState({})

  const fetchUserData = useCallback(async () => {
    const response = await getMe()
    if (response && response.success) {
      setUserData(response.user)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <LayoutContainer>
      <LayoutHeader>
        <h2>Cabeçalho</h2>
      </LayoutHeader>
      <LayoutMain>
        <h2>Corpo</h2>
        <h5>Nome : </h5>
        {userData.nameUser || '--'}
      </LayoutMain>
      <LayoutFooter>
        <h2>Rodapé</h2>
      </LayoutFooter>
    </LayoutContainer>
  )
}
