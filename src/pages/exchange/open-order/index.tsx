// import useLimitOrderApproveCallback, { BentoApprovalState } from '../../../hooks/useLimitOrderApproveCallback'

import Alert from '../../../components/Alert'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { ChainId } from '@dogmoneyswap/sdk'
import CompletedOrders from '../../../features/exchange-v1/open-order/CompletedOrders'
import Container from '../../../components/Container'
import DoubleGlowShadow from '../../../components/DoubleGlowShadow'
import Head from 'next/head'
import NavLink from '../../../components/NavLink'
import NetworkGuard from '../../../guards/Network'
import OpenOrders from '../../../features/exchange-v1/open-order/OpenOrders'
import React from 'react'
import { t } from '@lingui/macro'
import useLimitOrders from '../../../hooks/useLimitOrders'
import { useLingui } from '@lingui/react'

function OpenOrdersPage() {
  const { i18n } = useLingui()
  const { pending } = useLimitOrders()
  return (
    <Container id="open-order-page" className="py-4 md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Open Orders | DOGMONEY</title>
        <meta name="description" content="Open orders..." />
      </Head>
      <div className="min-w-0 md:min-w-[672px]">
        <div className="flex items-center justify-start gap-2 py-3">
          <NavLink href="/limit-order">
            <a className="flex gap-2 text-sm text-secondary">
              <ArrowLeftIcon width={20} height={20} className="text-high-emphesis" />
              {i18n._(t`Back to Limit Orders`)}
            </a>
          </NavLink>
        </div>
        <DoubleGlowShadow>
          <div id="limit-order-page" className="flex flex-col w-full gap-4 p-3 rounded md:p-5 bg-dark-900">
            <OpenOrders />
            <CompletedOrders />
          </div>
        </DoubleGlowShadow>
      </div>
    </Container>
  )
  // return <Container id="open-order-page" className="py-4 md:py-8 lg:py-12" maxWidth="2xl"></Container>
}

export default OpenOrdersPage
