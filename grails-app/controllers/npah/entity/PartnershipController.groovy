package npah.entity

class PartnershipController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index = {
        redirect(action: "list", params: params)
    }

    def list = {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        [partnershipInstanceList: Partnership.list(params), partnershipInstanceTotal: Partnership.count()]
    }

    def create = {
        def partnershipInstance = new Partnership()
        partnershipInstance.properties = params
        return [partnershipInstance: partnershipInstance]
    }

    def save = {
        def partnershipInstance = new Partnership(params)
        if (partnershipInstance.save(flush: true)) {
            flash.message = "${message(code: 'default.created.message', args: [message(code: 'partnership.label', default: 'Partnership'), partnershipInstance.id])}"
            redirect(action: "show", id: partnershipInstance.id)
        }
        else {
            render(view: "create", model: [partnershipInstance: partnershipInstance])
        }
    }

    def show = {
        def partnershipInstance = Partnership.get(params.id)
        if (!partnershipInstance) {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])}"
            redirect(action: "list")
        }
        else {
            [partnershipInstance: partnershipInstance]
        }
    }

    def edit = {
        def partnershipInstance = Partnership.get(params.id)
        if (!partnershipInstance) {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])}"
            redirect(action: "list")
        }
        else {
            return [partnershipInstance: partnershipInstance]
        }
    }

    def update = {
        def partnershipInstance = Partnership.get(params.id)
        if (partnershipInstance) {
            if (params.version) {
                def version = params.version.toLong()
                if (partnershipInstance.version > version) {
                    
                    partnershipInstance.errors.rejectValue("version", "default.optimistic.locking.failure", [message(code: 'partnership.label', default: 'Partnership')] as Object[], "Another user has updated this Partnership while you were editing")
                    render(view: "edit", model: [partnershipInstance: partnershipInstance])
                    return
                }
            }
            partnershipInstance.properties = params
            if (!partnershipInstance.hasErrors() && partnershipInstance.save(flush: true)) {
                flash.message = "${message(code: 'default.updated.message', args: [message(code: 'partnership.label', default: 'Partnership'), partnershipInstance.id])}"
                redirect(action: "show", id: partnershipInstance.id)
            }
            else {
                render(view: "edit", model: [partnershipInstance: partnershipInstance])
            }
        }
        else {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])}"
            redirect(action: "list")
        }
    }

    def delete = {
        def partnershipInstance = Partnership.get(params.id)
        if (partnershipInstance) {
            try {
                partnershipInstance.delete(flush: true)
                flash.message = "${message(code: 'default.deleted.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])}"
                redirect(action: "list")
            }
            catch (org.springframework.dao.DataIntegrityViolationException e) {
                flash.message = "${message(code: 'default.not.deleted.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])}"
                redirect(action: "show", id: params.id)
            }
        }
        else {
            flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'partnership.label', default: 'Partnership'), params.id])}"
            redirect(action: "list")
        }
    }
}
