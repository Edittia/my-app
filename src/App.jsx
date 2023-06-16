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
import React, { useEffect, useState } from "react";
import app from './firebase';
import { getDatabase, ref, onValue, update, remove } from "firebase/database";




let url = "https://tugas-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/siswa.json";

function App() {

  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    // const myFetch = async () => {
    //   try {
    //     let response = await fetch(url, {
    //       method: "GET",

    //     })

    //     if (!response.ok) {
    //       throw new Error(response.status);
    //     }
    //     let responseData = await response.json();

    //     const dataSiswa = [];
    //     for (const siswa_ in responseData) {
    //       if (Object.hasOwnProperty.call(responseData, siswa_)) {
    //         const alamat = responseData[siswa_]['alamat'];
    //         const asalsekolah = responseData[siswa_]['asalsekolah'];
    //         const jk = responseData[siswa_]['jk'];
    //         const nama = responseData[siswa_]['nama'];
    //         const id = siswa_;
    //         // console.log(data_siswa)
    //         dataSiswa.push({
    //           'alamat': alamat,
    //           'nama': nama,
    //           'jk': jk,
    //           'asalsekolah': asalsekolah,
    //           'id': id
    //         });
    //       }

    //     }

    //     setSiswa(dataSiswa)
    //   }
    //   catch (error) {
    //     console.log(`terjadi gangguan dengan pesan:"${error}"`);
    //   }

    // }
    const db = getDatabase(app);
    const starCountRef = ref(db, 'siswa/');
    
    onValue(starCountRef, (snapshot) => {
      const dataKu = snapshot.val();
      // console.log(typeof dataKu);
      const dataSiswa = [];
      for (const key in dataKu) {
        if (Object.hasOwnProperty.call(dataKu, key)) {
          const n = dataKu[key];
          dataSiswa.push({
            'alamat': n.alamat,
            'nama': n.nama,
            'jk': n.jk,
            'asalsekolah': n.asalsekolah,
            'id': key
          });
        }
      }

      setSiswa(dataSiswa)
    });

    // myFetch();
  }, [])

  const [tanggal, setTanggal] = useState(new Date());

  const [listsiswa, setListsiswa] = useState({
    id: "",
    nama: "",
    alamat: "",
    jk: "",
    asalsekolah: "",
    button: "",
  });


  let clearState = () => {
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
    // let newData = siswa.filter((siswa) => siswa.id !== data);
    // siswa = newData;
    const db = getDatabase(app);
    const starCountRef = ref(db, 'siswa/' + data);

    remove(starCountRef, { data }
    ).then(() => {
      alert('data berhasil dihapus')
      // Data saved successfully!
    })
      .catch((error) => {
        alert('data gagal hapus')
        // The write failed...
      });;
    clearState();
  };

  let editButton = (data) => {
    console.log('Ini mulai ubah')
    let newData = siswa.filter((i) => i.id === data);
    console.log(' ini id => ' + data);

    return setListsiswa({
      id: data,
      nama: newData[0].nama,
      alamat: newData[0].alamat,
      asalsekolah: newData[0].asalsekolah,
      jk: newData[0].jk,
      button: "ubah",
    });
  };



  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="container">
        <div className="row text-center"><h2>Daftar Mahasantri Baru</h2></div>
        <Button color="danger" onClick={() => {
          toggle();
          clearState();
        }}>
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
                    checked={listsiswa.jk === "L"}
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
                    checked={listsiswa.jk === "P"}
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
                  if (listsiswa.button === "ubah") {
                    const db = getDatabase(app);
                    const dbref = ref(db, 'siswa/' + listsiswa.id);
                    const data = {
                      nama: listsiswa.nama,
                      alamat: listsiswa.alamat,
                      jk: listsiswa.jk,
                      asalsekolah: listsiswa.asalsekolah,
                    }
                    update(dbref, data )
                    .then(() => {
                      alert('data berhasil masuk update')
                      // Data saved successfully!
                    })
                      .catch((error) => {
                        alert('data gagal')
                        // The write failed...
                      });;
                    clearState();
                    // let data = siswa.findIndex((a) => a.id === listsiswa.id);
                    // console.log(data);
                    // siswa.splice(data, 1, listsiswa);
                    // clearState();
                  } else {
                    const newListSiswa = { ...listsiswa };
                    const siswaBaru = newListSiswa;
                    if (siswaBaru.nama.trim() === "") {
                      alert("Nama harus diisi");
                    } else {
                      siswa.push(siswaBaru);

                      const myFetch = async () => {
                        try {
                          let response = await fetch(url, {

                            method: "POST",
                            body: JSON.stringify(siswaBaru),
                          })
                          alert("Data berhasil masuk");
                          console.log(siswaBaru)
                          console.log(response)
                          if (!response.ok) {
                            throw new Error(response.status);
                          }
                          let responseData = await response.json();
                          console.log(responseData);
                        }
                        catch (error) {
                          console.log(`terjadi gangguan dengan pesan:"${error}"`);
                        }
                      }

                      myFetch();
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
                <tr key={i}>
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
