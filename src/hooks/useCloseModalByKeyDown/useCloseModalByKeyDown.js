"use client"

import { useEffect } from "react";

export const useCloseModalByKeydown = (setIsModalOpen) => {
  useEffect(() => {
    const onKeydownClick = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    addEventListener("keydown", onKeydownClick);
    return () => removeEventListener("keydown", onKeydownClick);
  }, [setIsModalOpen]);
};