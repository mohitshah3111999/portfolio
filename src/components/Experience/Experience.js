import React from 'react'
import { URL_REDIRECTION } from '../Portfolio/portfolio.constants'
import { COMPANIES, getCurrentCompanyDetails } from './experience.constants'
import Card from '../Card'

const Experience = () => {
  return (
    <section id={URL_REDIRECTION.EXPERIENCE}>
        <Card {...getCurrentCompanyDetails(COMPANIES.WINGIFY)}/>
        <Card {...getCurrentCompanyDetails(COMPANIES.TEKION)}/>
        <Card {...getCurrentCompanyDetails(COMPANIES.MONEYFIT)}/>
    </section>
  )
}

export default Experience