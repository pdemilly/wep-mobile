package npah.entity



import org.junit.*
import grails.test.mixin.*

@TestFor(PartnershipController)
@Mock(Partnership)
class PartnershipControllerTests {

    def populateValidParams(params) {
        assert params != null
        // TODO: Populate valid properties like...
        //params["name"] = 'someValidName'
    }

    void testIndex() {
        controller.index()
        assert "/partnership/list" == response.redirectedUrl
    }

    void testList() {

        def model = controller.list()

        assert model.partnershipInstanceList.size() == 0
        assert model.partnershipInstanceTotal == 0
    }

    void testCreate() {
        def model = controller.create()

        assert model.partnershipInstance != null
    }

    void testSave() {
        controller.save()

        assert model.partnershipInstance != null
        assert view == '/partnership/create'

        response.reset()

        populateValidParams(params)
        controller.save()

        assert response.redirectedUrl == '/partnership/show/1'
        assert controller.flash.message != null
        assert Partnership.count() == 1
    }

    void testShow() {
        controller.show()

        assert flash.message != null
        assert response.redirectedUrl == '/partnership/list'

        populateValidParams(params)
        def partnership = new Partnership(params)

        assert partnership.save() != null

        params.id = partnership.id

        def model = controller.show()

        assert model.partnershipInstance == partnership
    }

    void testEdit() {
        controller.edit()

        assert flash.message != null
        assert response.redirectedUrl == '/partnership/list'

        populateValidParams(params)
        def partnership = new Partnership(params)

        assert partnership.save() != null

        params.id = partnership.id

        def model = controller.edit()

        assert model.partnershipInstance == partnership
    }

    void testUpdate() {
        controller.update()

        assert flash.message != null
        assert response.redirectedUrl == '/partnership/list'

        response.reset()

        populateValidParams(params)
        def partnership = new Partnership(params)

        assert partnership.save() != null

        // test invalid parameters in update
        params.id = partnership.id
        //TODO: add invalid values to params object

        controller.update()

        assert view == "/partnership/edit"
        assert model.partnershipInstance != null

        partnership.clearErrors()

        populateValidParams(params)
        controller.update()

        assert response.redirectedUrl == "/partnership/show/$partnership.id"
        assert flash.message != null

        //test outdated version number
        response.reset()
        partnership.clearErrors()

        populateValidParams(params)
        params.id = partnership.id
        params.version = -1
        controller.update()

        assert view == "/partnership/edit"
        assert model.partnershipInstance != null
        assert model.partnershipInstance.errors.getFieldError('version')
        assert flash.message != null
    }

    void testDelete() {
        controller.delete()
        assert flash.message != null
        assert response.redirectedUrl == '/partnership/list'

        response.reset()

        populateValidParams(params)
        def partnership = new Partnership(params)

        assert partnership.save() != null
        assert Partnership.count() == 1

        params.id = partnership.id

        controller.delete()

        assert Partnership.count() == 0
        assert Partnership.get(partnership.id) == null
        assert response.redirectedUrl == '/partnership/list'
    }
}
