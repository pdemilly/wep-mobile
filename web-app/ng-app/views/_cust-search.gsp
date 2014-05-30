<ion-view title="Customer Search">
	<ion-nav-buttons side="right">
		<button class="button button-energized" ng-click="clear()">Clear</button>
	</ion-nav-buttons>
	<ion-content has-tabs="true">
		<div class="list card">

			<div class="item item-body">
                <div class="list list-inset">
                    <label class="item item-input">
                        <span class="input-label">Cust #</span>
                        <input type="text" ng-model='number'>
                    </label>
                    <label class="item item-input">
                        <span class="input-label">Name</span>
                        <input type="text" ng-model='name'>
                    </label>
                    <label class="item item-input">
                        <span class="input-label">SSN</span>
                        <input type="text" ng-model='ssn'>
                    </label>
					<button class="button button-balanced button-block" ng-click="search()">Search</button>
                </div>
			</div>
		</div>
	</ion-content>
</ion-view>

<!--
	vim: :ai:ts=4:ts=4
-->
