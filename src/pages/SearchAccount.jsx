import Title from "../components/Title";
import { Controller, useForm } from "react-hook-form";
import {
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import ButtonReturn from "../components/ButtonReturn";
import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../services/actions";
import { useEffect, useState } from "react";
// import { useRandom } from './../hooks/useRandom';

const columns = [
  {
    key: "codigo",
    label: "Código",
  },
  {
    key: "nombre",
    label: "Nombre",
  },
  {
    key: "haber",
    label: "saldo",
  },
];

// const getData = async () => {
//   const response = await fetch(
//     "https://web-production-0986.up.railway.app/api/v1/cuentas/1"
//   );
//   if (!response.ok) {
//     throw new Error("No se pudieron obtener los datos");
//   }
//   return response.json();
// };

const SearchAccount = () => {
  const [dataTable, setDataTable] = useState([]);
  const { control, watch } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
  });

  useEffect(() => {
    if (!isLoading) {
      setDataTable([...data]);
    }
  }, [isLoading]);

  useEffect(() => {
    // console.log(data)
    if (!isLoading) {
      const resultado = data.filter((find) =>
        find.nombre.toUpperCase().startsWith(watch("search").toUpperCase())
      );
      setDataTable(resultado);
    }
  }, [watch("search")]);

  return (
    <div>
      {isLoading ? (
        <>Cargando..</>
      ) : (
        <div>
          <Title text="Buscar cuenta" />
          <Controller
            control={control}
            name="search"
            render={({ field }) => (
              <Input
                value={field.value}
                onChange={field.onChange}
                type="text"
                label="Buscar"
                radius="none"
                size="lg"
                labelPlacement="outside"
                placeholder=" "
                variant="bordered"
              />
            )}
          />
          <div className="text-xl flex justify-between mt-14 mb-7 items-center">
            <p>Resultado</p>
            <ButtonReturn text="Descargar PDF " />
          </div>
          <div>
            <Table aria-label="Example table with dynamic content">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
              </TableHeader>
              <TableBody emptyContent={"No users found"} items={dataTable}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey) => (
                      <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAccount;
