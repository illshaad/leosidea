import React, { useState } from "react";

import {
  H1,
  P,
  Span,
  PinkArrowRight,
  PinkArrowLeft,
  GreyArrowRight,
  GreyArrowLeft,
  ContainerFlex,
} from "../../styles/style";

export default function Profil({ users }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <H1>Hello you are registered in our database</H1>
      <ContainerFlex>
        {currentIndex > 0 ? (
          <PinkArrowLeft onClick={() => setCurrentIndex(currentIndex - 1)}>
            &lt;
          </PinkArrowLeft>
        ) : (
          <GreyArrowLeft> &lt;</GreyArrowLeft>
        )}
        <div>
          <ContainerFlex>
            <P>{users?.[currentIndex]?.firstName}</P>
            <P>{users?.[currentIndex]?.lastName}</P>
          </ContainerFlex>
          <P>
            Vous êtes née le <Span>{users?.[currentIndex]?.birthday}</Span>
          </P>
        </div>

        {currentIndex !== users?.length - 1 ? (
          <PinkArrowRight onClick={() => setCurrentIndex(currentIndex + 1)}>
            &gt;
          </PinkArrowRight>
        ) : (
          <GreyArrowRight> &gt; </GreyArrowRight>
        )}
      </ContainerFlex>
    </>
  );
}
