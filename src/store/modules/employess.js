// import axios from 'axios'
 
const state={
    data:[
        {
            id: 1,
            name: "MD",
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
    },
    deleteEmployee({commit},payload){
        console.log(commit);
        console.log(payload);
        commit('setDeleteEmployee',payload);
    }
};
const mutations={
    setAddEmployee: (state,payload) =>{
        state.data.push(payload);
    },
    setDeleteEmployee: (state,id1) =>{
        console.log(id1);
        let newArr = state.data.filter((todo)=> todo.id !== id1);
        state.data=[...newArr];
        console.log(newArr)
    }
};
 
export default{
    state,
    getters,
    actions,
    mutations
}
