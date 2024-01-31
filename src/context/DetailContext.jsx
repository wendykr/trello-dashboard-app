import React, { createContext, useContext, useState } from 'react';

export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {

  const [isShowDetailItem, setIsShowDetailItem] = useState(false);
  const [detailHeadline, setDetailHeadline] = useState('');
  const [detailTitle, setDetailTitle] = useState('');
  const [detailSrc, setDetailSrc] = useState('');

  const onClickDetail = (title, headline, src) => {
    setDetailTitle(title);
    setDetailHeadline(headline);
    setDetailSrc(src);
    setIsShowDetailItem(true);
  }

  return (
    <DetailContext.Provider value={{
      isShowDetailItem, setIsShowDetailItem,
      detailHeadline, setDetailHeadline,
      detailTitle, setDetailTitle,
      detailSrc, setDetailSrc,
      onClickDetail
    }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail= () => useContext(DetailContext);