import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Links from './Links'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ Hero, About, Projects, Skills, Experience, Links ]),
})
