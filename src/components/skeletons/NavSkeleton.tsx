export default function NavSkeleton() {
  return (
    <ul className="navbar-nav mr-auto">
      {[...Array(8)].map((item, index) => (
        <li
          key={index}
          className="nav-item animate-pulse"
          style={{ height: "16px", width: "40px", background: "#718096" }}
        ></li>
      ))}
    </ul>
  )
}
