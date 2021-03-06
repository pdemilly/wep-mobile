<!doctype html>
<html>
<head>
<title><g:layoutTitle default="WEP" /></title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="debug" content="Pascal">
<link rel="shortcut icon"
	href="${resource(dir: 'images', file: 'favicon.ico')}"
	type="image/x-icon" />
<link rel="apple-touch-icon"
	href="${resource(dir: 'images', file: 'apple-touch-icon.png')}">
<r:require modules="jquery,jquery-mobile" />
<r:layoutResources />
<g:layoutHead />
</head>
<body>
	<div data-role="page" data-cache="never" id="mainpage">
		<g:layoutBody />
	</div>
</body>
</html>
