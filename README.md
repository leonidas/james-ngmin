# Synopsis

Angular pre-minification ([ngmin](https://github.com/btford/ngmin)) transformer for [James.js](https://github.com/leonidas/james.js).

```javascript
var james  = require('james'),
    ngmin  = require('james-ngmin'),
    uglify = require('james-uglify');

james.task('default', function() {
  james.files('src/*js').forEach(function(file) {
    james.read(file)
      .transform(ngmin)
      .transform(uglify)
      .write(process.stdout);
  });
});
```

## API

`ngmin()`: Return Angular pre-minification transformer.
