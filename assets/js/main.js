const app = new Vue({
    el: '#root',
    data: {
        emails: [],
        lenghtArray: 0
    },

    methods: {

    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.
                get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    console.log(response.data.response);
                    this.emails.push(response.data.response)
                    this.lenghtArray++;
                    console.log(this.emails);
                })
        }

    }

})