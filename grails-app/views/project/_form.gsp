<%@ page import="npah.entity.Project" %>



<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'type', 'error')} ">
	<label for="type">
		<g:message code="project.type.label" default="Type" />
		
	</label>
	<g:select name="type.id" from="${crs.core.ContactType.list()}" optionKey="id" value="${projectInstance?.type?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'displayName', 'error')} required">
	<label for="displayName">
		<g:message code="project.displayName.label" default="Display Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="displayName" required="required" value="${projectInstance?.displayName}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'addresses', 'error')} ">
	<label for="addresses">
		<g:message code="project.addresses.label" default="Addresses" />
		
	</label>
	
<ul>
<g:each in="${projectInstance?.addresses?}" var="a">
    <li><g:link controller="address" action="show" id="${a.id}">${a?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="address" action="create" params="['project.id': projectInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'address.label', default: 'Address')])}</g:link>

</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'phoneNumbers', 'error')} ">
	<label for="phoneNumbers">
		<g:message code="project.phoneNumbers.label" default="Phone Numbers" />
		
	</label>
	
<ul>
<g:each in="${projectInstance?.phoneNumbers?}" var="p">
    <li><g:link controller="phone" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="phone" action="create" params="['project.id': projectInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'phone.label', default: 'Phone')])}</g:link>

</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'emails', 'error')} ">
	<label for="emails">
		<g:message code="project.emails.label" default="Emails" />
		
	</label>
	
<ul>
<g:each in="${projectInstance?.emails?}" var="e">
    <li><g:link controller="email" action="show" id="${e.id}">${e?.encodeAsHTML()}</g:link></li>
</g:each>
</ul>
<g:link controller="email" action="create" params="['project.id': projectInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'email.label', default: 'Email')])}</g:link>

