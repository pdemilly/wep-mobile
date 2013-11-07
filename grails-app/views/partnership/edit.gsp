

<%@ page import="npah.entity.Partnership" %>
<!doctype html>
<html>
    <head>
        <meta name="layout" content="mobile">
        <g:set var="entityName" value="${message(code: 'partnership.label', default: 'Partnership')}" />
        <title><g:message code="default.edit.label" args="[entityName]" /></title>
    </head>
    <body>
		<div data-role="header" data-position="fixed">
			<h1><g:message code="default.edit.label" args="[entityName]" /></h1>
			<div data-role="navbar">
				<ul>
					<li><a data-icon="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
					<li><g:link data-icon="grid" data-ajax="false" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				</ul>
			</div>
		</div>
		<div data-role="content">
			<g:if test="${flash.message}">
			<div class="message" role="alert">${flash.message}</div>
			</g:if>
			<g:hasErrors bean="${partnershipInstance}">
			<div class="errors" role="alert">
				<g:renderErrors bean="${partnershipInstance}" as="list" />
			</div>
			</g:hasErrors>
			<g:form method="post" >
				<g:hiddenField name="id" value="${partnershipInstance?.id}" />
				<g:hiddenField name="version" value="${partnershipInstance?.version}" />
			
				<div data-role="fieldcontain">
					<label for="type"><g:message code="partnership.type.label" default="Type" /></label>
					<g:select name="type.id" from="${crs.core.ContactType.list()}" optionKey="id" value="${partnershipInstance?.type?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="displayName"><g:message code="partnership.displayName.label" default="Display Name" /></label>
					<g:textField name="displayName" required="required" value="${partnershipInstance?.displayName}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="addresses"><g:message code="partnership.addresses.label" default="Addresses" /></label>
					
<ul>
<g:each in="${partnershipInstance?.addresses?}" var="a">
    <li><g:link controller="address" action="show" id="${a.id}">${a?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="address" action="create" params="['partnership.id': partnershipInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'address.label', default: 'Address')])}</g:link>

				</div>
			
				<div data-role="fieldcontain">
					<label for="phoneNumbers"><g:message code="partnership.phoneNumbers.label" default="Phone Numbers" /></label>
					
<ul>
<g:each in="${partnershipInstance?.phoneNumbers?}" var="p">
    <li><g:link controller="phone" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="phone" action="create" params="['partnership.id': partnershipInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'phone.label', default: 'Phone')])}</g:link>

				</div>
			
				<div data-role="fieldcontain">
					<label for="emails"><g:message code="partnership.emails.label" default="Emails" /></label>
					
<ul>
<g:each in="${partnershipInstance?.emails?}" var="e">
    <li><g:link controller="email" action="show" id="${e.id}">${e?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="email" action="create" params="['partnership.id': partnershipInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'email.label', default: 'Email')])}</g:link>

				</div>
			
				<div data-role="fieldcontain">
					<label for="defaultAddress"><g:message code="partnership.defaultAddress.label" default="Default Address" /></label>
					<g:select name="defaultAddress.id" from="${crs.core.Address.list()}" optionKey="id" value="${partnershipInstance?.defaultAddress?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="defaultPhone"><g:message code="partnership.defaultPhone.label" default="Default Phone" /></label>
					<g:select name="defaultPhone.id" from="${crs.core.Phone.list()}" optionKey="id" value="${partnershipInstance?.defaultPhone?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="defaultEmail"><g:message code="partnership.defaultEmail.label" default="Default Email" /></label>
					<g:select name="defaultEmail.id" from="${crs.core.Email.list()}" optionKey="id" value="${partnershipInstance?.defaultEmail?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="partners"><g:message code="partnership.partners.label" default="Partners" /></label>
					<g:select name="partners" from="${crs.core.Company.list()}" multiple="multiple" optionKey="id" size="5" value="${partnershipInstance?.partners*.id}" />
				</div>
			
				<g:actionSubmit data-icon="check" action="update" value="${message(code: 'default.button.update.label', default: 'Update')}" />
			</g:form>
		</div>
		<div data-role="footer">
		</div>
    </body>
</html>
