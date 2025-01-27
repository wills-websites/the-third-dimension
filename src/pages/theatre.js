import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";

const ClientSideOnlyLazy = React.lazy(() =>
  import("../components/atoms/pages/sapa-girl/SapaGirlInner")
)

const Holder = styled.div`
`;

function Theatre() {
  const isSSR = typeof window === "undefined"

  return (
    <Holder>
      <Seo title="Sapa Girl" />
      <CanvasHolder>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy />
          </React.Suspense>
        )}

      </CanvasHolder>
    </Holder>
  )
};

export default Theatre;
