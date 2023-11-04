import axios from "axios";

// const baseURL = "https://web-production-0986.up.railway.app"

const accountsApi = axios.create({
  baseURL: "https://web-production-0986.up.railway.app",
});

export const getAccounts = async () => {
  const { data } = await accountsApi.get(`/api/v1/cuentas/1`);
  return data;
};

export const saveAccount = async (account) => {
  // throw new Error('Error creando un producto');

  await accountsApi.post(`/api/v1/cuentas`, account);
};

export const updateAccount = async (cuentaId, account) => {
  // throw new Error('Error creando un producto');

  await accountsApi.patch(`/api/v1/cuentas/1/${cuentaId}`, account);
};

// export const getAccounts = async () => {
//   const response = await fetch(
//     `${baseURL}/api/v1/cuentas/1`
//   );
//   if (!response.ok) {
//     throw new Error("No se pudieron obtener los datos");
//   }
//   return response.json();
// };
