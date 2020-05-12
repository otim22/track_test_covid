
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import { mount, createLocalVue } from '@vue/test-utils'
import CovidLiveUpdates from '@/components/views/helpers/CovidLiveUpdates.vue'
import filters from '@/filters'
import Vuex from "vuex"

const localVue = createLocalVue();

localVue.use(Vuex);

Vue.use(Vuex)

Vue.use(filters)
Vue.use(BootstrapVue);

describe('CovidLiveUpdates.vue', () => {
    let wrapper

    beforeEach(() => {
        const propsData = {
            count: 5,
            cssClass: 'danger',
            title: 'Total Death'
        }
        const getters = {
            summary: jest.fn().mockReturnValue([]),
            countries: jest.fn().mockReturnValue([])
        }
        const actions = {
            getSummary: jest.fn()
        }
        const store = new Vuex.Store({ getters, actions })
        wrapper = mount(CovidLiveUpdates, { propsData, store })
    })
    it('should have the correct data', () => {
        expect(wrapper.find('.card-title').text()).toBe('Total Death')
        expect(wrapper.find('p').text()).toBe('5')
    })
})