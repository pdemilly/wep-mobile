<!-- 
  Create tabs with an icon and label, using the tabs-positive style. 
  Each tabs child <ion-nav-view> directive will have its own 
  navigation history that also transitions its views in and out.
-->

<ion-tabs class="tabs-icon-top tabs-default">

	  <ion-tab title="Home" icon="icon ion-home" ui-sref="tab.home">
		<ion-nav-view name="home-tab"></ion-nav-view>
	  </ion-tab>

	  <ion-tab title="Search" icon="icon ion-search" ui-sref="tab.cust-search">
		<ion-nav-view name="main-tab"></ion-nav-view>
	  </ion-tab>

	  <ion-tab title="Settings" icon="icon ion-settings" ui-sref="tab.settings">
		<ion-nav-view name="settings-tab"></ion-nav-view>
	  </ion-tab>

	  <ion-tab title="About" icon="icon ion-information" ui-sref="tab.about">
		<ion-nav-view name="about-tab"></ion-nav-view>
	  </ion-tab>

</ion-tabs>
