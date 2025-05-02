import Image from "next/image";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-2">
            <Image
              src={"/icons/logo.svg"}
              alt="Logo"
              height={37}
              width={37}
            ></Image>
            <h1 className="text-2xl font-semibold text-white">UniLib</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src={"/images/auth-illustration.png"}
          alt="Authh Illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
        ></Image>
      </section>
    </main>
  );
};

export default Layout;
