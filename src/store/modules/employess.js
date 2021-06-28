// import axios from 'axios'
 
const state={
    data:[
        {
            id: 1,
            name: "habib 1",
            designation: "associate engineer",
            email:"habib@gmail.com",
            phone: "01741661276",
            dateOfJoining:"11/11/2020"
        },
        {
            id: 2,
            name: "habib 2",
            designation: "associate engineer",
            email:"habib@gmail.com",
            phone: "01741661276",
            dateOfJoining:"11/11/2020"
        },
        {
            id: 3,
            name: "habib 3",
            designation: "associate engineer",
            email:"habib@gmail.com",
            phone: "01741661276",
            dateOfJoining:"11/11/2020"
        },
        {
            id: 4,
            name: "habib 4",
            designation: "associate engineer",
            email:"habib@gmail.com",
            phone: "01741661276",
            dateOfJoining:"11/11/2020"
        },
    ]
};
const getters={
    getterData(state){
        return state.data;
    }
};
const actions={
    addEmployee({commit},payload){
        console.log(commit);
        console.log(payload);
        commit('setAddEmployee',payload);
    }
};
const mutations={
    setAddEmployee: (state,payload) =>{
        state.data.push(payload);
    }
};
 
export default{
    state,
    getters,
    actions,
    mutations
}
