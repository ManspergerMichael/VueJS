new Vue({
  el: '#exercise',
  data: {
    switchClass: false

  },
  methods: {
    startEffect: function() {
    return{
      shrink: switchClass,
      highilight: !switchClass}
    }
  }
});
