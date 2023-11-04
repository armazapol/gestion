import React from "react";
import Title from "../components/Title";
import { Controller, useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { saveAccount } from "../services/actions";
import toast, { Toaster } from "react-hot-toast";

const AddAccount = () => {
  const queryClient = new QueryClient();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      code: "",
      name: "",
    },
  });

  const mutation = useMutation({
    mutationFn: saveAccount,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });

  const onSubmit = (data) => {
    if (data.name === "" || data.code === "")
      return toast.error("Tiene que llenar todos los campos");
    mutation.mutate({
      negocioId: 1,
      nombre: data.name,
      codigo: data.code,
    });
    reset();
    return toast.success("Cuenta agregada correctamente!");
  };

  return (
    <div>
      <Toaster />
      <Title text="Agregar cuenta" />
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
        <Controller
          control={control}
          name="name"
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
        <div className="flex justify-end">
          <Button
            type="submit"
            color="success"
            radius="none"
            // isDisabled={productMutation.isLoading}
          >
            {/* {productMutation.isLoading ? "Cargando..." : "Crear producto"}> */}
            Crear cuenta
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
