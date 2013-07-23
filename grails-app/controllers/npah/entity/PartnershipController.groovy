package npah.entity



import grails.converters.JSON
import org.grails.datastore.mapping.validation.ValidationErrors
import org.springframework.dao.DataIntegrityViolationException
import org.codehaus.groovy.grails.commons.DefaultGrailsDomainClass

class PartnershipController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }
	
    def list() {
      params.max = Math.min(params.max ? params.int('max') : 10, 100)
      render Partnership.list(params) as JSON
    }

    def save() {
      def jsonObject = JSON.parse(params.partnership)
      
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
      
      def partners = []
      jsonObject.partners.each() {
         partners << Company.get(it.id)
      }
      jsonObject.partners = null
      
      def phoneNumbers = []
      jsonObject.phoneNumbers.each() {
         phoneNumbers << Phone.get(it.id)
      }
      jsonObject.phoneNumbers = null
      
      Partnership partnershipInstance = new Partnership(jsonObject)
      
      partnershipInstance.addresses = addresses
      
      partnershipInstance.emails = emails
      
      partnershipInstance.partners = partners
      
      partnershipInstance.phoneNumbers = phoneNumbers
      
      if (!partnershipInstance.save(flush: true)) {
        ValidationErrors validationErrors = partnershipInstance.errors
        render validationErrors as JSON
        return
      }
      
      def asJson = partnershipInstance as JSON
      event topic:"save-partnership", data: asJson.toString()
      render partnershipInstance as JSON
    }
    
    def show() {
      def partnershipInstance = Partnership.get(params.id)
      if (!partnershipInstance) {
        flash.message = message(code: 'default.not.found.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])
        render flash as JSON
        return
      }
      
      render partnershipInstance as JSON
    }

    def update() {
      def jsonObject = JSON.parse(params.partnership)

      def partnershipInstance = Partnership.get(jsonObject.id)

      if (!partnershipInstance) {
        flash.message = message(code: 'default.not.found.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])
        render flash as JSON
        return
      }

      if (jsonObject.version) {
        def version = jsonObject.version.toLong()
        if (partnershipInstance.version > version) {
          partnershipInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                                                           [message(code: 'partnership.label', default: 'Partnership')] as Object[],
                                                           "Another user has updated this Partnership while you were editing")
          ValidationErrors validationErrors = partnershipInstance.errors
          render validationErrors as JSON
          return
        }
      }

      Partnership partnershipReceived = new Partnership(jsonObject)

      new DefaultGrailsDomainClass(Partnership.class).persistentProperties.each() {
          if (it.oneToOne || it.embedded) {
            partnershipInstance[it.name] = it.type.get(jsonObject["${it.name}.id"])
          } else {
            partnershipInstance[it.name] = partnershipReceived[it.name]
          }
      }
      
      partnershipInstance.addresses = []
      jsonObject.addresses.each() {
        partnershipInstance.addresses << Address.get(it.id)
      }
      partnershipInstance.emails = []
      jsonObject.emails.each() {
        partnershipInstance.emails << Email.get(it.id)
      }
      partnershipInstance.partners = []
      jsonObject.partners.each() {
        partnershipInstance.partners << Company.get(it.id)
      }
      partnershipInstance.phoneNumbers = []
      jsonObject.phoneNumbers.each() {
        partnershipInstance.phoneNumbers << Phone.get(it.id)
      }
      if (!partnershipInstance.save(flush: true)) {
        ValidationErrors validationErrors = partnershipInstance.errors
        render validationErrors as JSON
        return
      }
      
      def asJson = partnershipInstance as JSON
      event topic:"update-partnership", data: asJson.toString()
      render partnershipInstance as JSON
    }

    def delete() {
      def partnershipInstance = Partnership.get(params.id)
      
      partnershipInstance.addresses.each() {
        Address.get(it.getId());
      }
      
      partnershipInstance.emails.each() {
        Email.get(it.getId());
      }
      
      partnershipInstance.partners.each() {
        Company.get(it.getId());
      }
      
      partnershipInstance.phoneNumbers.each() {
        Phone.get(it.getId());
      }
      
      if (!partnershipInstance) {
        flash.message = message(code: 'default.not.found.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])
        render flash as JSON
        return
      }
      try {
        partnershipInstance.delete(flush: true)
      }
      catch (DataIntegrityViolationException e) {
        flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])
        render flash as JSON
        return
      }
      
      event topic:"delete-partnership", data: partnershipInstance
      render partnershipInstance as JSON
    }
    
}
