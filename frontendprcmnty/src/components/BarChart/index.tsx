//--grafico de barras, com dados mockados para testes - modelo inicial
import Chart from "react-apexcharts"; 
const Barchart = () => {

    const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
};

const mockData = {
    labels: {
        categories: ['ALFA VIDA', 'ANGELUS SEGUROS PESSOA', 'ANGELUS SEGUROS RESIDE', 'ANGELUS SEGUROS RESIDENCIAL', 'AXA EMPRESARIAL','ZURICH_SEGURADOS_VIDA_CARREFOUR']
    },
    series: [
        {
            name: "% Sucesso",
            data: [43.6, 67.1, 67.7, 45.6, 71.1,80.9]                   
        }
    ]
};





    return (
       <Chart
         options={{...options,xaxis:mockData.labels}}
         series={mockData.series}
         type="bar"
         height={240}


       /> 
       
    );
}

export default Barchart;
