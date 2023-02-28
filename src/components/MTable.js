import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const TableEm = styled.div`

.table {
    width: 90%;
    margin: 0 auto;
  }
  
  `;


    // // mock data - strongly typed if you are using TypeScript (optional, but recommended)
    // const data = [
    //   {
    //     firstName: "John",
    //     lastName: "Doe",
    //     dateOfBirth: "06-10-92",
    //     startDate: "01-22-2023",
    //     street: "20, Test street",
    //     city: "New York",
    //     state: "Manhattan",
    //     zipcode: "10451",
    //     department: "Marketing",
    //   },
    // ];

function MTable() {

   const data = useSelector(state => state.users);

  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 50,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 50,
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of birth",
        size: 50,
      },
      {
        accessorKey: "startDate",
        header: "Start date",
        size: 50,
      },
      {
        accessorKey: "street",
        header: "Street",
        size: 50,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 50,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 50,
      },
      {
        accessorKey: "zipcode",
        header: "Zip code",
        size: 50,
      },
      {
        accessorKey: "department",
        header: "Department",
        size: 50,
      },
    ],
    []
  );
  console.log(data)

  return (
    <TableEm>
      <div  className="table">
        <MaterialReactTable
          columns={columns}
          data={data.users}
          enableGlobalFilter={false} //turn off a feature
        />
      </div>
    </TableEm>
  );
}

export default MTable;
