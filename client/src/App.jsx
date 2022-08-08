import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Center, Container, TextInput, Button, Table, Checkbox  } from "@mantine/core";
import Service from "./services/link.service";

function App() {
  useEffect(() => {
    getLinks();
  }, []);

  let [linkurl, setLinkurl] = useState();
  let [file, setFile] = useState(false);
  let [form, setForm] = useState(false);

  let [updateActive, setUpdateActive] = useState(false);
  let [updateId, setUpdateId] = useState()

  let [links, setLinks] = useState([]);
  const getLinks = async () => {
    try {
      let links = await Service.getAllLinks();
      setLinks(links.data);
    } catch {
      alert("Cannot fetch links");
    }
  };

  const addLink = async () => {
    try {
      let link = { linkurl, file, form };
      await console.log(link)
      await Service.addLink(link);
      setFile(false);
      setLinkurl("");
      setForm(false);
      getLinks();
    } catch(e) {
      console.log(e);
    }
  };

  const deleteLink = async (id) => {
    try {
      await Service.deleteLink(id);
      getLinks();
    } catch {
      alert("Could not delete link");
    }
  };

  const activateUpdate = async (element) => {
    setLinkurl(element.linkurl)
    setFile(element.file)
    setForm(element.form)
    setUpdateId(element._id)
    setUpdateActive(true)
  }

  const updateLink = async () => {
    try {
      let link = { linkurl, file, form };
      await Service.updateLink(updateId, link);
      setFile(false);
      setLinkurl("");
      setForm(false);
      setUpdateActive(false)
      getLinks();
    } catch {
      alert("Error creating link");
    }
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: 5 + `rem` }}>Link Management App</h1>
      <Container style={{ width: 40 + "%" }}>
        <TextInput
          placeholder="Linkurl"
          value={linkurl}
          onChange={(e) => setLinkurl(e.currentTarget.value)}
          required
        />
        <br />
        <Checkbox checked={file} onChange={(event) => setFile(event.currentTarget.checked)} color="dark" label="File"/>
        <br />
        <Checkbox checked={form} onChange={(event) => setForm(event.currentTarget.checked)} color="dark" label="Form"/>
        <br />
        {updateActive ? 

        <Button
          onClick={updateLink}
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Update
        </Button>
          :
        <Button
          onClick={addLink}
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Add Link
        </Button>
        }

      </Container>
      <br />
      <br />
      <Container style={{ textAlign: "left" }}>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Linkurl</th>
              <th>File</th>
              <th>Form</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {links.map((element) => {
              return (
                <tr key={element._id.toString()}>
                  <td>{element.linkurl}</td>  
                  <td><Checkbox checked={element.file}  color="dark"  /></td>
                  <td><Checkbox checked={element.form}  color="dark"  /></td>
                  <td>
                    <Button color="red" onClick={() => deleteLink(element._id)}>
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
