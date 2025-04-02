import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAddressBook,
  cilBookmark,
  cilChatBubble,
  cilDescription,
  cilDollar,
  cilEnvelopeOpen,
  cilFindInPage,
  cilHistory,
  cilHome,
  cilInfo,
  cilList,
  cilPlus,
  cilSettings,
  cilShieldAlt,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

// 사이드바 메뉴 구성 : 커스텀 가능
// =================================
// CNavTitle : 메뉴 그룹 제목
// CNavGroup : 메뉴 그룹
// CNavItem : 메뉴 항목
// =================================

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Alerts & Rules',
    to: '/alertsnrules',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alert History',
        to: '/alertsnrules/history',
        icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Alert Configuration',
        to: '/alertsnrules/config',
        icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Dashboard List',
        to: '/dashboard/list',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create Dashboard',
        to: '/dashboard/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Security Updates',
    to: '/securityupdates',
    icon: <CIcon icon={cilShieldAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CVE List',
        to: '/securityupdates/cvelist',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'MITRE ATT&CK Rules',
        to: '/securityupdates/mitreattck',
        icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'SBOM',
        to: '/securityupdates/sbom',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Support Tickets',
    to: '/supporttickets',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Open a Ticket',
        to: '/supporttickets/openticket',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Case History',
        to: '/supporttickets/history',
        icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Profile',
        to: '/settings/myprofile',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Access Control',
        to: '/settings/accesscontrol',
        icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
        badge: {
          color: 'danger',
          text: 'ADMIN',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Billing & Payment',
    to: '/billingnpayment',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Usage Details',
        to: '/billingnpayment/usagedetails',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Invoice History',
        to: '/billingnpayment/invoicehistory',
        icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Help & Support',
    to: '/helpnsupport',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Docs',
        to: '/helpnsupport/docs',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'FAQ',
        to: '/helpnsupport/faq',
        icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
