import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Counter Title'
  }),
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) {
        return 'even'
      }
      return 'odd'
    }
  },
  actions: {
    increaseCount(num) {
      this.count+=num
    },
    decreaseCount(num) {
      this.count-=num
    },
  }
})
