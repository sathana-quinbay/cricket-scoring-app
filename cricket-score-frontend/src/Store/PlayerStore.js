export default{
    state:{
       players:[{
        id:"123",
        name:"Kishore",
        status:"playing"
       },
      {
        id:"124",
        name:"Sathana",
        status:"bench"
      },
      {
        id:"125",
        name:"Daniel",
        status:"playing"
      },
      {
        id:"126",
        name:"Ashwin",
        status:"Bench"
      },
    ]
    },

    getters:{
        getplayersList(state){
            return state.players;
        }
    },

    mutations:{
        
    },

    actions:{

    }
}