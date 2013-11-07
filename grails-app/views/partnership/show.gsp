
<%@ page import="npah.entity.Partnership" %>
<!doctype html>
<html>
    <head>
        <meta name="layout" content="mobile">
        <g:set var="entityName" value="${message(code: 'partnership.label', default: 'Partnership')}" />
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
			
				<dt><g:message code="partnership.id.label" default="Id" /></dt>
				
					<dd><g:fieldValue bean="${partnershipInstance}" field="id"/></dd>
				
			
				<dt><g:message code="partnership.type.label" default="Type" /></dt>
				
					<dd><g:link controller="contactType" action="show" id="${partnershipInstance?.type?.id}">${partnershipInstance?.type?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="partnership.displayName.label" default="Display Name" /></dt>
				
					<dd><g:fieldValue bean="${partnershipInstance}" field="displayName"/></dd>
				
			
				<dt><g:message code="partnership.addresses.label" default="Addresses" /></dt>
				
					<g:each in="${partnershipInstance.addresses}" var="a">
						<dd><g:link controller="address" action="show" id="${a.id}">${a?.encodeAsHTML()}</g:link></dd>
					</g:each>
				
			
				<dt><g:message code="partnership.phoneNumbers.label" default="Phone Numbers" /></dt>
				
					<g:each in="${partnershipInstance.phoneNumbers}" var="p">
						<dd><g:link controller="phone" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></dd>
					</g:each>
				
			
				<dt><g:message code="partnership.emails.label" default="Emails" /></dt>
				
					<g:each in="${partnershipInstance.emails}" var="e">
						<dd><g:link controller="email" action="show" id="${e.id}">${e?.encodeAsHTML()}</g:link></dd>
					</g:each>
				
			
				<dt><g:message code="partnership.defaultAddress.label" default="Default Address" /></dt>
				
					<dd><g:link controller="address" action="show" id="${partnershipInstance?.defaultAddress?.id}">${partnershipInstance?.defaultAddress?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="partnership.defaultPhone.label" default="Default Phone" /></dt>
				
					<dd><g:link controller="phone" action="show" id="${partnershipInstance?.defaultPhone?.id}">${partnershipInstance?.defaultPhone?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="partnership.defaultEmail.label" default="Default Email" /></dt>
				
					<dd><g:link controller="email" action="show" id="${partnershipInstance?.defaultEmail?.id}">${partnershipInstance?.defaultEmail?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="partnership.partners.label" default="Partners" /></dt>
				
					<g:each in="${partnershipInstance.partners}" var="p">
						<dd><g:link controller="company" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></dd>
					</g:each>
				
			
			</dl>
			<g:form>
				<g:hiddenField name="id" value="${partnershipInstance?.id}" />
				<g:actionSubmit data-icon="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" />
			</g:form>
		</div>
		<div data-role="footer">
		</div>
    </body>
</html>
