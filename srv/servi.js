const cds = require('@sap/cds')

module.exports = class servi extends cds.ApplicationService { init() {

  const { employeeEntity } = cds.entities('servi')

  this.before (['CREATE', 'UPDATE'], employeeEntity, async (req) => {
    console.log('Before CREATE/UPDATE employeeEntity', req.data)
  })
  this.after ('READ', employeeEntity, async (employeeEntity, req) => {
    console.log('After READ employeeEntity', employeeEntity)
  })


  return super.init()
}}
