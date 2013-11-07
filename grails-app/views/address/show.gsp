
<%@ page import="crs.core.Address" %>
<!doctype html>
<html>
    <head>
        <meta name="layout" content="mobile">
        <g:set var="entityName" value="${message(code: 'address.label', default: 'Address')}" />
        <title><g:message code="default.show.label" args="[entityName]" /></title>
    </head>
    <body>
		<div data-role="header" data-position="fixed">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<div data-role="navbar">
				<ul>
					<li><a data-icon="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
					<li><g:link data-icon="grid" data-ajax="false" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				</ul>
			</div>
		</div>
		<div data-role="content">
			<g:if test="${flash.message}">
			<div class="message">${flash.message}</div>
			</g:if>
			<dl>
			
				<dt><g:message code="address.id.label" default="Id" /></dt>
				
					<dd><g:fieldValue bean="${addressInstance}" field="id"/></dd>
				
			
				<dt><g:message code="address.type.label" default="Type" /></dt>
				
					<dd><g:link controller="addressType" action="show" id="${addressInstance?.type?.id}">${addressInstance?.type?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="address.street.label" default="Street" /></dt>
				
					<dd><g:fieldValue bean="${addressInstance}" field="street"/></dd>
				
			
				<dt><g:message code="address.city.label" default="City" /></dt>
				
					<dd><g:fieldValue bean="${addressInstance}" field="city"/></dd>
				
			
				<dt><g:message code="address.state.label" default="State" /></dt>
				
					<dd><g:fieldValue bean="${addressInstance}" field="state"/></dd>
				
			
				<dt><g:message code="address.zipCode.label" default="Zip Code" /></dt>
				
					<dd><g:fieldValue bean="${addressInstance}" field="zipCode"/></dd>
				
			
				<dt><g:message code="address.contact.label" default="Contact" /></dt>
				
					<dd><g:link controller="contact" action="show" id="${addressInstance?.contact?.id}">${addressInstance?.contact?.encodeAsHTML()}</g:link></dd>
				
			
			</dl>
			<g:form>
				<g:hiddenField name="id" value="${addressInstance?.id}" />
				<g:actionSubmit data-icon="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" />
			</g:form>
		</div>
		<div data-role="footer">
		</div>
    </body>
</html>
