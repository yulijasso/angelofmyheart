import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      // Add item to cart
      addItem: (product, quantity = 1, selectedSize = null) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === product.id && item.selectedSize === selectedSize
          );

          if (existingItemIndex > -1) {
            // Item exists, update quantity
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            return { items: newItems };
          } else {
            // New item
            return {
              items: [
                ...state.items,
                {
                  ...product,
                  quantity,
                  selectedSize,
                  cartItemId: `${product.id}-${selectedSize || 'default'}-${Date.now()}`
                }
              ]
            };
          }
        });
      },

      // Remove item from cart
      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.cartItemId !== cartItemId)
        }));
      },

      // Update item quantity
      updateQuantity: (cartItemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartItemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity } : item
          )
        }));
      },

      // Clear entire cart
      clearCart: () => set({ items: [] }),

      // Get cart total
      getTotal: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      // Get cart count
      getCount: () => {
        const state = get();
        return state.items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'jewelry-cart-storage' // localStorage key
    }
  )
);
