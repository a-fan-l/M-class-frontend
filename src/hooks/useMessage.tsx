import * as React from "react"
import { Message } from "@/components/ui/message"

interface MessageContextType {
  showMessage: (content: string, options?: MessageOptions) => void
}

interface MessageOptions {
  variant?: "default" | "destructive" | "success" | "warning" | "info"
  duration?: number
}

const MessageContext = React.createContext<MessageContextType | undefined>(undefined)

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = React.useState<{
    content: string
    show: boolean
    options?: MessageOptions
  }>({
    content: "",
    show: false,
  })

  const showMessage = React.useCallback(
    (content: string, options?: MessageOptions) => {
      setMessage({ content, show: true, options })
    },
    []
  )

  const handleClose = React.useCallback(() => {
    setMessage((prev) => ({ ...prev, show: false }))
  }, [])

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      <Message
        show={message.show}
        variant={message.options?.variant}
        duration={message.options?.duration}
        onClose={handleClose}
      >
        {message.content}
      </Message>
    </MessageContext.Provider>
  )
}

export function useMessage() {
  const context = React.useContext(MessageContext)
  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageProvider")
  }
  return context
} 