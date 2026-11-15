import { create } from "zustand";
import { persist } from "";

// const getPostStore = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()
// }
if (!response.ok) {
    throw new Error("Fetching failed")
}

return post

