new Vue({
    el: '#services',
  
    data: {
      total: 0,
      elements: [
            {
                isActive: false,
                cost: 100
            },
            {
                isActive: false,
                cost: 150
            },
            {
                isActive: false,
                cost: 80
            },
            {
                isActive: false,
                cost: 300
            },
            {
                isActive: false,
                cost: 120
            },
      ]
    },
  
    methods: {
      selectService: function(num) {
        this.elements[num].isActive = !this.elements[num].isActive;
        if (this.elements[num].isActive) {
            this.total += this.elements[num].cost;
        } else {
            this.total -= this.elements[num].cost;
        }
      }
    }
})