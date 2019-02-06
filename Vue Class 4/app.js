new Vue({
    el:'#app',
    data: {
        attachRed: false
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