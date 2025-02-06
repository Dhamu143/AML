import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { CChartPie } from "@coreui/react-chartjs";
import ReactApexChart from "react-apexcharts";

const MainDashboard = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "",
        data: [
          4000, 6000, 2000, 5000, 3000, 1000, 7000, 2000, 3000, 1500, 16000,
          12000, 8000, 10000, 9000,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "2023-09-17",
          "2023-09-18",
          "2023-09-19",
          "2023-09-20",
          "2023-09-21",
          "2023-10-01",
          "2023-10-10",
          "2023-10-15",
          "2023-10-20",
          "2023-10-25",
          "2023-11-01",
          "2023-11-05",
          "2023-11-10",
          "2023-11-15",
          "2023-11-20",
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Total alerts";
          },
        },
      },
    },
  });

  return (
    <>
      <CRow className="g-4 mb-4">
        <CCol xs={12} md={4} lg={4}>
          <CCard>
            <CCardHeader>AML Risk Levels</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ["Low", "Medium", "High"],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ["green", "orange", "red"],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                style={{ minHeight: "355px" }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} md={4} lg={4}>
          <CCard>
            <CCardHeader>SG Risk Levels</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ["Low", "Medium", "High"],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ["green", "orange", "red"],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                style={{ minHeight: "355px" }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} md={4} lg={4}>
          <CCard>
            <CCardHeader>Number of customers in each status</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ["Low", "Medium", "High"],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ["green", "orange", "red"],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                style={{ minHeight: "355px" }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow className="g-4">
        <CCol xs={12} md={6} lg={6}>
          <CCard>
            <CCardHeader>Number of new alerts with periods</CCardHeader>
            <CCardBody>
              {/* <div style={{ width: "100%", height: "400px" }}> */}
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="bar"
                />
              {/* </div> */}
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} md={6} lg={6}>
          <CCard>
            <CCardHeader>Number of closed alerts with periods</CCardHeader>
            <CCardBody>
              {/* <div style={{ width: "100%", height: "400px" }}> */}
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="bar"
                />
              {/* </div> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default MainDashboard;
