import React from "react";


class Barang extends React.Component {
    render() {
        return (
            <>
                <h1>Daftar barang</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Stock</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>Sabun</th>
                            <th>20</th>
                            <th>
                                <button>Tambah</button>
                                <button>Hapus</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Barang;