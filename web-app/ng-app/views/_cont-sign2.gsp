<ion-view title="Contract Signature 2">
<!--
	  <ion-nav-buttons side="left">
		   	<button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
	  </ion-nav-buttons>
-->
	  <ion-nav-buttons side="right">
		   	<button class="button button-clear" ng-click="clearData()">Clear</button>
	  </ion-nav-buttons>
	  <ion-content padding="true">
			<p>
			  By signing this, I understand that .......
			</p>
			  <sigpad ng-model='sign2' name="sign2" required></sigpad>
			  <p>draw your signature in the box above.</p>
			  <a class="button button-positive button-block" href="#/tab/contract-sign3" >Next</a>
			<p>
	  </ion-content>
</ion-view>
