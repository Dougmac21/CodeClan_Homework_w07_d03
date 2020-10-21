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

    it('should be able to subtract a number from a number', () => {
        wrapper.vm.previousTotal = 7;
        wrapper.vm.subtract(4);
        expect(wrapper.vm.runningTotal).to.equal(3);
    });

    it('should be able to multiply one number by another', () => {
        wrapper.vm.previousTotal = 3
        wrapper.vm.multiply(5);
        expect(wrapper.vm.runningTotal).to.equal(15);
    });

    it('should be able to divide one number by another', () => {
        wrapper.vm.previousTotal = 21;
        wrapper.vm.divide(7);
        expect(wrapper.vm.runningTotal).to.equal(3);
    });

    it('should concatinate multiple clicks of a number button', () => {
        wrapper.vm.runningTotal = 0;
        wrapper.vm.numberClick(1);
        wrapper.vm.numberClick(2);
        wrapper.vm.numberClick(3);
        expect(wrapper.vm.runningTotal).to.equal(123);
    });

    it('should chain multiple operations together', () => {
        wrapper.vm.runningTotal = 0;            // actual: 0
        wrapper.vm.operatorClick("+");          // actual: 0
        wrapper.vm.numberClick(10);             // actual: 10
        wrapper.vm.operatorClick("+");          // actual: 10
        wrapper.vm.operatorClick("+");          // actual: 20
        wrapper.vm.operatorClick("+");          // actual: 40
        wrapper.vm.operatorClick("+");          // actual: 80
        expect(wrapper.vm.runningTotal).to.equal(80);
    });

    it('should clear the running total without any impact on the calculation', () => {
        wrapper.vm.runningTotal = 10;           // actual: 10
        wrapper.vm.operatorClick("+");          // actual: 10
        wrapper.vm.numberClick(10);             // actual: 10
        wrapper.vm.operatorClick("=");          // actual: 20
        wrapper.vm.operatorClick("+");          // actual: 20
        wrapper.vm.numberClick(5);              // actual: 20
        wrapper.vm.clearClick();                // actual: still 20...
        wrapper.vm.numberClick(10);             // actual: still 20...
        wrapper.vm.operatorClick("=");          // actual: 30
        expect(wrapper.vm.runningTotal).to.equal(30);
    });
    
});


