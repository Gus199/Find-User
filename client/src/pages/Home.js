import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import SimpleMap from '../components/users/userMap'

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
      <SimpleMap />
    </>
  )
}

export default Home