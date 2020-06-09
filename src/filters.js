import sperator from './util/separator'

export default {
    install (Vue) {
        Vue.filter('addCommas', sperator)
    }
}