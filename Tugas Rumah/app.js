Vue.component('showform', {
    template : '#show-form',
    data(){
        return {
            data : {nama    : '', 
                    ttl     : '', 
                    kelamin : '', 
                    alamat  : '', 
                    agama   : '', 
                    status  : '', 
                    job     : '', 
                    negara  : ''
                }
        }
    },
    methods : {
        simpan : function () {
            this.$emit('send-data', this.data);
            this.data.nama      = "";
            this.data.ttl       = "";
            this.data.kelamin   = "";
            this.data.alamat    = "";
            this.data.agama     = "";
            this.data.status    = "";
            this.data.job       = "";
            this.data.negara    = "";
        }
    }
})

Vue.component('showdata', {
    template : '#show-data',
    props : ['data']
})

var app = new Vue({
    el : "#app",
    data : {
        ktp : {}
    },

    methods : {
        getData : function (value) {
            this.ktp = {
                nama : value.nama,
                ttl : value.ttl,
                kelamin : value.kelamin,
                alamat : value.alamat,
                agama : value.agama,
                status : value.status,
                job : value.job,
                negara : value.negara
            }
        }
    }
})