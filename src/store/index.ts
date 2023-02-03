import useDashboardStore from './modules/dashboard'

const useStore = () => ({
  dashboard: useDashboardStore(),
})

export default useStore
