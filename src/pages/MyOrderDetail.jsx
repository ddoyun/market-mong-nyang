import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MypageHeader from '@/components/MypageHeader';
import style from './MyOrderDetail.module.scss';
import { selectOrder } from '@/api/requests';
import { formatPrice } from '@/utils/formats';

export default function MyOrderDetail() {
  const [orderDetail, setOrderDetail] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [orderAccount, setOrderAccount] = useState([]);
  const location = useLocation();

  const detailID = {
    'detailId': location.state
  };

  useEffect(() => {
    async function postData() {
      const data = await selectOrder(detailID);
      setOrderDetail(data);
      setOrderProduct(data.product);
      setOrderAccount(data.account);
    }
    postData();
  }, []);


  let stateText = '구매 완료'
  if(orderDetail.done) {
    stateText = '구매 확정';
  } else if (orderDetail.isCanceled) {
    stateText = '주문 취소';
  }

  let date = String(orderDetail.timePaid).substring(0, 10);
  const orderPrice = formatPrice(orderProduct.price);
  const thumbnailSrc = `${orderProduct.thumbnail}`;

  return (
    <div className={style.MyOrderDetail}>
      <MypageHeader name={'주문 상세정보 (개수+결제금액 수정하기!!!)'} />
      <div className={style.content}>
        <div className={style.orderDateNum}>
          <span className={style.orderDate}>주문 날짜 : <b>{date}</b></span>
          <span className={style.orderNum}>주문 번호 : {orderDetail.detailId}</span>
        </div>
        
        <div className={style.productContent}>
          <img src={thumbnailSrc} className={style.thumbnailImg}></img>
          <div className={style.productText}>
            <p className={style.productTitle}>{orderProduct.title}</p>
            <p className={style.productPrice}>{orderPrice}원 <span className={style.productCount}>개수</span></p>
          </div>
          <div className={style.productState}>
            <p>{stateText}</p>
          </div>
          </div>

          <p className={style.accountTitle}>결제 정보</p>
          <div className={style.accountContent}>
            <div className={style.bankContent}>
              <p className={style.accountToolTitle}>결제 수단</p>
              <span className={style.accountBankName}>{orderAccount.bankName}</span>
              <span className={style.accountBankNum}>({orderAccount.accountNumber})</span>
            </div>
            <div className={style.priceContent}>
              <p className={style.priceTitle}>결제 금액</p>
              <p className={style.accountPrice}>{orderPrice} * 개수 원</p>
            </div>
          </div>
      </div>
    </div>
  );
}
