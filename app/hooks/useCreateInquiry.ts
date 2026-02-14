"use client";

import { useMutation } from "@tanstack/react-query";
import { createInquiry, type InquiryPayload } from "../services/inquiryService";

export function useCreateInquiry() {
  return useMutation({
    mutationFn: (payload: InquiryPayload) => createInquiry(payload),
  });
}
