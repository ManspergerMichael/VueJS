new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed:{
            result: function(){
                return this.value == 37 ? "Done" : "Not There yet";
            }
        },
        watch:{

        }
    });