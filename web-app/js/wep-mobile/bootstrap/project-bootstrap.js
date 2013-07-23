var wepmobile = wepmobile || {};

wepmobile.loadproject = (function () {
    wepmobile.configuration.domain.push({
        name: 'project',
        view: {
            'list': $('#section-list-project'),
            'save': $('#submit-project'),
            'add': $('#add-project'),
            'show': $('a[id^="project-list-"]'),
            'remove': $('#delete-project')
        },
        hasOneRelations: [ {type: 'person', name: 'assetManager'} , {type: 'county', name: 'county'} , {type: 'address', name: 'defaultAddress'} , {type: 'email', name: 'defaultEmail'} , {type: 'phone', name: 'defaultPhone'} , {type: 'company', name: 'developer'} , {type: 'grossProfitCenter', name: 'grossProfitCenter'} , {type: 'company', name: 'laundry'} , {type: 'person', name: 'onSiteManager'} , {type: 'partnership', name: 'partnership'} , {type: 'company', name: 'propertyManagement'} , {type: 'person', name: 'propertyManager'} , {type: 'tCAC', name: 'tcac'} , {type: 'contactType', name: 'type'} ],
        oneToManyRelations: [ {type: 'address', name: 'addresses'}, {type: 'email', name: 'emails'}, {type: 'phone', name: 'phoneNumbers'} ] ,
        options: {
            offline: true,
            eventPush: true
        }

    });
}());
