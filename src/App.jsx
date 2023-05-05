import logo from './logo.svg';
import './App.css';
import {
  Button,
  Container,
  Table,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import React, { useState } from "react";


let siswa = [
  {
    id: "12",
    nama: "Bayu Nugroho",
    jk: "P",
    asalsekolah: 'Ponpes Darussalam',
    alamat: "Samarinda",
    button: "",
  },
  {
    id: "23",
    nama: "Ahmad Malik Ibrahim",
    jk: "P",
    asalsekolah: 'Ponpes Ar-Rahman Malang',
    alamat: "Samarinda",
    button: "",
  },
  {
    id: "32",
    nama: "Akbar Dwi Prasetyo",
    jk: "L",
    asalsekolah: 'Ponpes An-Nahl Mojokerto',
    alamat: "Samarinda",
    button: "",
  },
];

function App() {
  const [tanggal, setTanggal] = useState(new Date());

  const [listsiswa, setListsiswa] = useState({
    id: "",
    nama: "",
    alamat: "",
    jk: "",
    asalsekolah: "",
    button: "",
  });


  let clearState= () =>{
    setListsiswa({
      id: "",
      nama: "",
      alamat: "",
      jk: "",
      asalsekolah: "",
      button: "simpan",
    });
  }

   let deleteButton = (data) => {
     let newData = siswa.filter((siswa) => siswa.id !== data);
     siswa = newData;
     clearState();
   };

  let editButton = (data) => {
    let newData = siswa.filter((i) => i.id === data);
    console.log( newData[0].id);
    return setListsiswa({
      id:newData[0].id,
      nama: newData[0].nama,
      alamat: newData[0].alamat,
      asalsekolah: newData[0].asalsekolah,
      jk: newData[0].jk,
      button: "ubah",
    });
    // console.log(listsiswa);
  };


 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="container">
        <div className="row text-center"><h2>Daftar Mahasantri Baru</h2></div>
        <Button color="danger" onClick={()=>{ toggle()
           clearState() }}>
          Tambah data
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Nama</Label>
                <Input
                  value={listsiswa.nama}
                  id="exampleEmail"
                  name="nama"
                  placeholder="with a placeholder"
                  type="text"
                  onChange={(a) => {
                    console.log(a.target.value);
                   const newListSiswa = { ...listsiswa };
                   newListSiswa.nama = a.target.value;
                   setListsiswa(newListSiswa);

                  }}
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Jenis kelamin</legend>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    value="L"
                    checked={listsiswa.jk == "L"}
                    onClick={(a) => {
                     const newListSiswa = { ...listsiswa };
                     newListSiswa.jk = a.target.value;
                     setListsiswa(newListSiswa);

                    }}
                  />{" "}
                  <Label check>Laki-laki</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    value="P"
                    checked={listsiswa.jk == "P"}
                    onClick={(a) => {
                     const newListSiswa = { ...listsiswa };
                     newListSiswa.jk = a.target.value;
                     setListsiswa(newListSiswa);

                    }}
                  />{" "}
                  <Label check>Perempuan</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Alamat</Label>
                <Input
                  value={listsiswa.alamat}
                  id="exampleText"
                  name="text"
                  type="textarea"
                  onChange={(a) => {
                    console.log(a.target.value);
                  const newListSiswa = { ...listsiswa };
                  newListSiswa.alamat = a.target.value;
                  setListsiswa(newListSiswa);

                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label >Asal Sekolah</Label>
                <Input
                  value={listsiswa.asalsekolah}
                  type="text"
                  onChange={(a) => {
                   const newListSiswa = { ...listsiswa };
                   newListSiswa.asalsekolah = a.target.value;
                   setListsiswa(newListSiswa);
                  }}
                />{" "}
              </FormGroup>
              <Button
                onClick={() => {
                  if (listsiswa.button == "ubah") {
                    let data = siswa.findIndex((a) => a.id === listsiswa.id);
                    console.log(data);
                    siswa.splice(data, 1, listsiswa);
                    clearState();
                  } else {
                      const newListSiswa = { ...listsiswa };
                      newListSiswa.id = Math.floor(Math.random() * 10);
                      const siswaBaru = newListSiswa;
                      if (siswaBaru.nama.trim() === "") {
                        alert("Nama harus diisi");
                      } else {
                        siswa.push(siswaBaru);
                        clearState();
                        console.log(siswaBaru);
                      }
                      setListsiswa(newListSiswa); 
                  }
                }}
              >
                Submit
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>

        <Table bordered borderless hover responsive size="sm" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jenis Kelamin</th>
              <th>Asal Sekolah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa.map((list, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{list.nama}</td>
                  <td>{list.alamat}</td>
                  <td>{list.jk}</td>
                  <th>{list.asalsekolah}</th>
                  <td>
                    <Button
                      color="success"
                      onClick={() => {
                        editButton(list.id);
                        toggle();
                      }}
                    >
                      Edit 
                    </Button>
                    |{" "}
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteButton(list.id);
                      }}
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );

}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Barang from './Componen/Class/barang';

// function App() {
//   return (
//     <>
//       <Barang />
//     </>
//   );
// }


// export default App;


// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edittia <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
    