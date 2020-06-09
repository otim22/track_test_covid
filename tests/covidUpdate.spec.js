
import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'
import CovidUpdate from '@/components/views/helpers/CovidUpdate.vue'
import filters from '@/filters'
import Vuex from "vuex"

const localVue = createLocalVue();

localVue.use(Vuex);

Vue.use(Vuex)

Vue.use(filters)

describe('CovidUpdate.vue', () => {
    let wrapper

    beforeEach(() => {
        const propsData = {
            count: 5,
            cssClass: 'danger'
        }
        const getters = {
            summary: jest.fn().mockReturnValue([]),
            countries: jest.fn().mockReturnValue([])
        }
        const actions = {
            getSummary: jest.fn()
        }
        const store = new Vuex.Store({ getters, actions })
        wrapper = mount(CovidUpdate, { propsData, store })
    })
    it('should have the correct data', () => {
        expect(wrapper.find('span').text()).toBe('5')
        expect(wrapper.attributes('class')).toBe('danger')
    })
})