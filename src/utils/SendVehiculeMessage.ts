import { Veiculo } from "@/app/hooks/useFetchXML";
import { formatCurrency } from "./formatCurrency";

export const handleSendVehiculeMessage: any = (veiculo: Veiculo) => {
  const preco = formatCurrency(veiculo.valor).toString();
  const whatsMessage = `
        Olá, tudo bem? Acessei o seu site https://www.raautomoveis.com.br/ e queria saber mais sobre o seguinte veículo:
  
        Veículo: ${veiculo.titulo}
        Marca: ${veiculo.marca}
        Portas: ${veiculo.portas}
        Cor: ${veiculo.cor}
        Ano Fab.: ${veiculo.ano_fab}
        KM: ${veiculo.km}
        Preço: ${preco}
  `;
  //55119743269995511974326999
  const url = `https://api.whatsapp.com/send?phone=5511974326999&text=${encodeURIComponent(
    whatsMessage
  )}`;
  window.open(url, "_blank");
};
