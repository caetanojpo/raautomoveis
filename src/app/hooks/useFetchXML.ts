// hooks/useFetchXML.ts
import { useState, useEffect } from 'react';
import { parseStringPromise } from 'xml2js';

export type Veiculo = {
  id: number;
  loja: string;
  tipo: string;
  marca: string;
  data_cadastro: string;
  data_update: string;
  titulo: string;
  modelo: string;
  codigo_fipe: string;
  portas: number;
  cor: string;
  combustivel: string;
  ano_fab: number;
  ano_mod: number;
  placa: string;
  cambio: string;
  motor: string;
  zerokm: number;
  km: number;
  observacao: string;
  valor: number;
  opcional: string[];
  galeria: {
    item: string[];
  };
};

type VeiculosResponse = {
  veiculos: {
    veiculo: Veiculo[];
  };
};

const useFetchXML = (url: string) => {
  const [data, setData] = useState<Veiculo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/fetchXML?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const text = await response.text();
        const result: VeiculosResponse = await parseStringPromise(text, {
          explicitArray: false,
        });

        setData(result.veiculos.veiculo);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchXML;
