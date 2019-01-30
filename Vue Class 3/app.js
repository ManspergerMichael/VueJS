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
        secondCounter: 0
        //result: ''
    },
    // methods in computed can be treated as variables with string introplation 
    // computed properties are cashed, only accessed once the value changes
    computed: {
        output: function(){
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    //Vue JS is not aware of what is in methods, need further research
    methods: {
        //cross propertiy dependanc
        /* increase: function(){
            this.counter ++;
            this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        },
        decrease: function(){
            this.counter --;
            this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        } */
        result() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
})

/* "Normal" methods  always run when something changes (if you're using them in the template by calling them there).

computed  property methods on the other hand don't always run and hence are more efficient/ performant. */

