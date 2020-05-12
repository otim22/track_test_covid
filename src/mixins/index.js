export default {
    props: {
        count: {
            type: Number,
            required: true
        },
        cssClass: {
            type: String,
            required: false,
            default: ''
        },
    },
    computed: {
        showClass () {
            return this.count > 1
        }
    }
}