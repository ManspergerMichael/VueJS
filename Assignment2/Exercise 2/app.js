new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function(){
                alert('ALARM!');
            },
            store: function(event)
            {
                this.value = event.target.value;
            },
            complete: function(event)
            {
                this.value = event.target.value;
            }
        }
    });