import Header from "../components/layouts/header"
import HomePage from "../components/template/home"

const index = ({ data, token }) => {
  return (
    <div>
      <Header token={token} />
      <HomePage data={data} />
    </div>
  )
}

export default index


export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3400/products?limit=1000")
  const data = await response.json()

  const token = context.req.headers.cookie || ""
  return {
    props: { data, token },
  }
}