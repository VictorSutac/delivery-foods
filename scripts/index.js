const modalFanc = () => {
  const modal = document.querySelector(".cart-model__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-model__overlay") ||
      event.target.closest(".cart-model__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");
  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Питтца",
      image: "rest-1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Питтца",
      image: "rest-2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Питтца",
      image: "rest-3.jpg",
    },
    {
      id: 3,
      title: "Жадины-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Питтца",
      image: "rest-4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Питтца",
      image: "rest-5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Питтца",
      image: "rest-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width:100%; text-align: center;">Загрузка</p>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <a href="./goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./img/rests/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h4 class="products-card__description--title">
                      ${card.title}
                    </h4>
                    <div class="products-card__description--bage">${card.time} мин</div>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info--raiting">
                        <img src="./img/icons/star.svg" alt="star" />${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card__description-info--group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
        `
      );
    });
  };

  loading();

  if (container) {
    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");
  const goodsArray = [
    {
      id: 0,
      name: "Ролл угорь стандарт",
      price: 250,
      text: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      image: "goods-1.jpg",
    },
    {
      id: 1,
      name: "Калифорния лосось стандарт",
      price: 395,
      text: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      image: "goods-2.jpg",
    },
    {
      id: 2,
      name: "Окинава стандарт",
      price: 250,
      text: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      image: "goods-3.jpg",
    },
    {
      id: 3,
      name: "Цезарь маки хl",
      price: 250,
      text: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      image: "goods-4.jpg",
    },
    {
      id: 4,
      name: "Ясай маки стандарт 185 г",
      price: 250,
      text: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      image: "goods-5.jpg",
    },
    {
      id: 5,
      name: "Ролл с креветкой стандарт",
      price: 250,
      text: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      image: "goods-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width:100%; text-align: center;">Загрузка</p>';
  };

  const randerGoods = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="products-card">
                <div class="products-card__image">
                  <img src="./img/goods/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h5 class="products-card__description--name">
                      Ролл угорь стандарт
                    </h5>
                  </div>
                  <div class="products-card__description-row">
                    <p class="products-card__description--text">
                      ${card.text}
                    </p>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-controls">
                      <button class="btn btn-primary">
                        В корзину
                        <img
                          src="./img/icons/shopping-cart-white.svg"
                          alt="shopping-cart"
                        />
                      </button>
                      <span class="products-card__description-controls--price">
                        ${card.price} ₽
                      </span>
                    </div>
                  </div>
                </div>
              </div>
        `
      );
    });
  };

  loading();

  if (container) {
    setTimeout(() => {
      randerGoods(goodsArray);
    }, 1000);
  }
};

modalFanc();
restsFunc();
goodsFunc();
