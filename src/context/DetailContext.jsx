import React, { createContext, useContext, useState } from 'react';

export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {

  const [isShowDetailItem, setIsShowDetailItem] = useState(false);

  const [detailCard, setDetailCard] = useState({
    id: '',
    headline: '',
    title: '',
    src: '',
    description: '',
  });

  const onClickDetail = (id, title, headline, src, description) => {
    setDetailCard({
      id,
      headline,
      title,
      src,
      description,
    });
    setIsShowDetailItem(true);
  }

  return (
    <DetailContext.Provider value={{
      isShowDetailItem, setIsShowDetailItem,
      detailCard, setDetailCard,
      onClickDetail
    }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail = () => useContext(DetailContext);