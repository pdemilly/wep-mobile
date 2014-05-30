<!-- 
	Customer List dsplayed from the search
	Selecting a customer will bring the list of contract
-->

<ion-view title="Customer List">
  <ion-content>

	<ion-list>

	  <ion-item ng-repeat="cust in customers" type="item-text-wrap" href="#/tab/cust/{{cust.id}}">
			<h3>{{cust.number}}</h3>
			<p>{{cust.name}} {{formatAddress (cust.address)}}</p>
	  </ion-item>
	  
	</ion-list>

  </ion-content>
</ion-view>
<%-- 
// vim: :ai:ts=4:sw=4
--%>
