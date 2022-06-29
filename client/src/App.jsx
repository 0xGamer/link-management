import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, TextInput, Button, Table } from "@mantine/core";
import Service from "./services/user.service";

function App() {
  useEffect(() => {
    getUsers();
  }, []);

  let [name, setName] = useState();
  let [email, setMail] = useState();
  let [password, setPassword] = useState();

  let [updateActive, setUpdateActive] = useState(false);
  let [updateId, setUpdateId] = useState()

  let [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      let users = await Service.getAllUsers();
      setUsers(users.data);
    } catch {
      alert("Cannot fetch users");
    }
  };

  const addUser = async () => {
    try {
      let user = { name, email, password };
      await Service.addUser(user);
      setMail("");
      setName("");
      setPassword("");
      getUsers();
    } catch {
      alert("Error creating user");
    }
  };

  const deleteUser = async (id) => {
    try {
      await Service.deleteUser(id);
      getUsers();
    } catch {
      alert("Could not delete user");
    }
  };

  const activateUpdate = async (element) => {
    setName(element.name)
    setMail(element.email)
    setPassword(element.password)
    setUpdateId(element._id)
    setUpdateActive(true)
  }

  const updateUser = async () => {
    try {
      let user = { name, email, password };
      await Service.updateUser(updateId, user);
      setMail("");
      setName("");
      setPassword("");
      setUpdateActive(false)
      getUsers();
    } catch {
      alert("Error creating user");
    }
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: 5 + `rem` }}>User Management App</h1>
      <Container style={{ width: 40 + "%" }}>
        <TextInput
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
        />
        <br />
        <TextInput
          placeholder="email"
          value={email}
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
        {updateActive ? 

        <Button
          onClick={updateUser}
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Update
        </Button>
          :
        <Button
          onClick={addUser}
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Add User
        </Button>
        }

      </Container>
      <br />
      <br />
      <Container style={{ textAlign: "left" }}>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((element) => {
              return (
                <tr key={element._id.toString()}>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.password}</td>
                  <td>
                    <Button color="red" onClick={() => deleteUser(element._id)}>
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => activateUpdate(element)}>
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
