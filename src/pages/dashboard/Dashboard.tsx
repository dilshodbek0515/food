import * as React from 'react'
import { extendTheme } from '@mui/material/styles'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import Create from './createProduct/Create'
import Manage from './manageProduct/Manage'

const NAVIGATION: Navigation = [
  {
    segment: 'createProduct',
    title: 'Create Recipes',
    icon: <DashboardIcon />
  },
  {
    segment: 'manageProduct',
    title: 'Manage Recipes',
    icon: <ShoppingCartIcon />
  },
  {
    kind: 'divider'
  }
]

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536
    }
  }
})

function useDemoRouter (initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath)

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path))
    }
  }, [pathname])

  return router
}

export default function DashboardLayoutBasic (props: any) {
  const { window } = props
  const router = useDemoRouter('/dashboard')
  const demoWindow = window ? window() : undefined

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          {router.pathname === '/createProduct' && <Create />}
          {router.pathname === '/manageProduct' && <Manage />}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  )
}
