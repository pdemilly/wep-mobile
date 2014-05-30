<ion-view title="Home">
	<ion-content has-tabs="true">
		<div class="list card">

			<div class="item item-body">
				<p>
					Welcome to CRS ePad. Please enter your credentials
				</p>
				<div class="list list-inset">
					<label class="item item-input">
						<span class="input-label">Username</span>
						<input type="text" ng-model='username'>
					</label>
					<label class="item item-input">
						<span class="input-label">Password</span>
						<input type="password" ng-model='password'> 
					</label>
					<ion-toggle>Remember me</ion-toggle>
            		<button class="button button-positive button-block" ng-click="login()">Login</button>
        		</div>
			</div>
		</div>
	</ion-content>
</ion-view>

<!--
	vim: :ai:ts=4:ts=4
-->
