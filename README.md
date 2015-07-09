# grunt-anybar

> Grunt plugin to show the current build status in the [AnyBar](https://github.com/tonsky/AnyBar) menu app.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-anybar --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-anybar');
```

## The "anybar" task

### Overview
In your project's Gruntfile, add a section named `anybar` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  anybar: {
    start: {
      options: {
        // Task-specific options go here.
      }
    },
    finish: {
      options: {
        // Task-specific options go here.
      }
    }
  },
});
```

Last but not least, run the specific `start` and the `finish` task at the first and at the end of your `grunt.registerTask()` invocation:

```js
grunt.registerTask('default', [ 'anybar:start', 'copy', 'sass:build', 'autoprefixer', 'concat', 'uglify', 'imagemin', 'jscs', 'phplint', 'anybar:finish' ]);
grunt.registerTask('dev', [ 'anybar:start', 'copy', 'connect', 'watch', 'anybar:finish' ]);
```

### Options

#### options.port
Type: `Integer`
Default value: `1738`

An integer value that represents the AnyBar UDP port.

#### options.status
Type: `String`

One of AnyBar's status or color values:

* `white`
* `red`
* `orange`
* `yellow`
* `green`
* `cyan`
* `blue`
* `purple`
* `black`
* `question`
* `exclamation`
 
### Usage Examples

#### Default Options
In the example below, with default options, the plugin uses the default UDP port 1738 to talk to AnyBar.

```js
grunt.initConfig({
  anybar: {
    start: {
      options: {
        status: 'yellow'
      }
    },
    finish: {
      options: {
        status: 'green'
      }
    }
  },
});
```

#### Custom Options
In case you use a different port you can pass the `port` option:

```js
grunt.initConfig({
  anybar: {
    start: {
      options: {
        status: 'yellow',
        port: 1739
      }
    },
    finish: {
      options: {
        status: 'green',
        port: 1739
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

v0.2.1

  * Fixed error hooks. So it works now.
