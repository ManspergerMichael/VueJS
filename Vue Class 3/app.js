new Vue({
    el: '#app',
    data:{
        name: 'Max'
    }
})

new Vue({
    el: '#app2',
    data: {
        counter: 0,
        result: ''
    },
    methods: {
        increase: function(){
            this.counter ++;
            this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
})