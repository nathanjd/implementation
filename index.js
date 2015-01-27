var Foo = require('@nathanjd/foo'),
    Baz = require('@nathanjd/baz'),
    $ = require('jquery');

$(function () {
    var $content = $('#content'),
        foo = new Foo(),
        baz = new Baz();

    $content.html('<div class="implementation">' +
    	'<h1>Implementation</h1>' +
        foo.toHTML() +
        baz.toHTML() +
    '</div>');
});
