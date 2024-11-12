import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

export default function Navbar() {
  const data = useSelector((dd: RootState) => dd.RealLife);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <h1>Syed Technical</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link
          href="/"
          style={{ textDecoration: "none", color: "#fff", fontSize: "20px" }}
        >
          Home
        </Link>
        <h1 style={{ margin: "0" }}>Cart: {data.length}</h1>
        <Link
          href="/Cart"
          style={{ textDecoration: "none", color: "#fff", fontSize: "20px" }}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
