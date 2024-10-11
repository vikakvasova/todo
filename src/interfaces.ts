export interface ITodo {
    id: number, 
    text: string, 
    completed?: boolean,
    userId?: number
    date: string, 
    isChecked: boolean
}