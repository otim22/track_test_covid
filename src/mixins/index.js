import { mapGetters } from 'vuex'
export default {
    props: {
        count: {
            type: Number,
            required: false,
            dafault: 0
        },
        cssClass: {
            type: String,
            required: false,
            default: ''
        },
    },
    data () {
        return {
            loading: false
        }
    },
    async created () {
        if (!this.countries.length) {
            await this.getDataFromApi()
        }
    },
    computed: {
        ...mapGetters([
            'summary',
            'countries'
        ]),
        showClass () {
            return this.count > 1
        }
    },
    methods: {
        async getDataFromApi() {
            this.loading = true;
            try {
              await this.$store.dispatch('getSummary')
              this.loading = false
            } catch (error) {
                console.error('There was an error:', error.response)
                throw error(error.response)
            }
        }
    }
}