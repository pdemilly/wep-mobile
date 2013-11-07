package npah.entity



import grails.converters.JSON
import org.grails.datastore.mapping.validation.ValidationErrors
import org.springframework.dao.DataIntegrityViolationException
import org.codehaus.groovy.grails.commons.DefaultGrailsDomainClass

class ProjectController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }
	
    def list() {
      params.max = Math.min(params.max ? params.int('max') : 10, 100)
      render Project.list(params) as JSON
    }

    def save() {
      def jsonObject = JSON.parse(params.project)
      
      def addresses = []
      jsonObject.addresses.each() {
         addresses << Address.get(it.id)
      }
      jsonObject.addresses = null
      
      def emails = []
      jsonObject.emails.each() {
         emails << Email.get(it.id)
      }
      jsonObject.emails = null
      
      def phoneNumbers = []
      jsonObject.phoneNumbers.each() {
         phoneNumbers << Phone.get(it.id)
      }
      jsonObject.phoneNumbers = null
      
      Project projectInstance = new Project(jsonObject)
      
      projectInstance.addresses = addresses
      
      projectInstance.emails = emails
      
      projectInstance.phoneNumbers = phoneNumbers
      
      if (!projectInstance.save(flush: true)) {
        ValidationErrors validationErrors = projectInstance.errors
        render validationErrors as JSON
        return
      }
      
      def asJson = projectInstance as JSON
      event topic:"save-project", data: asJson.toString()
      render projectInstance as JSON
    }
    
    def show() {
      def projectInstance = Project.get(params.id)
      if (!projectInstance) {
        flash.message = message(code: 'default.not.found.message', args: [message(code: 'project.label', default: 'Project'), params.id])
        render flash as JSON
        return
      }
      
      render projectInstance as JSON
    }

    def update() {
      def jsonObject = JSON.parse(params.project)

      def projectInstance = Project.get(jsonObject.id)

      if (!projectInstance) {
        flash.message = message(code: 'default.not.found.message', args: [message(code: 'project.label', default: 'Project'), params.id])
        render flash as JSON
        return
      }

      if (jsonObject.version) {
        def version = jsonObject.version.toLong()
        if (projectInstance.version > version) {
          projectInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                                                           [message(code: 'project.label', default: 'Project')] as Object[],
                                                           "Another user has updated this Project while you were editing")
          ValidationErrors validationErrors = projectInstance.errors
          render validationErrors as JSON
          return
        }
      }

      Project projectReceived = new Project(jsonObject)

      new DefaultGrailsDomainClass(Project.class).persistentProperties.each() {
          if (it.oneToOne || it.embedded) {
            projectInstance[it.name] = it.type.get(jsonObject["${it.name}.id"])
          } else {
            projectInstance[it.name] = projectReceived[it.name]
          }
      }
      
      projectInstance.addresses = []
      jsonObject.addresses.each() {
        projectInstance.addresses << Address.get(it.id)
      }
      projectInstance.emails = []
      jsonObject.emails.each() {
        projectInstance.emails << Email.get(it.id)
      }
      projectInstance.phoneNumbers = []
      jsonObject.phoneNumbers.each() {
        projectInstance.phoneNumbers << Phone.get(it.id)
      }
      if (!projectInstance.save(flush: true)) {
        ValidationErrors validationErrors = projectInstance.errors
        render validationErrors as JSON
        return
      }
      
      def asJson = projectInstance as JSON
      event topic:"update-project", data: asJson.toString()
      render projectInstance as JSON
    }

    def delete() {
      def projectInstance = Project.get(params.id)
      
      projectInstance.addresses.each() {
        Address.get(it.getId());
      }
      
      projectInstance.emails.each() {
        Email.get(it.getId());
      }
      
      projectInstance.phoneNumbers.each() {
        Phone.get(it.getId());
      }
      
      if (!projectInstance) {
        flash.message = message(code: 'default.not.found.message', args: [message(code: 'project.label', default: 'Project'), params.id])
        render flash as JSON
        return
      }
      try {
        projectInstance.delete(flush: true)
      }
      catch (DataIntegrityViolationException e) {
        flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'project.label', default: 'Project'), params.id])
        render flash as JSON
        return
      }
      
      event topic:"delete-project", data: projectInstance
      render projectInstance as JSON
    }
    
}
