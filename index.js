const priceInput = document.querySelector("#priceInput");
const saleInput = document.querySelector("#saleInput");
const calcButton = document.querySelector("#calcButton");

`상품의 원래 가격은 원이고, 할인율은 %입니다. 원을 절약한 원에 살 수 있습니다.`;

calcButton.addEventListener("click", () => {
  const resultPrice =
    Number(priceInput.value) * ((100 - Number(saleInput.value)) * 0.01);
  const resultSale = Number(priceInput.value) - resultPrice;

  const result = document.querySelector(".result");
  result.innerHTML = `<div>상품의 원래 가격은 ${priceInput.value}원이고, 할인율은 ${saleInput.value}%입니다. 
  <span style="color: blue;">${resultSale}원</span>을 절약한 <span style="color: red;">${resultPrice}원</span>에 살 수 있습니다.</div>`;
});
