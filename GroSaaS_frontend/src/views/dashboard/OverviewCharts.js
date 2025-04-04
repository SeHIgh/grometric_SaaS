import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CBadge } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/components'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import CIcon from '@coreui/icons-react'
import { cilStorage } from '@coreui/icons'

const OverviewCharts = () => {
  const random = () => Math.round(Math.random() * 100)

  // status 차트
  const status = 'Active' // 'Active', 'Inactive', 'Pending' 중 하나로 설정

  const getBadgeColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      default:
        return 'secondary'
    }
  }

  const [ipAddress, setIpAddress] = useState('Loading...')
  const [hostName, setHostName] = useState('Loading...')
  const createdDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date('2025-03-25'))

  useEffect(() => {
    // IP 주소 가져오기
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => {
        console.error('Error fetching IP address:', error)
        setIpAddress('Unavailable')
      })

    // 호스트 이름 가져오기
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => setHostName(data.hostname || data.org || 'Unavailable'))
      .catch((error) => {
        console.error('Error fetching host name:', error)
        setHostName('Unavailable')
      })
  }, [])

  // 메모리 사용량 차트
  const totalMemory = 31.3 //메모리 총 용량
  const usedMemory = 29.6 // 사용 중인 메모리 사용량
  const usedMemoryPercent = (usedMemory / totalMemory) * 100 // 메모리 사용량 퍼센트

  return (
    <CRow className="chart-section">
      {/* 길이를 맞추기 위한 col 생성 */}
      {/* 예) 12 -> 6, 6 이면 1줄에 2개 */}
      {/* 예) 12 -> 3, 3, 3, 3 이면 1줄에 4개 */}
      {/* 예) 12 -> 6, 6, 6, 6 이면 1줄에 2개씩 총 2줄 */}
      <CCol xs={12}></CCol>

      {/* Status */}
      {/* 차트 형태 : 텍스트 */}
      <CCol xs={3}>
        <CCard className="chart-card">
          <CCardHeader>
            <span>Status</span>
          </CCardHeader>
          <CCardBody>
            <div className="d-flex flex-row justify-content-start gap-2 align-items-center">
              <div
                className={`rounded-circle bg-${getBadgeColor(status)}`}
                style={{ width: '10px', height: '10px' }}
              ></div>
              <h4>{status}</h4>
            </div>
            <div style={{ whiteSpace: 'pre-line' }} className="mt-2">
              <p className="mb-0">
                IP: <span style={{ fontWeight: 'bold' }}>{ipAddress}</span>
              </p>
              <p className="mb-0">Host name:</p>
              <span style={{ fontWeight: 'bold' }}>{hostName}</span>
              <p className="mb-0">Created:</p>
              <span style={{ fontWeight: 'bold' }}>{createdDate}</span>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* CPU 사용량 */}
      {/* 차트 형태 : 도넛 차트 */}
      <CCol xs={3}>
        <CCard className="chart-card">
          <CCardHeader>CPU Usage</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Total CPU', 'System CPU', 'User CPU'],
                datasets: [
                  {
                    backgroundColor: ['#D5362F', '#EA8F28', '#60A755'],
                    data: [50, 5, 45],
                    borderColor: '#E8E9EA', // 테두리 색상 투명
                    borderWidth: 4, // 테두리 두께
                    borderRadius: 6, // 섹터의 모서리를 둥글게 설정
                    hoverOffset: 6, // 호버 시 섹터 확대
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%', // 도넛의 두께 조절
                plugins: {
                  legend: {
                    position: 'bottom', // 레이블을 아래에 위치, 'top'|'left'|'bottom'|'right'
                    align: 'start', // 'start'|'center'|'end'
                    labels: {
                      padding: 10,
                      boxWidth: 13,
                      color: '#000',
                      usePointStyle: true, // 포인트 스타일 사용 여부
                      pointStyle: 'circle', // circle, cross, dash, line, rect, star, triangle
                      font: {
                        // family: 'Noto Sans KR',
                        size: 10,
                        lineHeight: 2,
                        weight: 'normal',
                      },
                    },
                  },
                },
              }}
              height={210}
            />
          </CCardBody>
        </CCard>
      </CCol>

      {/* 메모리 사용량 */}
      {/* 차트 형태 : 바 (가로) */}
      <CCol xs={3}>
        <CCard className="chart-card">
          <CCardHeader>
            <span>Memory Usage</span>
          </CCardHeader>
          <CCardBody>
            <div className="d-flex justify-content-end align-items-center">
              <CIcon icon={cilStorage} className="text-secondary" size="5xl" />
            </div>
            <p className="p-1 mb-2">
              {usedMemory} / {totalMemory}GB
            </p>
            <div style={{ backgroundColor: '#d3d3d3', borderRadius: '6px', overflow: 'hidden' }}>
              <CChartBar
                data={{
                  labels: ['Memory Usage'],
                  datasets: [
                    {
                      label: 'Used Memory',
                      data: [usedMemoryPercent],
                      backgroundColor: '#206CC4', // 파란색 바
                      barPercentage: 1.0,
                      categoryPercentage: 1.0,
                    },
                  ],
                }}
                options={{
                  indexAxis: 'y',
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    datalabels: {
                      color: '#ffffff',
                      font: {
                        weight: 'bold',
                      },
                      anchor: 'center',
                      align: 'center',
                      formatter: (value) => `${parseFloat(value.toFixed(1))}%`,
                    },
                  },
                  scales: {
                    x: {
                      display: false,
                      min: 0,
                      max: 100,
                    },
                    y: {
                      display: false,
                    },
                  },
                }}
                height={40}
                plugins={[ChartDataLabels]}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>

      {/* 디스크 I/O 데이터 */}
      {/* 차트 형태 : 바 (세로) */}
      <CCol xs={3}>
        <CCard className="chart-card">
          <CCardHeader>
            <span>Disk I/O Data</span>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Read', 'Write'],
                datasets: [
                  {
                    label: 'Disk I/O Data',
                    backgroundColor: '#0CA1E8',
                    data: [0, 3809180.0],
                    barThickness: 30, // 바 두께 설정
                    borderRadius: { topLeft: 6, topRight: 6, bottomLeft: 0, bottomRight: 0 }, // 상단 모서리만 둥글게
                    borderSkipped: false, // 모든 모서리에 borderRadius 적용
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                  datalabels: {
                    color: '#60666C',
                    font: {
                      weight: 'normal',
                    },
                    anchor: 'end', // 바의 끝부분에 위치
                    align: 'end', // 바의 상단에 정렬
                    formatter: (value) => `${parseFloat(value.toFixed(2))} MB/s`,
                  },
                },
                scales: {
                  x: {
                    display: true,
                  },
                  y: {
                    display: false,
                  },
                },
                layout: {
                  padding: {
                    top: 20,
                  },
                },
              }}
              height={210}
              plugins={[ChartDataLabels]}
            />
          </CCardBody>
        </CCard>
      </CCol>

      {/* 바 차트 (템플릿) */}
      {/* <CCol xs={3}>
        <CCard className="chart-card">
          <CCardHeader>
            <span>Bar Chart</span>
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              // height={231}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
      {/* 라인 차트 (템플릿) */}
      {/* <CCol xs={3}>
        <CCard className="chart-card">
          <CCardHeader>Line Chart </CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              // height={231}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
      {/* 파이 차트 (템플릿) */}
      {/* <CCol xs={3}>
        <CCard className="chart-card">
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              // height={231}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
    </CRow>
  )
}

export default OverviewCharts
