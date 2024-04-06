import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "../../Components/Data/Data";

    const  userSlice =  createSlice({

        name : "users",
        initialState : userlist,
        reducers : {
            adduser: (state , action) =>{
                state.push(action.payload);
            },
            updateuser : (state ,action) =>{

                const {id,image,title,price,offpr,description} = action.payload;
                const uproduct = state.find(user => user.id == id);

                if(uproduct){
                    uproduct.image = image;
                    uproduct.title = title;
                    uproduct.price = price;
                    uproduct.offpr = offpr;
                    uproduct.description = description;
                }
            },
            deleteuser :(state , action )=>{
                const {id} = action.payload;
                const dproduct =state.find(user => user.id == id);

                if(dproduct){

                    return state.filter(f => f.id !== id);

                }

            }
        }

    })

    
export const {adduser,updateuser,deleteuser} = userSlice.actions;
export default userSlice.reducer;