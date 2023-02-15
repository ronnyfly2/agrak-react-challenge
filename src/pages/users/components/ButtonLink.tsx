import { FC } from 'react'

import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

interface Props {
  link: string;
  title: string;
}

export const ButtonLink :FC<Props> = ({ link, title })=>{
  const navigate = useNavigate()
  const goToCreateUser = (paramaLink:string) => {
    navigate(paramaLink)
  }
  return (
    <Button variant="contained" color="primary" onClick={()=>{goToCreateUser(link)}}>
      {title}
    </Button>
  )
}