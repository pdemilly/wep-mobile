var wepmobile = wepmobile || {};
wepmobile.view = wepmobile.view || {};

wepmobile.view.partnershipview = function (model, elements) {

    var that = grails.mobile.mvc.view(model, elements);
    
    // Register events
    that.model.listedItems.attach(function (data) {
        $('#list-partnership').empty();
        var key, items = model.getItems();
        $.each(items, function(key, value) {
            renderElement(value);
        });
        $('#list-partnership').listview('refresh');
        
    });

    that.model.createdItem.attach(function (data, event) {
        $(that.elements.save).removeClass('ui-disabled');
        if (data.item.errors) {
            $.each(data.item.errors, function(index, error) {
                $('#input-partnership-' + error.field).validationEngine('showPrompt',error.message, 'fail');
            });
            event.stopPropagation();
        } else if (data.item.message) {
            showGeneralMessage(data, event);
        } else {
            renderElement(data.item);
            $('#list-partnership').listview('refresh');
            if (!data.item.NOTIFIED) {
                $.mobile.changePage($('#section-list-partnership'));
            }
		}
    });

    that.model.updatedItem.attach(function (data, event) {
        $(that.elements.save).removeClass('ui-disabled');
        if (data.item.errors) {
            $.each(data.item.errors, function(index, error) {
                $('#input-partnership-' + error.field).validationEngine('showPrompt',error.message, 'fail');
            });
            event.stopPropagation();
        } else if (data.item.message) {
            showGeneralMessage(data, event);
        } else {
            updateElement(data.item);
            $('#list-partnership').listview('refresh');
            if (!data.item.NOTIFIED) {
                $.mobile.changePage($('#section-list-partnership'));
            }
        }
    });

    that.model.deletedItem.attach(function (data, event) {
        $(that.elements.remove).removeClass('ui-disabled');
        if (data.item.message) {
            showGeneralMessage(data, event);
        } else {
            if (data.item.offlineStatus === 'NOT-SYNC') {
                $('#partnership-list-' + data.item.id).parents('li').replaceWith(createListItem(data.item));
            } else {
                $('#partnership-list-' + data.item.id).parents('li').remove();
            }
            $('#list-partnership').listview('refresh');
            if (!data.item.NOTIFIED) {
                $.mobile.changePage($('#section-list-partnership'));
            }
        }
    });
    that.model.listedDependentItems.attach(function (data) {
        if (data.relationType === 'many-to-one') {
            renderDependentList(data.dependentName, data.items);
        }
        if (data.relationType === 'one-to-many') {
            renderMultiChoiceDependentList(data.dependentName, data.items);
        }
    });

    // user interface actions
    that.elements.list.on('pageinit', function (e) {
        that.listButtonClicked.notify();
    });

    that.elements.save.on('vclick', function (event) {
        event.stopPropagation();
        $('#form-update-partnership').validationEngine('hide');
        if($('#form-update-partnership').validationEngine('validate')) {
            $(this).addClass('ui-disabled');
            var obj = grails.mobile.helper.toObject($('#form-update-partnership').find('input, select'));
            var newElement = {
                partnership: JSON.stringify(obj)
            };
            if (obj.id === '') {
                that.createButtonClicked.notify(newElement, event);
            } else {
                that.updateButtonClicked.notify(newElement, event);
            }
        }
    });

    that.elements.remove.on('vclick', function (event) {
        $(this).addClass('ui-disabled');
        event.stopPropagation();
        that.deleteButtonClicked.notify({ id: $('#input-partnership-id').val() }, event);
    });

    that.elements.add.on('vclick', function (event) {
        event.stopPropagation();
        $('#form-update-partnership').validationEngine('hide');
        $('#form-update-partnership').validationEngine({promptPosition: 'bottomLeft'});
        that.editButtonClicked.notify();
        createElement();
    });

    var show = function(dataId, event) {
        event.stopPropagation();
        $('#form-update-partnership').validationEngine('hide');
        $('#form-update-partnership').validationEngine({promptPosition: 'bottomLeft'});
        that.editButtonClicked.notify();
        showElement(dataId);
    };

    var createElement = function () {
        resetForm('form-update-partnership');
        $.mobile.changePage($('#section-show-partnership'));
        $('#delete-partnership').css('display', 'none');
    };

    var showElement = function (id) {
        resetForm('form-update-partnership');
        var element = that.model.items[id];
        var value = element['defaultAddress.id'];
        if (!value) {
            value = element['defaultAddress'];
        }
        if (!value || (value === Object(value))) {
           value = element.defaultAddress.id;
        }
        $('select[data-gorm-relation="many-to-one"][name="defaultAddress"]').val(value).trigger("change");
        
        var value = element['defaultEmail.id'];
        if (!value) {
            value = element['defaultEmail'];
        }
        if (!value || (value === Object(value))) {
           value = element.defaultEmail.id;
        }
        $('select[data-gorm-relation="many-to-one"][name="defaultEmail"]').val(value).trigger("change");
        
        var value = element['defaultPhone.id'];
        if (!value) {
            value = element['defaultPhone'];
        }
        if (!value || (value === Object(value))) {
           value = element.defaultPhone.id;
        }
        $('select[data-gorm-relation="many-to-one"][name="defaultPhone"]').val(value).trigger("change");
        
        var value = element['type.id'];
        if (!value) {
            value = element['type'];
        }
        if (!value || (value === Object(value))) {
           value = element.type.id;
        }
        $('select[data-gorm-relation="many-to-one"][name="type"]').val(value).trigger("change");
        
        var addressesSelected = element.addresses;
        $.each(addressesSelected, function (key, value) {
            var selector;
            if (value === Object(value)) {
              selector= '#checkbox-addresses-' + value.id;
            } else {
              selector= '#checkbox-addresses-' + value;
            }
            $(selector).attr('checked','checked').checkboxradio('refresh');
        });
        var emailsSelected = element.emails;
        $.each(emailsSelected, function (key, value) {
            var selector;
            if (value === Object(value)) {
              selector= '#checkbox-emails-' + value.id;
            } else {
              selector= '#checkbox-emails-' + value;
            }
            $(selector).attr('checked','checked').checkboxradio('refresh');
        });
        var partnersSelected = element.partners;
        $.each(partnersSelected, function (key, value) {
            var selector;
            if (value === Object(value)) {
              selector= '#checkbox-partners-' + value.id;
            } else {
              selector= '#checkbox-partners-' + value;
            }
            $(selector).attr('checked','checked').checkboxradio('refresh');
        });
        var phoneNumbersSelected = element.phoneNumbers;
        $.each(phoneNumbersSelected, function (key, value) {
            var selector;
            if (value === Object(value)) {
              selector= '#checkbox-phoneNumbers-' + value.id;
            } else {
              selector= '#checkbox-phoneNumbers-' + value;
            }
            $(selector).attr('checked','checked').checkboxradio('refresh');
        });
        $.each(element, function (name, value) {
            var input = $('#input-partnership-' + name);
            if (input.attr('type') != 'file') {
                input.val(value);
            } else {
                if (value) {
                    var img = grails.mobile.camera.encode(value);
                    input.parent().css('background-image', 'url("' + img + '")');
                    input.attr('data-value', img);
                }
            }
            if (input.attr('data-type') == 'date') {
                input.scroller('setDate', (value === '') ? '' : new Date(value), true);
            }
        });
        $('#delete-partnership').show();
        $.mobile.changePage($('#section-show-partnership'));
    };

    var resetForm = function (form) {
        $('input[data-type="date"]').each(function() {
            $(this).scroller('destroy').scroller({
                preset: 'date',
                theme: 'default',
                display: 'modal',
                mode: 'scroller',
                dateOrder: 'mmD ddyy'
            });
        });
        var div = $("#" + form);
        if(div) {
            if (div[0]) {
                div[0].reset();
            }
            $.each(div.find('input:hidden'), function(id, input) {
                if ($(input).attr('type') != 'file') {
                    $(input).val('');
                } else {
                    $(input).parent().css('background-image', 'url("images/camera.png")');
                    $(input).attr('data-value', '');
                }
            });
        }
    };
    

    var refreshSelectDropDown = function (select, newOptions) {
        var options = null;
        if(select.prop) {
            options = select.prop('options');
        } else {
            options = select.attr('options');
        }
        if (options) {
            $('option', select).remove();
            $.each(newOptions, function(val, text) {
                options[options.length] = new Option(text, val);
            });
            select.val(options[0]);
        }
    };

    var renderDependentList = function (dependentName, items) {
        var manyToOneSelectForDependent = $('select[data-gorm-relation="many-to-one"][name=' + dependentName + ']');
        var options = {};
        $.each(items, function() {
            var key = this.id;
            var value = getText(this);
            options[key] = value;
        });
        refreshSelectDropDown(manyToOneSelectForDependent, options);
    };

    var refreshMultiChoices = function (oneToMany, dependentName, newOptions) {
        oneToMany.empty();
        $.each(newOptions, function(key, val) {
            oneToMany.append('<input type="checkbox" data-gorm-relation="one-to-many" name="'+ dependentName +'" id="checkbox-'+ dependentName +'-' + key + '"/><label for="checkbox-'+ dependentName +'-'+key+'">'+val+'</label>');
        });
        oneToMany.parent().trigger('create');
    };

    var renderMultiChoiceDependentList = function (dependentName, items) {
        var oneToMany = $('#multichoice-' + dependentName);
        var options = {};
        $.each(items, function() {
            var key = this.id;
            var value = getText(this);
            options[key] = value;
        });
        refreshMultiChoices(oneToMany, dependentName, options);
    };
    
    var createListItem = function (element) {
        var li, a = $('<a>');
        a.attr({
            id : 'partnership-list-' + element.id,
            'data-id' : element.id,
            'data-transition': 'fade'
        });
        a.text(getText(element));
        a.on('vclick', function(event) {
            show(element.id, event);
        });
        
        if (element.offlineStatus === 'NOT-SYNC') {
            li =  $('<li>').attr({'data-theme': 'e'});
            li.append(a);
        } else {
            li = $('<li>').append(a);
        }
        return li;
    };

    var renderElement = function (element) {
        $('#list-partnership').append(createListItem(element));
    };

    var updateElement = function (element) {
        $('#partnership-list-' + element.id).parents('li').replaceWith(createListItem(element));
    };

    var getText = function (data) {
        var textDisplay = '';
        $.each(data, function (name, value) {
            if (name !== 'class' && name !== 'id' && name !== 'offlineAction' && name !== 'offlineStatus'
                && name !== 'status' && name !== 'version' && name != 'longitude' && name != 'latitude'
                && name != 'NOTIFIED') {
                if (typeof value !== 'object') {   // do not display relation in list view
                    textDisplay += value + ' - ';
                }
            }
        });
        return textDisplay.substring(0, textDisplay.length - 2);
    };

    var showGeneralMessage = function(data, event) {
        $.mobile.showPageLoadingMsg( $.mobile.pageLoadErrorMessageTheme, data.item.message, true );
        setTimeout( $.mobile.hidePageLoadingMsg, 3000 );
        event.stopPropagation();
    };

    return that;
};
