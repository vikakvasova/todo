import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

export const fetchTodos = createAsyncThunk(
    "todo/fetchTodos",
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            if (!response.ok) {
                throw new Error("Что-то пошло не так")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

export const deleteTodos = createAsyncThunk(
    "todo/deleteTodos",
    async function(id: number, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todossssss/${id}`, {method: "DELETE"});
            if (!response.ok) {
                throw new Error("Ошибка при удалении")
            }
            dispatch(removeTodoRedux(id))
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        status: null,
        error: null,
        searchtodo: [],
        activetodo: [],
    },
    reducers: {
        addTodoRedux(state: any, {payload}: {payload: any}) {
            state.todo.push(payload);
        },
        removeTodoRedux(state: any, {payload}: {payload: any}) {
            const index = state.todo.findIndex((item: ITodo) => item.id === payload)
            state.todo.splice(index, 1);
        },
        changeTodoRedux(state: any, {payload}: {payload: any}) {
            const current = state.todo.find((item: ITodo) => item.id === payload);
            if (current != undefined) {
                current.isChecked = !current.isChecked;
            }
        },
        deleteAllTodoRedux(state: any) {
            state.todo.length = 0;
        },
        deleteLastTodoRedux(state: any) {
            state.todo.pop();
        },
        showCompletedTodoRedux(state: any) {
            state.activetodo = state.todo.filter((item: ITodo) => item.isChecked);
        },
        showAllTodoRedux(state: any) {
            state.searchtodo = [];
            state.activetodo = [];
        },
        showSearchResultsRedux(state: any, {payload}: {payload: any}) {
            state.searchtodo = payload;
        }
    },
    extraReducers: (builder) => {
        return builder.addCase(fetchTodos.pending, (state: any) => {
            state.status = "loading";
            state.error = null;

        }),
        builder.addCase(fetchTodos.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.todo = payload;
        }),
        builder.addCase(fetchTodos.rejected, (state: any, {payload}: {payload: any}) => {
            state.status = "rejected";
            state.error = payload;
            state.todo = [];
        }),
        builder.addCase(deleteTodos.rejected, (state: any, {payload}: {payload: any}) => {
            state.status = "rejected";
            state.error = payload;
        })
    }
})


const {actions, reducer} = todoSlice;

export default reducer;
export const {addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, deleteLastTodoRedux, showCompletedTodoRedux, showSearchResultsRedux, showAllTodoRedux} = actions;