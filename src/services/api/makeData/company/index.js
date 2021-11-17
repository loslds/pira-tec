// import Api from '../../requester'
import { compareValues } from 'mini-helper'
import Img from '../../assets/image/logosys.png'

const data = {
  success: true,
  companies: [
    {
      id: 1,
      nameEmp: 'Piratec',
      nmimg: 'Defalt',
      img: Img,
      address: 'Rua sem fim ',
      number: 101010,
      complement: ' Prox. eu nao sei',
      landline: '(00) 0000-0000',
      cellphone: '(00) 0000-0000',
      city: 'Seja Bem Vindo',
      state: 'Maravilha',
      zipcode: '00.000-000'
    }
  ]
}

export async function getCompany(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.companies && order) {
    resultData.companies = resultData.companies.sort(
      compareValues(order, 'asc')
    )
  }
  return resultData
}
