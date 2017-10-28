(function () {
    var SCRIPTS = {
        '00-webpack-watch': 'npm run watch',
        'webpack-build': 'npm run build',
        'webpack-build-prod': 'npm run build-prod',
        'webpack-build-vendor': 'npm run build-vendor',
        'publish': 'npm run publish',
        'tests-run': 'npm run test',
        'tests-watch': 'npm run test-watch',
        'tests-coverage': 'npm run test-coverage',
        'update-dtos': 'npm run typescript-ref'
    };

    var gulp = require('gulp');
    var exec = require('child_process').exec;

    function runScript(script, done) {
        process.env.FORCE_COLOR = 1;
        var proc = exec(script + (script.startsWith("npm") ? " --silent" : ""));
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('exit', () => done());
    }

    // Tasks
    Object.keys(SCRIPTS).forEach(name => {
        gulp.task(name, done => runScript(SCRIPTS[name], done));
    });

})();