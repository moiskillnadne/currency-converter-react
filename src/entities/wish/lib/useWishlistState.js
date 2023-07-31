import { useCallback, useState } from "react"

export const useWishlistState = () => {
  const localStorageKey = "wishlist"
  
  const loadWishlist = useCallback(() => {
    const localStorageWishlist = localStorage.getItem(localStorageKey)

    if (!localStorageWishlist) {
      return []
    }

    return JSON.parse(localStorageWishlist)
  }, [])

  const [wishlist, setWishlist] = useState(loadWishlist())


  const saveItem = useCallback((item) => {
    const newWishlist = [...wishlist, item]
    setWishlist(newWishlist)
    localStorage.setItem(localStorageKey, JSON.stringify(newWishlist))
  }, [wishlist])

  return {
    wishlist,
    saveItem
  }
}