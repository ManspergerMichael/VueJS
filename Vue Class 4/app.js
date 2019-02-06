new Vue({
    el:'#app',
    data: {
        attachRed: false,
        color: 'green'
    },
    computed:{
        divClasses: function(){
            //returns a javaScript object
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        }
    }
});

new Vue({
    el:'#app2',
    data: {
        color: 'gray'
    },
    computed: {

    }
});