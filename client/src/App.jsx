import { gql, useQuery } from '@apollo/client'

const query = gql`
query GetTodosWithUser {
  getTodos {
    id
    title
    completed
    user {
      id
      name
    }
  }
}`;

function App() {
  const {data, loading} = useQuery(query);
  console.log(data);
  if (loading) return <h1>Loading...</h1>

  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
