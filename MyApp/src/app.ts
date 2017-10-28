﻿import { Router } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config, router: Router) {
        config.title = 'Aurelia';
        config.options.pushState = true;
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: './views/home', nav: true, title: 'Home', settings: { name: "Aurelia" } },
            { route: ['/view1', 'view1'], name: 'view1', moduleId: './views/view1', nav: true, title: 'View 1' },
            { route: ['/view2', 'view2'], name: 'view2', moduleId: './views/view2', nav: true, title: 'View 2' }
        ]);

        config.mapUnknownRoutes({ redirect: '' });

        this.router = router;
    }
}