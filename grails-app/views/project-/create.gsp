

<%@ page import="npah.entity.Project" %>
<!doctype html>
<html>
    <head>
        <meta name="layout" content="mobile">
        <g:set var="entityName" value="${message(code: 'project.label', default: 'Project')}" />
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
			<g:hasErrors bean="${projectInstance}">
			<div class="errors" role="alert">
				<g:renderErrors bean="${projectInstance}" as="list" />
			</div>
			</g:hasErrors>
			<g:form action="save" >
			
				<div data-role="fieldcontain">
					<label for="type"><g:message code="project.type.label" default="Type" /></label>
					<g:select name="type.id" from="${crs.core.ContactType.list()}" optionKey="id" value="${projectInstance?.type?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="displayName"><g:message code="project.displayName.label" default="Display Name" /></label>
					<g:textField name="displayName" required="required" value="${projectInstance?.displayName}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="addresses"><g:message code="project.addresses.label" default="Addresses" /></label>
					
<ul>
<g:each in="${projectInstance?.addresses?}" var="a">
    <li><g:link controller="address" action="show" id="${a.id}">${a?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="address" action="create" params="['project.id': projectInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'address.label', default: 'Address')])}</g:link>

				</div>
			
				<div data-role="fieldcontain">
					<label for="phoneNumbers"><g:message code="project.phoneNumbers.label" default="Phone Numbers" /></label>
					
<ul>
<g:each in="${projectInstance?.phoneNumbers?}" var="p">
    <li><g:link controller="phone" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="phone" action="create" params="['project.id': projectInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'phone.label', default: 'Phone')])}</g:link>

				</div>
			
				<div data-role="fieldcontain">
					<label for="emails"><g:message code="project.emails.label" default="Emails" /></label>
					
<ul>
<g:each in="${projectInstance?.emails?}" var="e">
    <li><g:link controller="email" action="show" id="${e.id}">${e?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="email" action="create" params="['project.id': projectInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'email.label', default: 'Email')])}</g:link>

				</div>
			
				<div data-role="fieldcontain">
					<label for="defaultAddress"><g:message code="project.defaultAddress.label" default="Default Address" /></label>
					<g:select name="defaultAddress.id" from="${crs.core.Address.list()}" optionKey="id" value="${projectInstance?.defaultAddress?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="defaultPhone"><g:message code="project.defaultPhone.label" default="Default Phone" /></label>
					<g:select name="defaultPhone.id" from="${crs.core.Phone.list()}" optionKey="id" value="${projectInstance?.defaultPhone?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="defaultEmail"><g:message code="project.defaultEmail.label" default="Default Email" /></label>
					<g:select name="defaultEmail.id" from="${crs.core.Email.list()}" optionKey="id" value="${projectInstance?.defaultEmail?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="fileNo"><g:message code="project.fileNo.label" default="File No" /></label>
					<g:field type="number" name="fileNo" value="${fieldValue(bean: projectInstance, field: 'fileNo')}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="abbreviation"><g:message code="project.abbreviation.label" default="Abbreviation" /></label>
					<g:textField name="abbreviation" required="required" value="${projectInstance?.abbreviation}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="partnership"><g:message code="project.partnership.label" default="Partnership" /></label>
					<g:select name="partnership.id" from="${npah.entity.Partnership.list()}" optionKey="id" value="${projectInstance?.partnership?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="grossProfitCenter"><g:message code="project.grossProfitCenter.label" default="Gross Profit Center" /></label>
					<g:select name="grossProfitCenter.id" from="${npah.entity.GrossProfitCenter.list()}" optionKey="id" value="${projectInstance?.grossProfitCenter?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="name"><g:message code="project.name.label" default="Name" /></label>
					<g:textField name="name" value="${projectInstance?.name}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="county"><g:message code="project.county.label" default="County" /></label>
					<g:select name="county.id" from="${crs.core.County.list()}" optionKey="id" value="${projectInstance?.county?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="projectType"><g:message code="project.projectType.label" default="Project Type" /></label>
					<g:textField name="projectType" value="${projectInstance?.projectType}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="unitCount"><g:message code="project.unitCount.label" default="Unit Count" /></label>
					<g:textField name="unitCount" value="${projectInstance?.unitCount}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="developer"><g:message code="project.developer.label" default="Developer" /></label>
					<g:select name="developer.id" from="${crs.core.Company.list()}" optionKey="id" value="${projectInstance?.developer?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="laundry"><g:message code="project.laundry.label" default="Laundry" /></label>
					<g:select name="laundry.id" from="${crs.core.Company.list()}" optionKey="id" value="${projectInstance?.laundry?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="cofoDate"><g:message code="project.cofoDate.label" default="Cofo Date" /></label>
					<g:datePicker name="cofoDate" precision="day" value="${projectInstance?.cofoDate}" default="none" noSelection="['': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="admissionDate"><g:message code="project.admissionDate.label" default="Admission Date" /></label>
					<g:datePicker name="admissionDate" precision="day" value="${projectInstance?.admissionDate}" default="none" noSelection="['': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="onSiteManager"><g:message code="project.onSiteManager.label" default="On Site Manager" /></label>
					<g:select name="onSiteManager.id" from="${crs.core.Person.list()}" optionKey="id" value="${projectInstance?.onSiteManager?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="propertyManagement"><g:message code="project.propertyManagement.label" default="Property Management" /></label>
					<g:select name="propertyManagement.id" from="${crs.core.Company.list()}" optionKey="id" value="${projectInstance?.propertyManagement?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="propertyManager"><g:message code="project.propertyManager.label" default="Property Manager" /></label>
					<g:select name="propertyManager.id" from="${crs.core.Person.list()}" optionKey="id" value="${projectInstance?.propertyManager?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="assetManager"><g:message code="project.assetManager.label" default="Asset Manager" /></label>
					<g:select name="assetManager.id" from="${crs.core.Person.list()}" optionKey="id" value="${projectInstance?.assetManager?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="tcac"><g:message code="project.tcac.label" default="Tcac" /></label>
					<g:select name="tcac.id" from="${npah.util.TCAC.list()}" optionKey="id" value="${projectInstance?.tcac?.id}" noSelection="['null': '']" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="APN"><g:message code="project.APN.label" default="APN" /></label>
					<g:textField name="APN" value="${projectInstance?.APN}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="percentage"><g:message code="project.percentage.label" default="Percentage" /></label>
					<g:field type="number" name="percentage" value="${fieldValue(bean: projectInstance, field: 'percentage')}" />
				</div>
			
				<div data-role="fieldcontain">
					<label for="taxID"><g:message code="project.taxID.label" default="Tax ID" /></label>
					<g:textField name="taxID" value="${projectInstance?.taxID}" />
				</div>
			
				<g:submitButton name="create" data-icon="check" value="${message(code: 'default.button.create.label', default: 'Create')}" />
			</g:form>
		</div>
		<div data-role="footer">
		</div>
    </body>
</html>
