import React from 'react'
import { URL_REDIRECTION } from '../Portfolio/portfolio.constants'
import Card from '../Card'
import { PROJECT_ARRAY, getCurrentCompanyDetails } from './project.constants'

const Project = () => {
  return (
    <section id={URL_REDIRECTION.PROJECTS}>
        {PROJECT_ARRAY.map(project => <Card key={project} {...getCurrentCompanyDetails(project)}/>)}
    </section>
  )
}

export default Project