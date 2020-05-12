
import Vue from 'vue'
import { mount } from '@vue/test-utils'
import CovidUpdate from '@/components/views/helpers/CovidUpdate.vue'
import filters from '@/filters'

Vue.use(filters)

describe('CovidUpdate.vue', () => {
    let wrapper

    beforeEach(() => {
        const propsData = {
            count: 5,
            cssClass: 'danger'
        }
        wrapper = mount(CovidUpdate, { propsData })
    })
    it('should have the correct data', () => {
        expect(wrapper.find('span').text()).toBe('5')
        expect(wrapper.attributes('class')).toBe('danger')
    })
})