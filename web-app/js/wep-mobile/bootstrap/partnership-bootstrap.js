var wepmobile = wepmobile || {};

wepmobile.loadpartnership = (function () {
    wepmobile.configuration.domain.push({
        name: 'partnership',
        view: {
            'list': $('#section-list-partnership'),
            'save': $('#submit-partnership'),
            'add': $('#add-partnership'),
            'show': $('a[id^="partnership-list-"]'),
            'remove': $('#delete-partnership')
        },
        hasOneRelations: [ {type: 'address', name: 'defaultAddress'} , {type: 'email', name: 'defaultEmail'} , {type: 'phone', name: 'defaultPhone'} , {type: 'contactType', name: 'type'} ],
        oneToManyRelations: [ {type: 'address', name: 'addresses'}, {type: 'email', name: 'emails'}, {type: 'company', name: 'partners'}, {type: 'phone', name: 'phoneNumbers'} ] ,
        options: {
            offline: true,
            eventPush: true
        }

    });
}());
