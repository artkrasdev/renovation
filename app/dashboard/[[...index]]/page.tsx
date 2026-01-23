'use client'

import {Studio} from 'sanity'
import config from '../../../sanity/sanity.config'

export default function DashboardPage() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Studio config={config} />
    </div>
  )
}
