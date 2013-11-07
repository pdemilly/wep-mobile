

<%@ page import="crs.core.Address" %>
<!doctype html>
<html>
    <head>
        <meta name="layout" content="mobile">
        <g:set var="entityName" value="${message(code: 'address.label', default: 'Address')}" />
        <title><g:message code="default.create.label" args="[entityName]" /></title>
    </head>
    <body>
		<div data-role="header" data-position="fixed">
			<h1><g:message code="default.create.label" args="[entityName]" /></h1>
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
			<g:hasErrors bean="${addressInstance}">
			<div class="errors" role="alert">
				<g:renderErrors bean="${addressInstance}" as="list" />
			</div>
			</g:hasErrors>
			<g:form action="save" >
			
				<div data-role="fieldcontain">
					<label for="type"><g:message code="address.type.label" default="Type" /></label>
					<g:select name="type.id" from="${crs.core.AddressType.list()}" optionKey="id" value="${addressInstance?.type?.id}"  />
				</div>
			
				<div data-role="fieldcontain">
					<label for="street"><g:message code="address.street.label" default="Street" /></label>
					<g:textField name="street" required="required" value="${addressInstance?.street}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="city"><g:message code="address.city.label" default="City" /></label>
					<g:textField name="city" required="required" value="${addressInstance?.city}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="state"><g:message code="address.state.label" default="State" /></label>
					<g:textField name="state" required="required" value="${addressInstance?.state}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="zipCode"><g:message code="address.zipCode.label" default="Zip Code" /></label>
					<g:textField name="zipCode" required="required" value="${addressInstance?.zipCode}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="contact"><g:message code="address.contact.label" default="Contact" /></label>
					<g:select name="contact.id" from="${crs.core.Contact.list()}" optionKey="id" value="${addressInstance?.contact?.id}"  />
				</div>
			
				<g:submitButton name="create" data-icon="check" value="${message(code: 'default.button.create.label', default: 'Create')}" />
			</g:form>
		</div>
		<div data-role="footer">
		</div>
    </body>
</html>
