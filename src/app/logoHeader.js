import Image from "next/image"

export default function LogoHeader() {
    const size = 450;

    return (
      <header className="flex justify-center items-center mt-5">
        <a href="/">
          <Image src="/logo.png" width={size} height={size}></Image>
        </a>
      </header>
    )    
}