
<%@ page import="npah.entity.Project" %>
<!doctype html>
<html>
    <head>
        <meta name="layout" content="mobile">
        <g:set var="entityName" value="${message(code: 'project.label', default: 'Project')}" />
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
			
				<dt><g:message code="project.id.label" default="Id" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="id"/></dd>
				
			
				<dt><g:message code="project.type.label" default="Type" /></dt>
				
					<dd><g:link controller="contactType" action="show" id="${projectInstance?.type?.id}">${projectInstance?.type?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.displayName.label" default="Display Name" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="displayName"/></dd>
				
			
				<dt><g:message code="project.addresses.label" default="Addresses" /></dt>
				
					<g:each in="${projectInstance.addresses}" var="a">
						<dd><g:link controller="address" action="show" id="${a.id}">${a?.encodeAsHTML()}</g:link></dd>
					</g:each>
				
			
				<dt><g:message code="project.phoneNumbers.label" default="Phone Numbers" /></dt>
				
					<g:each in="${projectInstance.phoneNumbers}" var="p">
						<dd><g:link controller="phone" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></dd>
					</g:each>
				
			
				<dt><g:message code="project.emails.label" default="Emails" /></dt>
				
					<g:each in="${projectInstance.emails}" var="e">
						<dd><g:link controller="email" action="show" id="${e.id}">${e?.encodeAsHTML()}</g:link></dd>
					</g:each>
				
			
				<dt><g:message code="project.defaultAddress.label" default="Default Address" /></dt>
				
					<dd><g:link controller="address" action="show" id="${projectInstance?.defaultAddress?.id}">${projectInstance?.defaultAddress?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.defaultPhone.label" default="Default Phone" /></dt>
				
					<dd><g:link controller="phone" action="show" id="${projectInstance?.defaultPhone?.id}">${projectInstance?.defaultPhone?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.defaultEmail.label" default="Default Email" /></dt>
				
					<dd><g:link controller="email" action="show" id="${projectInstance?.defaultEmail?.id}">${projectInstance?.defaultEmail?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.fileNo.label" default="File No" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="fileNo"/></dd>
				
			
				<dt><g:message code="project.abbreviation.label" default="Abbreviation" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="abbreviation"/></dd>
				
			
				<dt><g:message code="project.partnership.label" default="Partnership" /></dt>
				
					<dd><g:link controller="partnership" action="show" id="${projectInstance?.partnership?.id}">${projectInstance?.partnership?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.grossProfitCenter.label" default="Gross Profit Center" /></dt>
				
					<dd><g:link controller="grossProfitCenter" action="show" id="${projectInstance?.grossProfitCenter?.id}">${projectInstance?.grossProfitCenter?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.name.label" default="Name" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="name"/></dd>
				
			
				<dt><g:message code="project.county.label" default="County" /></dt>
				
					<dd><g:link controller="county" action="show" id="${projectInstance?.county?.id}">${projectInstance?.county?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.projectType.label" default="Project Type" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="projectType"/></dd>
				
			
				<dt><g:message code="project.unitCount.label" default="Unit Count" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="unitCount"/></dd>
				
			
				<dt><g:message code="project.developer.label" default="Developer" /></dt>
				
					<dd><g:link controller="company" action="show" id="${projectInstance?.developer?.id}">${projectInstance?.developer?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.laundry.label" default="Laundry" /></dt>
				
					<dd><g:link controller="company" action="show" id="${projectInstance?.laundry?.id}">${projectInstance?.laundry?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.cofoDate.label" default="Cofo Date" /></dt>
				
					<dd><g:formatDate date="${projectInstance?.cofoDate}" /></dd>
				
			
				<dt><g:message code="project.admissionDate.label" default="Admission Date" /></dt>
				
					<dd><g:formatDate date="${projectInstance?.admissionDate}" /></dd>
				
			
				<dt><g:message code="project.onSiteManager.label" default="On Site Manager" /></dt>
				
					<dd><g:link controller="person" action="show" id="${projectInstance?.onSiteManager?.id}">${projectInstance?.onSiteManager?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.propertyManagement.label" default="Property Management" /></dt>
				
					<dd><g:link controller="company" action="show" id="${projectInstance?.propertyManagement?.id}">${projectInstance?.propertyManagement?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.propertyManager.label" default="Property Manager" /></dt>
				
					<dd><g:link controller="person" action="show" id="${projectInstance?.propertyManager?.id}">${projectInstance?.propertyManager?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.assetManager.label" default="Asset Manager" /></dt>
				
					<dd><g:link controller="person" action="show" id="${projectInstance?.assetManager?.id}">${projectInstance?.assetManager?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.tcac.label" default="Tcac" /></dt>
				
					<dd><g:link controller="TCAC" action="show" id="${projectInstance?.tcac?.id}">${projectInstance?.tcac?.encodeAsHTML()}</g:link></dd>
				
			
				<dt><g:message code="project.APN.label" default="APN" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="APN"/></dd>
				
			
				<dt><g:message code="project.percentage.label" default="Percentage" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="percentage"/></dd>
				
			
				<dt><g:message code="project.taxID.label" default="Tax ID" /></dt>
				
					<dd><g:fieldValue bean="${projectInstance}" field="taxID"/></dd>
				
			
			</dl>
			<g:form>
				<g:hiddenField name="id" value="${projectInstance?.id}" />
				<g:actionSubmit data-icon="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" />
			</g:form>
		</div>
		<div data-role="footer">
		</div>
    </body>
</html>
