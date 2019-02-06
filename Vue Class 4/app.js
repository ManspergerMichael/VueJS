new Vue({
    el:'#app',
    data: {
        attachRed: false,
        color: 'green',
        color2: 'gray',
        width: 100
    },
    computed:{
        divClasses: function(){
            //returns a javaScript object
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        },
        myStyle: function(){
            return{
                backgroundColor: this.color2,
                width: this.width + 'px'
            };
        }
    }
});