import Members from './Members'
const page = ({params}) => {

  if(params.member in Members){
    return (
      <section>
          {params.member}
      </section>
    )
  }
  else {
    return (
      <section className='h-screen'>
      <h1 className="text-5xl font-bold my-10 text-center text-red-600">Member not Found</h1>
      </section>
    )

  }
}

export default page
