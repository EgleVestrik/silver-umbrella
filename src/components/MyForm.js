import { Box, Button, TextField } from "@mui/material"
import React, { useState } from "react"
import React, { useEffect } from "react"
const MyForm = () => {
  const [name, setName] = useState("")
  const [school, setSchool] = useState("")

  useState[myForm, setMyForm]=useState(null)

  const saveFields=event =>{
    setMyForm(previous =>
        ...previous)
  }

  const submitForm = event => {
    event.preventDefault()

    console.log({ name })
  }

  useEffect(() => {
    return () => {
      
    }
  }, [])
  

  return (
    <form onSubmit={submitForm}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2em"
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={event => setName(event.target.value)}
        />
        <TextField
          id="outlined-required"
          label="School"
          onChange={saveFields}
        />
        <Button
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default MyForm
