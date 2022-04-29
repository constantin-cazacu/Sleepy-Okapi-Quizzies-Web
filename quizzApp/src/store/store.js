import Vuex from 'vuex'
import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            user: undefined
        }
    },

    actions: {
        register({commit}, data) {
            fetch('https://pure-caverns-82881.herokuapp.com/api/v54/users', {
                headers: {
                    'X-Access-Token': 'ddd3284b8cc65992112c976be5af1126ef7e8f9cc4223df096ab164ee9df76d5',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({data})
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not OK');
                    }
                    return response.json()
                })
                .then(info => {
                    commit('registerUser', info)
                    console.log('Success:', info);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    },

    mutations: {
        registerUser(state, data) {
            state.user = data
        }
    }
})
