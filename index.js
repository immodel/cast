module.exports = function() {
  this.casters = this.casters || [];

  this.caster = function(fn) {
    return this.use(function() {
      this.casters.push(fn);
    });
  }

  this.cast = function(value) {
    this.casters.forEach(function(fn) {
      value = fn(value);
    });

    return value;
  };

  this.on('init', function(evt) {
    evt.doc.value = evt.doc.model.cast(evt.doc.value);
  });
};