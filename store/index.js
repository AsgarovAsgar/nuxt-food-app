export const state = () => ({
    fooddata: []
  })
  
export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data
  }
}


export const actions = {
  async getFoodData({
    state,
    commit
  }) {
    if (state.fooddata.length) return
    try {
      await fetch('fakeApi/production/restaurants',
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.AWS_API_KEY
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log("olalalala", data)
        commit('updateFoodData', data)
      })
    }
    catch (err) {
      console.log(err)
    }
  }
}
