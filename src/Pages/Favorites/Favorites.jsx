import React from 'react'
import './Favorites.scss'
import { AppNavBar } from '../../Components/AppNavBar/AppNavBar'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { RecipePosts } from '../../Components/RecipePosts/RecipePosts'
export const Favorites = () => {
  return (
    <div>
        <AppNavBar/>
        <div className="favoriteContent">
            <div className="contentSearch">
                <SearchBar/>
            </div>
            <h1 className='favText'>Favorites</h1>
            <RecipePosts isFavorites={true}/>
        </div>
    </div>
  )
}
