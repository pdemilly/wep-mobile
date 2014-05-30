modules = {
	'ionic' {
		dependsOn 'angularjs'
		resource plugin: 'wep-mobile', url: [ dir: 'bower_components/ionic/release/js', file: 'ionic.bundle.min.js' ]
		resource plugin: 'wep-mobile', url: [ dir: 'bower_components/ionic/release/css', file: 'ionic.min.css' ]
	}
}


// vim: :ai:ts=4:sw=4
