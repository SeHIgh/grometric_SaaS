import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFooter,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilArrowRight,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import OverviewCharts from './OverviewCharts'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const cvelistExample = [
    {
      CVE_ID: 'CVE-2024-10952',
      Severity: 'High',
      Date: '2024-12-03',
      Description:
        "WordPress의 'The Authors List' 플러그인은 2.0.4 버전까지 'update_authors_list_ajax' AJAX 액션을 통해 임의의 숏코드 실행 취약점이 있습니다. 이를 통해 인증되지 않은 공격자가 임의의 숏코드를 실행할 수 있습니다.",
    },
    {
      CVE_ID: 'CVE-2024-49392',
      Severity: 'Medium',
      Date: '2024-10-17',
      Description:
        'Acronis Cyber Files(Windows) 9.0.0x24 이전 버전의 등록 초대 페이지에서 저장된 크로스 사이트 스크립팅(XSS) 취약점이 발견되었습니다.',
    },
    {
      CVE_ID: 'CVE-2024-3081',
      Severity: 'Low',
      Date: '2024-03-29',
      Description:
        "EasyCorp의 EasyAdmin 4.8.9 버전까지 'assets/js/autocomplete.js' 파일의 'Autocomplete' 기능에서 크로스 사이트 스크립팅(XSS) 취약점이 발견되었습니다.",
    },
    {
      CVE_ID: 'CVE-2023-3543',
      Severity: 'Medium',
      Date: '2023-07-07',
      Description:
        "GZ Scripts의 Availability Booking Calendar PHP 1.8 버전의 'load.php' 파일에서 크로스 사이트 스크립팅(XSS) 취약점이 발견되었습니다.",
    },
    {
      CVE_ID: 'CVE-2023-38054',
      Severity: 'High',
      Date: '2024-07-09',
      Description:
        "'/customers/{customerId}' 경로의 GET, PUT, DELETE 메소드에서 낮은 권한의 사용자가 다른 사용자의 데이터를 조회, 수정 또는 삭제할 수 있는 취약점이 발견되었습니다.",
    },
  ]

  const [currentTime, setCurrentTime] = React.useState(new Date())
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()) // 1초마다 현재 시간을 업데이트
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    // 대시보드 메인 화면
    <div className="container-grid">
      {/* 위젯 */}
      {/* <WidgetsDropdown className="mb-4" /> */}

      {/* Overview 섹션 */}
      <CCard className="overview-section">
        <CCardBody className="flex flex-direction-column gap-1">
          <CRow>
            <CCol sm={5} className="h-[40px]">
              <h4 id="traffic" className="card-title mb-0">
                Overview
              </h4>
              <div className="small text-body-secondary mb-0">{currentTime.toLocaleString()}</div>
            </CCol>
            <CCol sm={7} className="m-0 p-0 d-flex justify-content-end align-items-center">
              <CButton color="outline-dark" className="float-end border-2">
                <span>VM Monitoring </span>
                <CIcon icon={cilArrowRight} />
              </CButton>
            </CCol>
          </CRow>

          {/* 차트 관리 컴포넌트 */}
          <OverviewCharts />
        </CCardBody>
      </CCard>

      {/* 알림 목록 섹션 */}
      <CCard className="alert-section">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="cvelist" className="card-title mb-10">
                Alert
              </h4>
            </CCol>
            <CCol sm={7} className="d-flex align-items-center d-md-block">
              <CButton color="outline-dark" className="float-end me-0 border-2">
                <CIcon icon={cilArrowRight} />
              </CButton>
            </CCol>
          </CRow>
          <CRow className="mt-4">
            <h6>등록된 알림이 없습니다.</h6>
          </CRow>
        </CCardBody>
      </CCard>

      {/* CVE List 섹션 */}
      <CCard className="cvelist-section">
        <CCardBody>
          <CRow>
            <CCol sm={5} className="d-flex align-items-center">
              <h4 id="cvelist" className="card-title mb-0">
                CVE List
              </h4>
            </CCol>
            <CCol sm={7} className="m-0 p-0 d-none d-md-block">
              <CButtonGroup className="float-end">
                {['F5 Updates', 'VM Updates'].map((value, index) => (
                  <CButton
                    color="outline-dark"
                    key={value}
                    className={`mx-0 border-2 ${index === 0 ? 'active' : ''}`}
                    active={value === 'Type'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CRow>
            <CTable align="middle" className="cvelist-table mt-2 mb-0 p-0 border" hover responsive>
              <CTableHead className="text-nowrap">
                <CTableRow>
                  <CTableHeaderCell className="cve-id-column bg-body-tertiary text-center">
                    CVE ID
                  </CTableHeaderCell>
                  <CTableHeaderCell className="severity-column bg-body-tertiary text-center">
                    Severity
                  </CTableHeaderCell>
                  <CTableHeaderCell className="date-column bg-body-tertiary text-center">
                    Date
                  </CTableHeaderCell>
                  <CTableHeaderCell className="description-column bg-body-tertiary text-center">
                    Description
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody className="text-nowrap">
                {cvelistExample.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center cve-id-column">
                      <p className="m-0">{item.CVE_ID}</p>
                    </CTableDataCell>
                    <CTableDataCell className="severity-column text-center">
                      <CBadge
                        color={
                          item.Severity === 'High'
                            ? 'danger'
                            : item.Severity === 'Medium'
                              ? 'warning'
                              : 'light'
                        }
                        textBgColor={item.Severity === 'Low' ? 'light' : 'primary'}
                      >
                        {item.Severity}
                      </CBadge>
                    </CTableDataCell>
                    <CTableDataCell className="date-column text-center">
                      <p className="m-0">
                        {new Date(item.Date).toLocaleDateString('ko-KR', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell className="description-column text-ellipsis">
                      <p className="m-0">{item.Description}</p>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Dashboard
