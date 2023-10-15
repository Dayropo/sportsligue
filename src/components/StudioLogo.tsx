import Image from "next/image"

function StudioLogo(props: any) {
  const { renderDefault, title } = props

  return (
    <div className="studio-logo-container">
      <Image
        className="studio-logo"
        style={{ width: "100px", height: "39" }}
        src="/images/white_logo.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
