import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <nav className="bg-slate-500 py-2 px-2 rounded-lg">
          <div className="flex justify-evenly items-center">
            <div className="py-1">
              <Link href="/">Origin</Link>
            </div>
            <div className="py-1">
              <Link href="/products">Worker</Link>
            </div>
          </div>
        </nav>
        <div className="pt-4">{children}</div>
      </div>
      {children}
    </div>
  );
};

export default layout;
