import React from "react";

type Props = {
  loadingProgression: number;
};

export const AppLoading = ({ loadingProgression }: Props) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          lineHeight: "100vh",
        }}
      >
        Now loading: {loadingProgression * 100} %
      </div>
    </>
  );
};
