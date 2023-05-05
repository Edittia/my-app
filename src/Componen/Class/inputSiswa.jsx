import React from "react";
import { Container, Table, Button, Form, Label, Input, FormGroup } from "reactstrap";

let datasiswa = [
    {
        id: "1",
        nama: "Bambang",
        alamat: "Bogor",
        jenkel: "Laki-laki",
        jurusan: "Teknik Informatika",
        beasiswa: true,
    },
    {
        id: "2",
        nama: "Adi",
        alamat: "Solo",
        jenkel: "Laki-laki",
        jurusan: "DKV",
        beasiswa: false,    
    }



];

class InputSiswa extends React.Component {

    constructor() {
        super()
        this.state = {
            nama: '',
            alamat: '',
            jenkel: '',
            jurusan: '',
            beasiswa: false

        }
    }

    handleEditButton = (data) => {
        //console.log(dataSiswa);
        const newDatas = datasiswa.filter(
            i => i.id === data
        )
        console.log(newDatas)
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Daftar Siswa</h1>
                    <Table
                        bordered
                        hover
                        responsive
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Jenis Kelamin</th>
                                <th>Jurusan</th>
                                <th>Jalur Beasiswa</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datasiswa.map((siswa,i) => {
                                return(
                                    <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{siswa.nama}</td>
                                <td>{siswa.alamat}</td>
                                <td>{siswa.jenkel}</td>
                                <td>{siswa.jurusan}</td>
                                <td>{siswa.beasiswa.toString()}</td>
                                <td>
                                    <Button color="primary" onClick={() => this.handleEditButton
                                    (siswa.id)}>Ubah</Button> | <Button color="danger">Hapus</Button>
                                </td>
                            </tr>
                                )
                            })}
                            
                        </tbody>
                    </Table>

                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Nama
                            </Label>
                            <Input
                                id="nama"
                                name="nama"
                                placeholder="Tuliskan Nama"
                                type="email"
                                onChange={(a) => {
                                    return this.setState({ nama: a.target.value });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Alamat
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                onChange={(a) => {
                                    return this.setState({ alamat: a.target.value });
                                }}
                            />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>
                                Jenis Kelamin
                            </legend>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                    value="Laki-laki"
                                    onChange={(a) => {
                                        return this.setState({ jenkel: a.target.value });
                                    }}
                                />
                                {' '}
                                <Label check>
                                    Laki-laki
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                    value="Perempuan"
                                    onChange={(a) => {
                                        return this.setState({ jenkel: a.target.value });
                                    }}
                                />
                                {' '}
                                <Label check>
                                    Perempuan
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Jurusan
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                onChange={(a) => {
                                    return this.setState({ jurusan: a.target.value });
                                }}
                            >
                                <option>
                                    Teknik Informatika
                                </option>
                                <option>
                                    Akuntansi
                                </option>
                                <option>
                                    Ilmu Komunikasi
                                </option>
                                <option>
                                    Manajemen
                                </option>
                                <option>
                                    DKV
                                </option>
                            </Input>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                checked={this.state.beasiswa === true}
                                onChange={(a) => {
                                    return this.setState({ beasiswa: a.target.checked });
                                }}
                            />

                            {' '}
                            <Label check>
                                Beasiswa
                            </Label>
                        </FormGroup>
                        <Button onClick={() => {
                            const siswaBaru = this.state;
                            siswaBaru.id = Math.floor(Math.random() * 10000);
                            datasiswa.push(siswaBaru);
                            this.setState({
                                id: "",
                                nama: "",
                                alamat: "",
                                jenkel: "",
                                jurusan: "",
                                beasiswa: "",
                                
                            });
                        }}
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>
        )
    }

}

export default InputSiswa;