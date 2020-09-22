import { useState } from "react"
import { createContainer } from "unstated-next"

const useNavContainer = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(open => !open)
  }

  return { open, toggle }
}

export const NavContainer = createContainer(useNavContainer)

export default NavContainer
