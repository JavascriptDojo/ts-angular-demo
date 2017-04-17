config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when("/hello", {
        template: "<page-hello></page-hello>"
    });
}