</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'defaultAddress', 'error')} ">
	<label for="defaultAddress">
		<g:message code="project.defaultAddress.label" default="Default Address" />
		
	</label>
	<g:select name="defaultAddress.id" from="${crs.core.Address.list()}" optionKey="id" value="${projectInstance?.defaultAddress?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'defaultPhone', 'error')} ">
	<label for="defaultPhone">
		<g:message code="project.defaultPhone.label" default="Default Phone" />
		
	</label>
	<g:select name="defaultPhone.id" from="${crs.core.Phone.list()}" optionKey="id" value="${projectInstance?.defaultPhone?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'defaultEmail', 'error')} ">
	<label for="defaultEmail">
		<g:message code="project.defaultEmail.label" default="Default Email" />
		
	</label>
	<g:select name="defaultEmail.id" from="${crs.core.Email.list()}" optionKey="id" value="${projectInstance?.defaultEmail?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'fileNo', 'error')} required">
	<label for="fileNo">
		<g:message code="project.fileNo.label" default="File No" />
		<span class="required-indicator">*</span>
	</label>
	<g:field type="number" name="fileNo" value="${fieldValue(bean: projectInstance, field: 'fileNo')}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'abbreviation', 'error')} required">
	<label for="abbreviation">
		<g:message code="project.abbreviation.label" default="Abbreviation" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="abbreviation" required="required" value="${projectInstance?.abbreviation}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'partnership', 'error')} ">
	<label for="partnership">
		<g:message code="project.partnership.label" default="Partnership" />
		
	</label>
	<g:select name="partnership.id" from="${npah.entity.Partnership.list()}" optionKey="id" value="${projectInstance?.partnership?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'grossProfitCenter', 'error')} ">
	<label for="grossProfitCenter">
		<g:message code="project.grossProfitCenter.label" default="Gross Profit Center" />
		
	</label>
	<g:select name="grossProfitCenter.id" from="${npah.entity.GrossProfitCenter.list()}" optionKey="id" value="${projectInstance?.grossProfitCenter?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'name', 'error')} ">
	<label for="name">
		<g:message code="project.name.label" default="Name" />
		
	</label>
	<g:textField name="name" value="${projectInstance?.name}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'county', 'error')} ">
	<label for="county">
		<g:message code="project.county.label" default="County" />
		
	</label>
	<g:select name="county.id" from="${crs.core.County.list()}" optionKey="id" value="${projectInstance?.county?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'projectType', 'error')} ">
	<label for="projectType">
		<g:message code="project.projectType.label" default="Project Type" />
		
	</label>
	<g:textField name="projectType" value="${projectInstance?.projectType}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'unitCount', 'error')} ">
	<label for="unitCount">
		<g:message code="project.unitCount.label" default="Unit Count" />
		
	</label>
	<g:textField name="unitCount" value="${projectInstance?.unitCount}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'developer', 'error')} ">
	<label for="developer">
		<g:message code="project.developer.label" default="Developer" />
		
	</label>
	<g:select name="developer.id" from="${crs.core.Company.list()}" optionKey="id" value="${projectInstance?.developer?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'laundry', 'error')} ">
	<label for="laundry">
		<g:message code="project.laundry.label" default="Laundry" />
		
	</label>
	<g:select name="laundry.id" from="${crs.core.Company.list()}" optionKey="id" value="${projectInstance?.laundry?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'cofoDate', 'error')} ">
	<label for="cofoDate">
		<g:message code="project.cofoDate.label" default="Cofo Date" />
		
	</label>
	<g:datePicker name="cofoDate" precision="day" value="${projectInstance?.cofoDate}" default="none" noSelection="['': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'admissionDate', 'error')} ">
	<label for="admissionDate">
		<g:message code="project.admissionDate.label" default="Admission Date" />
		
	</label>
	<g:datePicker name="admissionDate" precision="day" value="${projectInstance?.admissionDate}" default="none" noSelection="['': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'onSiteManager', 'error')} ">
	<label for="onSiteManager">
		<g:message code="project.onSiteManager.label" default="On Site Manager" />
		
	</label>
	<g:select name="onSiteManager.id" from="${crs.core.Person.list()}" optionKey="id" value="${projectInstance?.onSiteManager?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'propertyManagement', 'error')} ">
	<label for="propertyManagement">
		<g:message code="project.propertyManagement.label" default="Property Management" />
		
	</label>
	<g:select name="propertyManagement.id" from="${crs.core.Company.list()}" optionKey="id" value="${projectInstance?.propertyManagement?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'propertyManager', 'error')} ">
	<label for="propertyManager">
		<g:message code="project.propertyManager.label" default="Property Manager" />
		
	</label>
	<g:select name="propertyManager.id" from="${crs.core.Person.list()}" optionKey="id" value="${projectInstance?.propertyManager?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'assetManager', 'error')} ">
	<label for="assetManager">
		<g:message code="project.assetManager.label" default="Asset Manager" />
		
	</label>
	<g:select name="assetManager.id" from="${crs.core.Person.list()}" optionKey="id" value="${projectInstance?.assetManager?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'tcac', 'error')} ">
	<label for="tcac">
		<g:message code="project.tcac.label" default="Tcac" />
		
	</label>
	<g:select name="tcac.id" from="${npah.util.TCAC.list()}" optionKey="id" value="${projectInstance?.tcac?.id}" noSelection="['null': '']" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'APN', 'error')} ">
	<label for="APN">
		<g:message code="project.APN.label" default="APN" />
		
	</label>
	<g:textField name="APN" value="${projectInstance?.APN}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'percentage', 'error')} required">
	<label for="percentage">
		<g:message code="project.percentage.label" default="Percentage" />
		<span class="required-indicator">*</span>
	</label>
	<g:field type="number" name="percentage" value="${fieldValue(bean: projectInstance, field: 'percentage')}" />
</div>

<div class="fieldcontain ${hasErrors(bean: projectInstance, field: 'taxID', 'error')} ">
	<label for="taxID">
		<g:message code="project.taxID.label" default="Tax ID" />
		
	</label>
	<g:textField name="taxID" value="${projectInstance?.taxID}" />
</div>

