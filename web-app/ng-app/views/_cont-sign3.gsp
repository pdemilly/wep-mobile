<ion-view title="Contract Signature 3">
<!--
	  <ion-nav-buttons side="left">
		   	<button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
	  </ion-nav-buttons>
-->
	  <ion-nav-buttons side="right">
		   	<button class="button button-clear" ng-click="next()">Clear</button>
	  </ion-nav-buttons>
	  <ion-content padding="true">
			<p>
			  By signing this, I understand that .......
			</p>
			  <sigpad ng-model='sign3' name="sign3" required></sigpad>
			  <p>draw your signature in the box above.</p>
			  <a class="button button-positive button-block" href="#/tab/contract-print" >Print Contract</a>
			<p>
	  </ion-content>
</ion-view>
