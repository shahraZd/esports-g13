import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../assets/logo.webp";

export default function Navbar() {
  const router = useRouter(); // Get the current route
  const menuItems = [
    {
      key: "/",
      label: <Link href="/">home</Link>,
    },
    {
      key: "/tournaments",

      label: "Tournaments",
      children: [
        {
          key: "/tournament",

          label: <Link href="/tournaments">Tournaments</Link>,
        },
        {
          key: "/team",
          label: <Link href="/team">team</Link>,
        },
        {
          key: "/brackets",
          label: <Link href="/brackets">brackets</Link>,
        },
      ],
    },
    {
      key: "/logo",
      href: "/",
      label: (
        <Link href="/">
          <Image
            src={logo}
            alt="g13-esports-tunisie"
            // layout="fill"
            // objectFit="cover"
            quality={100}
            // object-position="left top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      ),
    },
    {
      key: "/contact",
      label: "contact",
      children: [
        {
          key: "/partner",
          label: <Link href="/partner">partner</Link>,
        },
        {
          key: "/feedback",
          label: <Link href="/feedback">feedback</Link>,
        },
      ],
    },
    {
      key: "/account",

      label: "my account",
      children: [
        {
          key: "/login",
          label: <Link href="/login">login</Link>,
        },
        {
          key: "/signup",
          label: <Link href="/signup">signup</Link>,
        },
      ],
    },
  ];

  return (
    <Menu
      items={menuItems}
      mode="horizontal"
      selectedKeys={[router.pathname]}
      style={{
        background: "transparent",
        borderBottom: "none",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "2rem",
        fontSize: "1.5rem",
        textTransform: "uppercase",
      }}
    />
  );
}
