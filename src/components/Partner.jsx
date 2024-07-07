import Link from "next/link"

/* Partners component, takes in logo and the name which is also used as part of the alt */

const Partner = ({name, logo, link}) => {
  return (
    <Link className="block" href={`${link}`}>
        <img src={`${logo}`} alt={`${name + " logo"}`} />
        <h1>{name}</h1>
    </Link>
  )
}

export default Partner
