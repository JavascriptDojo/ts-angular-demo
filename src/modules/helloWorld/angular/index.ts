import * as angular from "angular";
import "angular-route";
import {PageHelloComponent} from "./components/pageHello/PageHelloComponent";
import {config as routesConfig} from "./configs/routes";

angular.module("app.hello", ["ngRoute"])
    .component("pageHello", new PageHelloComponent())
    .config(routesConfig);
