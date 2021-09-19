const state = {
        counter: 3
    };
    const mutations = {
        setIncrementCounter: function (state) {
            state.counter++;
            
          },
      
          setDecrementCounter: function (state) {
            if (state.counter > 0) {
              state.counter--;
      
            } else {
               
              `<p> Counter can't go below 0. </p>`;
            }
          },
    };
    const action = {};
    const getters = {
        getCounter: state => state.counter,
        getCounterPlus: state => state.counter + 2
    };

 export default {
     state,
     mutations,
     action,
     getters
 }

