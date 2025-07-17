import { Link } from "react-router-dom";
import React, { useState } from "react";
import { createPortal } from "react-dom";

import { WebpImage } from "@/shared/ui/WebpImage";
import { images } from "@/shared/lib/images";

import { Burger } from "./ui";
import styles from "./Header.module.scss";


export type HeaderProps = {
  type?: "dapp" | "main";
};



export const Header: React.FC<HeaderProps> = ({ type = "main" }) => {
  // const lang = localStorage.getItem("saved-lang");

  const [isOpen, setIsOpen] = useState(false);


  // const logo = useMemo(() => {
  //   if (type === "dapp") {
  //     return images.main.header["logo-dapp"];
  //   }

  //   if (lang === "ru") {
  //     return images.main.header["logo-ru"];
  //   }
  //   return images.main.header.logo;
  // }, [type, lang]);

  return (
    <>
      <header
        className={`${styles.root}`}
      >
        <div
          className={`${styles.container} container`}
        >
          <Link className={styles.logo} to={"/"}>
            {/* <WebpImage src={logo} alt={"Logo"} /> */}
            <WebpImage src={images.main.header.key} alt={"Logo"} />
            <span>Cryptoflats</span>
          </Link>
          <div className={styles.info}>
            <div className={styles.links}>
              <a className={styles.link} href="#about">
                About
              </a>
              {/* <a className={styles.link} href='https://opensea.io/collection/cryptoflats-gen1'
                target='_blank'>
                Buy NFT Room
              </a> */}
              <a className={styles.link} href="#concepts">
                Concepts
              </a>
              <a className={styles.link} href="#game">
                Game
              </a>
            </div>
            <div className={styles.socials}>
              <a
                className={styles.social}
                href={"https://x.com/CryptoflatsNFT"}
                target={"_blank"}
                rel={"noreferrer noopener"}
              >
                <WebpImage src={images.main.header.x} alt={"x"} />
              </a>
            </div>
            {type === "dapp" && (
              <WebpImage
                className={styles.avatar}
                src={images.main.header.avatar}
                alt="avatar"
              />
            )}

            <Burger
              isOpen={isOpen}
              className={styles.burger}
              onClick={setIsOpen}
            />
          </div>
        </div>
        <Dropdown
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onToken={() => {
            setIsOpen(false);
          }}
        />
      </header>
    </>
  );
};

type DropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  onToken: () => void;
};

const Dropdown = React.memo<DropdownProps>(({ isOpen, onClose }) => {

  return createPortal(
    <div className={`${styles.dropdown} ${isOpen ? styles["is-active"] : ""}`}>
      <div className={styles["dropdown-links"]}>
        <a className={styles["dropdown-link"]} href="#about" onClick={onClose}>
          About
        </a>
        {/* <a
          className={styles["dropdown-link"]}
          href='https://opensea.io/collection/cryptoflats-gen1'
          target='_blank'
          rel={"noreferrer noopener"}
          onClick={onClose}
        >
          Buy NFT Room
        </a> */}

        <a className={styles["dropdown-link"]} href="#concepts" onClick={onClose}>
          Concepts
        </a>
        <a className={styles["dropdown-link"]} href="#game" onClick={onClose}>
          Game
        </a>
      </div>
      <div className={styles["dropdown-socials-wrapper"]}>
        <div className={styles["dropdown-socials"]}>
          <a
            className={styles.social}
            href={"https://x.com/CryptoflatsNFT"}
            target={"_blank"}
            rel={"noreferrer noopener"}
            onClick={onClose}
          >
            <WebpImage src={images.main.header.x} alt={"x"} />
          </a>
        </div>
      </div>
    </div>,
    document.querySelector("#root")!
  );
});

