export type Item = {
    id: number, 
    image: string,
    name: string, 
    price: string, 
    stock: number, 
    type: string, 
    date: string, 
    quantity: number, 
    description: string, 
    discountPrice?: string,
    favorite: boolean
}

export type User = {
    id: number, 
    fullName: string, 
    password: string, 
    email: string, 
    userName: string, 
    signedIn: boolean
}

export type Company = {
    id: number, 
    name: string, 
    desc: string, 
    image: string
}

export type Article = {
    id: number, 
    image: string, 
    title: string, 
    desc: string, 
    user: string, 
    category: string, 
    date: string, 
    paragraph: string,
     header1: string
}

export type Coach = {
    id: number, 
    image: string,  
    desc: string, 
    name: string,
    longDesc: string
}

export type Service = {
    id: number, 
    image: string, 
    name: string, 
    desc: string
}

export type Subscribe = {
    email: string,
    id: number
}

export type Favorite = {
    id: number,
    name: string,
    description: string,
    image: string
}