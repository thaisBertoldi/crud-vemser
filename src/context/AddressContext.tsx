import Notiflix from 'notiflix';
import { createContext, FC, ReactNode, useState } from "react";
import api from "../api";
import { ViaCEPDTO } from "../model/AddressDTO";

export const AddressContext = createContext({});

const AddressProvider: FC<ReactNode> = ({ children }) => {
  const [addressGet, setAddressGet] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);

  async function createAddress(values: ViaCEPDTO["viaCep"]) {
    const addressApi = {
      cep: values.cep.replace('-', ''),
      cidade: values.localidade,
      complemento: values.complemento,
      estado: values.uf,
      logradouro: values.logradouro,
      numero: Number(values.numero),
      pais: values.pais,
      tipo: values.tipo,
    };
    try {
      const { data } = await api.post("/endereco/663", addressApi);
      Notiflix.Notify.success('Endereço criado com sucesso!');
      returnAddress()
    } catch (error) {
      console.log("Erro ao tentar criar endereço na api.", error);
      Notiflix.Notify.failure('Sinto muito, mas nao foi possivel criar esse endereço.');
    }
  }

  async function returnAddress() {
    try {
      const { data } = await api.get("/endereco");
      setAddressGet(data);
      setLoading(false)
    } catch (error) {
      console.log("Erro ao tentar pegar os endereços cadastrados", error);
      setLoading(false)
      setError(true)
    }
  }

  async function deleteAddress(id: number){
    Notiflix.Confirm.show(
      'Alerta de Confirmação',
      'Tem certeza que deseja apagar esse endereço?',
      'Yes',
      'No',
      async function okCb() {
          try {
              await api.delete(`/endereco/${id}`)
              returnAddress()
              Notiflix.Notify.success('Você excluiu esse endereço.');
          } catch (error) {
              Notiflix.Notify.failure('Sinto muito, mas nao foi possivel excluir esse endereço.');
              console.log(error)
          }  
      },
      function cancelCb() {
          Notiflix.Notify.failure('Só pra testar né?');
      },
      {
        width: '320px',
        borderRadius: '8px',
      },
    );
  }

  return (
    <AddressContext.Provider
      value={{ createAddress, returnAddress, addressGet, deleteAddress, loading, setLoading, error, setError, }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;