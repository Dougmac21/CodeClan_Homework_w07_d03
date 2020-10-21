import App from "@/App.vue";
import { shallowMount } from '@vue/test-utils';
import { expect } from "chai";


describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    it('should be able to add two numbers', () => {
        wrapper.vm.previousTotal = 4;
        wrapper.vm.add(1);
        expect(wrapper.vm.runningTotal).to.equal(5);
    });

    xit('should be able to subtract a number from a number', () => {

    });

    xit('should be able to multiply one number by another', () => {

    });

    xit('should be able to divide one number by another', () => {

    });

    xit('should concatinate multiple clicks of a number button', () => {

    });

    xit('should chain multiple operations together', () => {

    });

    xit('should clear the running total without any impact on the calculation', () => {

    });
    
});


