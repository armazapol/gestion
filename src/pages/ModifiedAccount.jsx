import React from "react";
import Title from "../components/Title";
import { Controller, useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateAccount } from "../services/actions";
import toast, { Toaster } from "react-hot-toast";
const ModifiedAccount = () => {
  const queryClient = new QueryClient();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      code: "",
      nombre: "",
      import: "",
    },
  });

  const mutation = useMutation({
    mutationFn: updateAccount,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });

  const onSubmit = (data) => {
    if (data.nombre === "" || data.code === "" || data.import === "")
      return toast.error("Tiene que llenar todos los campos");
    mutation.mutate(data.code, {
      nombre: data.nombre,
      debe: 1,
      haber: 1,
    });
    reset();
    return toast.success("Cuenta modificada correctamente!");
  };

  return (
    <div>
      <Toaster />
      <Title text="Modificar cuenta" />
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="code"
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              type="text"
              label="Código"
              radius="none"
              size="lg"
              labelPlacement="outside"
              placeholder="Ingresar código"
              variant="bordered"
            />
          )}
        />
        <div className="border-b-3 my-5" />
         <Controller
          control={control}
          name="nombre"
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              type="text"
              label="Nombre"
              radius="none"
              size="lg"
              labelPlacement="outside"
              placeholder="Ingresar nombre"
              variant="bordered"
            />
          )}
        />
        <Controller
          control={control}
          name="import"
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              type="text"
              label="Importe"
              radius="none"
              size="lg"
              labelPlacement="outside"
              placeholder="Ingresar importe"
              variant="bordered"
            />
          )}
        />
        <div className="flex justify-between">
          <Button
            type="button"
            radius="none"
            className="bg-transparent border-red-400 border-2 text-red-400"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            color="success"
            radius="none"
            // isDisabled={productMutation.isLoading}
          >
            {/* {productMutation.isLoading ? "Cargando..." : "Crear producto"}> */}
            Guardar cambios
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModifiedAccount;
