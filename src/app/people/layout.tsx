import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "People | Symposium",
  description: "Browse and search for people at Symposium",
};

export default function PeopleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
