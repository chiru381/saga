import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
    users_data: [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
    ],
    post_data: [],
}

export const addUserData = (user) => {
  return(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: "POST",
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(response => {
      dispatch(addUser(user))
    })
    .catch(error => {
      console.log("error", error)
    })
  }
}

export const getUserData = () => {
  return(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: "GET",
    })
    .then(res => res.json())
    .then(response => {
      dispatch(getUser(response))
    })
    .catch(error => {
      console.log("error", error);
    })
  }
}

export const getPostData = () => {
  return(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "GET",
    })
    .then(res => res.json())
    .then(response => {
      dispatch(getPost(response))
    })
    .catch(error => {
      console.log("error", error);
    })
  }
}

export const updateUserData = (user) => {
  return(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id, {
      method: "PUT",
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(response => {
      dispatch(updateUser(user))
    })
    .catch(error => {
      console.log("error", error);
    })
  }
}

export const deleteUserData = (id) => {
  return(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(response => {
      dispatch(deleteUser(id))
    })
    .catch(error => {
      console.log("error", error);
    })
  }
}

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        addUser: (state, action) => {
          let newUserId = state.users_data.length + 1;
          let newUser = { id: newUserId, ...action.payload }
          state.users_data.push(newUser)
        },
        getPost: (state, action) => {
          state.post_data = [...state.post_data, ...action.payload]
        },
        getUser: (state, action) => {
          state.users_data = [...state.users_data, ...action.payload]
        },
        updateUser: (state, action) => {
          let index = state.users_data.findIndex((user) => user.id === action.payload.id)
          state.users_data[index] = action.payload
        },
        deleteUser: (state, action) => {
          let index = state.users_data.findIndex((user) => user.id === action.payload)
          state.users_data.splice(index, 1)
        },
    }
})

export const { addUser, deleteUser, updateUser, getUser, getPost } = userReducer.actions

export default userReducer.reducer