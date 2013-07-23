var wepmobile = wepmobile || {};

wepmobile.loadConfiguration = (function () {
    wepmobile.configuration = {
        baseURL: "http://localhost:8080/wep-mobile/",
        //Uncomment before pushing to cloudfoundry
        //baseURL: "http://wep-mobile.cloudfoundry.com/",
        namespace: "wepmobile",
        domain:[]
    };
})();

