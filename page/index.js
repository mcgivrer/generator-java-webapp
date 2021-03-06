'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the page subgenerator with the argument ' + this.name + '.');
};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype.files = function files() {
    // 定义后台 js 路径为 freemarker 定义的变量
    this.jsRoot = '${static}';
    this.template('page.js', path.join('admin/static/js/page/', this._.slugify(this.name) + '.js'));
    this.template('app.js', path.join('admin/static/js/app/', this._.slugify(this.name) + '.js'));
    this.template('page.ftl', path.join('WEB-INF/template/ftl/admin/', this._.slugify(this.name) + '/index.ftl'));
};
