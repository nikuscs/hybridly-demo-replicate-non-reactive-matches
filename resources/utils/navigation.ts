export const navigationMenu = () => {
  const { matches } = useRoute()
  return [
    { name: 'Dashboard', active: matches('dashboard') },
    { name: 'Login', active: matches('login') || matches('login.*') },
  ]
}
