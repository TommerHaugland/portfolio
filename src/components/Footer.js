import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="mx-auto flex justify-between bg-red-700 text-white">
      <div className="footer-meta container mx-auto flex">
        <p className="mr-2">Bygget med React og Sanity.io</p>
        <span>{new Date().getFullYear()}</span>
      </div>
      <div className="inline-flex py-3 px-3 my-6">
        <SocialIcon
          url="https://github.com/TommerHaugland"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/tommer-haugland/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.facebook.com/tommer.haugland/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </footer>
  );
}
