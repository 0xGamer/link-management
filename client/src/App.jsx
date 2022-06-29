import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Center, Container, TextInput, Button, Table } from "@mantine/core";

function App() {
  let [users, serUsers] = useState({})

  let [name, setName] = useState()
  let [mail, setMail] = useState()
  let [password, setPassword] = useState()

  return (
    <div className="App">
      <h1 style={{ marginTop: 5 + `rem` }}>
        User Management App
      </h1>
<Container style={{width: 40+'%'}}>
      <TextInput
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        required
    />
  <br />
        <TextInput
        placeholder="email"
        value={mail}
        onChange={(e) => setMail(e.currentTarget.value)}
        required
    />
  <br />
        <TextInput
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
    />
    <br />
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
      >
        Add User
      </Button>
</Container>

    </div>
  )
}

export default App
