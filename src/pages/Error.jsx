import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();

  // console.log(error.status)
  // if (error.status === 404) {
  //   return (
  //     <main className="min-h-screen grid place-items-center px-8">
  //       <div className="text-center">
  //         <h1 className="font-semibold text-9xl text-primary">404</h1>
  //         <p className="font-bold text-3xl mt-4 sm:text-5xl tracking-tight">page not found</p>
  //         <p className="text-lg mt-5">Sorry, we couldn’t find the page you’re looking for.</p>
  //         <div className="mt-10">
  //           <Link to="/" className="btn btn-secondary uppercase">
  //             go back home
  //           </Link>
  //         </div>
  //       </div>
  //     </main>
  //   )
  // }

  return (
    <main className="min-h-screen grid place-items-center">
      <h1 className="text-4xl font-bold text-center">Something went wrong...</h1>
    </main>
  )
}
export default Error