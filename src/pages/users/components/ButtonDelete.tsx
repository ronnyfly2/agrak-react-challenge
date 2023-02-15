import { useState } from "react"
import * as apiClient from "../../../api"
import { Button } from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

interface Props {
  id: string | number
}

export const ButtonDelete = ({ id }: Props) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteUser = () => {
    handleDelete(id)
    setOpen(false)
  }


  const deleteUserMutation = useMutation(apiClient.deleteUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['users'])
      navigate('/')
    },
  })

  const handleDelete = async (id:string|number) => {
    deleteUserMutation.mutate(Number(id))
  }

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleClickOpen}
        style={{ marginRight: '10px' }}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete User'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}