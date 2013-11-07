<%@ page import="npah.entity.Partnership" %>



<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'type', 'error')} ">
	<label for="type">
		<g:message code="partnership.type.label" default="Type" />
		
	</label>
	<g:select name="type.id" from="${crs.core.ContactType.list()}" optionKey="id" value="${partnershipInstance?.type?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'displayName', 'error')} required">
	<label for="displayName">
		<g:message code="partnership.displayName.label" default="Display Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="displayName" required="required" value="${partnershipInstance?.displayName}" />
</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'addresses', 'error')} ">
	<label for="addresses">
		<g:message code="partnership.addresses.label" default="Addresses" />
		
	</label>
	
<ul>
<g:each in="${partnershipInstance?.addresses?}" var="a">
    <li><g:link controller="address" action="show" id="${a.id}">${a?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="address" action="create" params="['partnership.id': partnershipInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'address.label', default: 'Address')])}</g:link>

</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'phoneNumbers', 'error')} ">
	<label for="phoneNumbers">
		<g:message code="partnership.phoneNumbers.label" default="Phone Numbers" />
		
	</label>
	
<ul>
<g:each in="${partnershipInstance?.phoneNumbers?}" var="p">
    <li><g:link controller="phone" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="phone" action="create" params="['partnership.id': partnershipInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'phone.label', default: 'Phone')])}</g:link>

</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'emails', 'error')} ">
	<label for="emails">
		<g:message code="partnership.emails.label" default="Emails" />
		
	</label>
	
<ul>
<g:each in="${partnershipInstance?.emails?}" var="e">
    <li><g:link controller="email" action="show" id="${e.id}">${e?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="email" action="create" params="['partnership.id': partnershipInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'email.label', default: 'Email')])}</g:link>

</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'defaultAddress', 'error')} ">
	<label for="defaultAddress">
		<g:message code="partnership.defaultAddress.label" default="Default Address" />
		
	</label>
	<g:select name="defaultAddress.id" from="${crs.core.Address.list()}" optionKey="id" value="${partnershipInstance?.defaultAddress?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'defaultPhone', 'error')} ">
	<label for="defaultPhone">
		<g:message code="partnership.defaultPhone.label" default="Default Phone" />
		
	</label>
	<g:select name="defaultPhone.id" from="${crs.core.Phone.list()}" optionKey="id" value="${partnershipInstance?.defaultPhone?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'defaultEmail', 'error')} ">
	<label for="defaultEmail">
		<g:message code="partnership.defaultEmail.label" default="Default Email" />
		
	</label>
	<g:select name="defaultEmail.id" from="${crs.core.Email.list()}" optionKey="id" value="${partnershipInstance?.defaultEmail?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: partnershipInstance, field: 'partners', 'error')} ">
	<label for="partners">
		<g:message code="partnership.partners.label" default="Partners" />
		
	</label>
	<g:select name="partners" from="${crs.core.Company.list()}" multiple="multiple" optionKey="id" size="5" value="${partnershipInstance?.partners*.id}" />
</div>

