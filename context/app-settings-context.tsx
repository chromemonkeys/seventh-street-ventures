"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ContentSet = "set1" | "set2"

interface AppSettingsContextType {
  contentSet: ContentSet
  setContentSet: (set: ContentSet) => void
}

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined)

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [contentSet, setContentSet] = useState<ContentSet>("set1")

  return (
    <AppSettingsContext.Provider value={{ contentSet, setContentSet }}>
      {children}
    </AppSettingsContext.Provider>
  )
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext)
  if (context === undefined) {
    throw new Error("useAppSettings must be used within an AppSettingsProvider")
  }
  return context
}
