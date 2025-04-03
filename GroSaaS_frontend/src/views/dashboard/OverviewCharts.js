import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/components'

// ✅ 추가: react-grid-layout 불러오기 (드래그 & 리사이징을 위한 핵심 라이브러리)
import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css' // ✅ 추가: layout CSS
import 'react-resizable/css/styles.css'   // ✅ 추가: resizing CSS

const ReactGridLayout = WidthProvider(RGL) // ✅ WidthProvider로 감싸야 반응형 동작

const OverviewCharts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    // ✅ 추가: 기존 <CRow> 대신 ReactGridLayout 사용하여 레이아웃 구성
    <ReactGridLayout
      className="layout"
      cols={12}            // 12칸 그리드
      rowHeight={100}      // 한 행의 높이(px)
      width={1200}         // 전체 레이아웃 너비
      isResizable={true}   // ✅ 꼭지점 리사이징 허용
      isDraggable={true}   // ✅ 드래그 앤 드롭 허용
      margin={[16, 16]}    // 컴포넌트 간 여백
    >
      {/* ✅ 차트 각각은 div로 감싸고 data-grid 속성으로 위치와 크기 지정 */}
      <div key="bar" data-grid={{ x: 0, y: 0, w: 4, h: 3, minW: 3, minH: 2 }}>
        <CCard className="h-100">
          <CCardHeader>Bar Chart <DocsLink name="chart" /></CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </div>

      <div key="line" data-grid={{ x: 4, y: 0, w: 4, h: 3, minW: 3, minH: 2 }}>
        <CCard className="h-100">
          <CCardHeader>Line Chart <DocsLink name="chart" /></CCardHeader>
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
                    data: [40, 20, 12, 39, 10, 40, 39],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [50, 30, 20, 10, 30, 20, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </div>

      <div key="doughnut" data-grid={{ x: 8, y: 0, w: 4, h: 3, minW: 3, minH: 2 }}>
        <CCard className="h-100">
          <CCardHeader>Doughnut Chart <DocsLink name="chart" /></CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </div>

      <div key="pie" data-grid={{ x: 0, y: 3, w: 4, h: 3, minW: 3, minH: 2 }}>
        <CCard className="h-100">
          <CCardHeader>Pie Chart <DocsLink name="chart" /></CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                  {
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    data: [30, 50, 100],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </div>
    </ReactGridLayout>
  )
}

export default OverviewCharts
