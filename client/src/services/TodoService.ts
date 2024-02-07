import {AxiosResponse} from 'axios'
import $api from '../http'
import { editResponse } from '../models/response/UpdateResponse'
import { DoneTodoResponse } from '../models/response/DoneResponse'
import { AddTodoRes } from '../models/response/AddTodoResponse'
import { DeletTodoRes } from '../models/response/DeleteTodoResponse'
import { GetTodosResponse } from '../models/response/GetTodosResponse'


export default class TodoService {
    static async editTodo(todo: string, id: string) : Promise<AxiosResponse<editResponse>> {
        return $api.put<editResponse>(`/editTodo/${id}`, {todo})
    }

    static async doneTodo(id: string) : Promise<AxiosResponse<DoneTodoResponse>> {
        return $api.put<DoneTodoResponse>(`/doneTodo/${id}`, {});
    }

    static async addTodo(todo: string) : Promise<AxiosResponse<AddTodoRes>> {
        return $api.post<AddTodoRes>('/addTodo', {todo});
    }
    
    static async deleteTodo(id: string) : Promise<AxiosResponse<DeletTodoRes>>{
        return $api.delete<DeletTodoRes>(`/deleteTodo/${id}`);
    }

    static async getTodos() : Promise<AxiosResponse<GetTodosResponse>> {
        return $api.get<GetTodosResponse>('/todos',{});
    }
}