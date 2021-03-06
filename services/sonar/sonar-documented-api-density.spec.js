'use strict'

const { test, given } = require('sazerac')
const SonarDocumentedApiDensity = require('./sonar-documented-api-density.service')

describe('SonarDocumentedApiDensity', function() {
  test(SonarDocumentedApiDensity.render, () => {
    given({ density: 0 }).expect({
      message: '0%',
      color: 'red',
    })
    given({ density: 10 }).expect({
      message: '10%',
      color: 'orange',
    })
    given({ density: 20 }).expect({
      message: '20%',
      color: 'yellow',
    })
    given({ density: 50 }).expect({
      message: '50%',
      color: 'yellowgreen',
    })
    given({ density: 100 }).expect({
      message: '100%',
      color: 'brightgreen',
    })
  })
})
