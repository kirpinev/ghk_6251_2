import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import hero from "./assets/hero.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";

interface Product {
  title: string;
  text: string;
  image: string;
  price: string;
}

const products: Array<Product> = [
  {
    title: "Альфа-Карта",
    text: "Альфа + Ам Ням",
    image: img1,
    price: "499",
  },
  {
    title: "Джибитсы",
    text: "Для Crocs",
    image: img2,
    price: "299",
  },
  {
    title: "Сладости",
    text: "Леденцы и конфеты",
    image: img3,
    price: "249",
  },
  {
    title: "Платёжный брелок",
    text: "Альфа + Ам Ням",
    image: img4,
    price: "599",
  },
  {
    title: "Плюшевая игрушка",
    text: "Альфа + Ам Ням",
    image: img5,
    price: "449",
  },
  {
    title: "Худи",
    text: "Альфа + Ам Ням",
    image: img6,
    price: "2 599",
  },
];

const alfaSmart = "https://online.alfabank.ru";

const Redirect = () => {
  window.location.href = alfaSmart;

  return null;
};

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selected, setSelected] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const submit = () => {
    // window.gtag("event", "6251_get_sub", {
    //   variant_name: "6251_2",
    // });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <Redirect />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={16} />
        <div className={appSt.box}>
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Ам Ням с Альфа-Банком
          </Typography.TitleResponsive>
          <img src={hero} alt="Картинка Альфа-Смарт" />
          <Typography.Text view="primary-large" tag="p" defaultMargins={false}>
            Выбирайте 1 мерч с Ам Нямом — всё будет за наш счёт
          </Typography.Text>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h2"
          weight="bold"
          view="small"
          className={appSt.productsTitle}
        >
          Бесплатный мерч
        </Typography.TitleResponsive>

        <Gap size={16} />

        <div className={appSt.products}>
          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <img
                src={product.image}
                alt=""
                height={220}
                className={appSt.productIcon}
              />
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <ButtonMobile
                hint={`${product.price} ₽`}
                block
                view="primary"
                disabled={selected === product.title}
                size="m"
                onClick={() => {
                  setSelected(product.title);
                  setPrice(product.price);
                }}
              >
                {selected === product.title ? "Выбрано" : "Выбрать"}
              </ButtonMobile>
            </div>
          ))}
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href=""
          size="l"
          disabled={price === ""}
          onClick={submit}
          hint={`${price || 0} ₽`}
        >
          Продолжить
        </ButtonMobile>
      </div>
    </>
  );
};
