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
    computer: {

    },
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
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
        }
    }
})