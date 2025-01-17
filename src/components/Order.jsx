import React, { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import style from '@/pages/MyOrder.module.scss';
import { formatPrice } from '@/utils/formats';
import { updateOrderOk, updateOrderCancel } from '@/api/requests';

export default function Order({ item }) {
  const navigate = useNavigate();
  
  const detailID = {
    'detailId': item.detailId
  };
    
  let orderGuide = '구매가 완료 되었습니다.';
  if(item.isCanceled) {
    orderGuide = '주문이 취소 되었습니다.';
  } else {
    orderGuide = '구매가 완료 되었습니다.';
  }

  let stateText = '구매 완료';
  if(item.done) {
    stateText = '구매 확정';
  } else if(item.isCanceled) {
    stateText = '주문 취소';
  }

  let date = item.timePaid.substr(0, 10);
  let price = formatPrice(item.product.price);
  let thumbnail = `${item.product.thumbnail}`;

  return (
    <div className={style.content}>
      <div className={style.orderContent}>
        <div className={style.imgContent}>
          <img src={thumbnail} className={style.orderImg}></img>
        </div>
        <div className={style.textContent}>
            <p className={style.productName} onClick={() => {
              navigate(`/mypage/order/${item.detailId}`, {
                state: item.detailId });
            }}>{item.product.title}</p>
          <p className={style.orderPrice}>{price}원</p>
          <p className={style.orderDate}>{date}</p>
          <p className={style.orderState}>{stateText}</p>
          <p className={style.orderGuide}>{orderGuide}</p>
          <p className={style.orderGuide}>구매 확정 이후에는 주문 취소가 불가능합니다.</p>
        </div>
        <div className={style.btnContent}>
          <Button display={item.done || item.isCanceled} name={'주문 취소'} onClick={() => {
            updateOrderCancel(detailID);
          }} />
          <Button display={item.done || item.isCanceled} name={'구매 확정'} isPurple={true} onClick={() => {
            updateOrderOk(detailID);
          }} />
        </div>
      </div>
    </div>
  );
}
