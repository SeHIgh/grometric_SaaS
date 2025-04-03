// Sidebar 요소를 나타내는 컴포넌트
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
// 사이드 바
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    // 사이드 바
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      {/* 사이드 바 헤더 */}
      <CSidebarHeader className="border-bottom d-lg-flex flex-lg-column align-lg-items-center justify-lg-content-center">
        {/* 브랜드 로고 */}
        <CSidebarBrand to="/" className="d-flex justify-content-center align-items-center">
          {/* 예시) 사이드 바 펼침 : full Logo */}
          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} /> */}
          {/* 예시) 사이드 바 접힘 : narrow Logo */}
          {/* <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} /> */}
          <div
            className="d-flex align-items-center justify-content-center overflow-hidden rounded-circle"
            style={{ width: '40px', height: '45px' }}
          >
            <CImage
              rounded
              src="../../src/assets/images/grosaas.png"
              width={70}
              height={70}
              style={{ position: 'absolute' }}
            />
          </div>
          <h3 className={`${unfoldable ? 'd-none' : ''} text-decoration-none lh-1`}>GroSaaS</h3>
        </CSidebarBrand>
        {/* 사이드 바 접기 버튼 */}
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      {/* 사이드 바 네비게이션 내용 */}
      <AppSidebarNav items={navigation} />
      {/* 사이드 바 푸터(하단) */}
      <CSidebarFooter className="d-none d-lg-flex flex-column gap-1">
        {/* 저작권 */}
        <div>
          {unfoldable ? (
            <div className="footer-copyright text-center m-0 p-0">GroSaaS</div>
          ) : (
            <div className="footer-copyright text-left m-0">
              <p>Copyright © 2025 GroSaaS.</p>
              <p>All rights reserved. / v.3</p>
            </div>
          )}
        </div>
        {/* 사이드 바 접기 버튼 */}
        {/* 자동 접힘 or 고정 */}
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
