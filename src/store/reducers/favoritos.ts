import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoFavoritado = action.payload

      if (state.itens.find((p) => p.id === produtoFavoritado.id)) {
        const favoritosNaoRemoviveis = state.itens.filter(
          (p) => p.id !== produtoFavoritado.id
        )
        state.itens = favoritosNaoRemoviveis
      } else {
        state.itens.push(produtoFavoritado)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
