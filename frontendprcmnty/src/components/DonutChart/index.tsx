//--grafico de rosca - mockdata, bases de testes simulação
import Chart from "react-apexcharts"; 
const DonutChart = () => {

   const mockData = {
    series: [477138, 499928, 444867, 220426, 473088,453088],
    labels: ['Alfa Vida', 'Angelus Seguros Pessoa', 'Angelus Seguros Reside', 'Angelus Seguros Residencial', 'Axa Empresarial','Zurich Segurados vida carrefour']
}
const options = {
    legend: {
        show: true
    }
}
return (
       <Chart
         options={{...options,labels:mockData.labels}}
         series={mockData.series}
         type="donut"
         height={240}
         

       /> 
       
    );
}
export default DonutChart;
