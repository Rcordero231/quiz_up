export type UserFormDataType = {
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPass:string
}

export type UserType = {
    admin:null,
    created_on:string,
    first_name:string,
    last_name:string,
    modified_on:string,
    token:string,
    user_id:number,
    email:string
}

export type CategoryType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'

export type TokenType = {
    token: string,
    tokenExpiration: string
}

export type QuestionFormDataType = {
    question:string,
    answer:string
}

export type QuestionType = {
    id:number,
    question:string,
    answer:string,
    dateCreated:string,
    userId:number,
    author: UserType,
}