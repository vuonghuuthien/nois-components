import React from 'react';
import './card_quote.css';

import { check_icon } from '../../assets';

const Card_basic = ({ showImg, sampleImg, styleImg, showDesc, showSale, showSalePrice, showSalePercent, showPrice, showPriceUnit, showPriceValue, showPriceTime, showList, showBtn }) => {
  return (
    <div className='nois__card-quote'>
      <div className='nois__card'>
        <div className={'nois__card-img' + ' ' + (showImg || '') + ' ' + (styleImg || '')}>
          <img src={sampleImg} alt="" />
        </div>
        <div className='nois__card-content'>
          <div className='nois__card-content-title'>
            Customer Insights
          </div>
          <div className={'nois__card-content-desc' + ' ' + (showDesc || '')}>
            First Dynamics 365 App
          </div>
          <div className={'nois__card-content-sale' + ' ' + (showSale || '')}>
            <div className={'nois__card-content-sale-price' + ' ' + (showSalePrice || '')}></div>
            <div className={'nois__card-content-sale-percent' + ' ' + (showSalePercent || '')}></div>
          </div>
          <div className={'nois__card-content-price' + ' ' + (showPrice || '')}>
            <div className={'nois__card-content-price-unit' + ' ' + (showPriceUnit || '')}>
              $
            </div>
            <div className={'nois__card-content-price-value' + ' ' + (showPriceValue || '')}>
              1500
            </div>
            <div className={'nois__card-content-price-time' + ' ' + (showPriceTime || '')}>
              /mo
            </div>
          </div>
          <div className='nois__card-content-action'>
            <a className={(showBtn || '')} href="http://" target="_blank">
              Buy Now
            </a>
          </div>
          <div className={'nois__card-content-checklist' + ' ' + (showList || '')}>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Quality Control</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Regulatory Compliance</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Improved Efficiency</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card_basic