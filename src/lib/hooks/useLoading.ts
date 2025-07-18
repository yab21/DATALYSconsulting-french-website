"use client"

import { create } from "zustand"

interface LoadingState {
  isLoading: boolean
  isPageTransition: boolean
  message: string
  setLoading: (loading: boolean, message?: string) => void
  setPageTransition: (transition: boolean) => void
}

export const useLoading = create<LoadingState>((set) => ({
  isLoading: true,
  isPageTransition: false,
  message: "Chargement...",
  setLoading: (loading, message = "Chargement...") =>
    set({ isLoading: loading, message }),
  setPageTransition: (transition) => set({ isPageTransition: transition }),
}))
