<!-- 
	Customer List dsplayed from the search
	Selecting a customer will bring the list of contract
-->

<ion-view title="Customer Detail">
	<ion-content>
		<div class="list card">
			<h1>{{cust.name}}</h1>
			<p>{{formatAddress (cust.address)}}</p>
			<div class="item item-body">
				<h2>Select contract to sign</h2>
				<ion-list>
					  <ion-item ng-repeat="contract in contracts" type="item-text-wrap" href="#/tab/contract/{{contract.number}}">
							<h3>{{contract.number}}</h3>
					  </ion-item>
				</ion-list>

			</div>
		</div>
	</ion-content>
</ion-view>

<%-- 
// vim: :ai:ts=4:sw=4
--%>
