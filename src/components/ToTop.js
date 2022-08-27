import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null
}

export default ToTop
