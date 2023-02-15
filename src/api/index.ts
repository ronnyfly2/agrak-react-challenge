import axios from 'axios'
import { User } from '../interfaces'

const BASE_URL =
  'https://635017b9df22c2af7b630c3e.mockapi.io/api/v1'

const apiClient = axios.create({
  baseURL: BASE_URL,
})

export const getUsers = async (): Promise<User[]> =>
  apiClient.get('/users').then((res) => res.data)

export const getUser = async (id: number): Promise<User> =>
  apiClient.get(`/users/${id}`).then((res) => res.data)

export const createUser = async (user: User): Promise<User> =>
  apiClient.post('/users', user).then((res) => res.data)

export const updateUser = async (
  user: User
): Promise<User> => apiClient.put(`/users/${user.id}`, user).then((res) => res.data)

export const deleteUser = async (
  id: number,
): Promise<User> => apiClient.delete(`/users/${id}`).then((res) => res.data)