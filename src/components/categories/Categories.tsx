import { useAppContext } from "../../context/App.context"
import { Text } from "../../utils/Text.styles"
import { CATEGORIES } from "../../utils/categories"
import { CategoriesCarousel, CategoryItem, StyledCategories } from "./Categories.styles"
import { ITranslations } from '../../utils/translations';
import React, { useRef } from "react";

const Categories = () => {
  const { text, activeCategory, setActiveCategory } = useAppContext();
  const categoriesCarouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (categoriesCarouselRef.current) {
      const delta = event.deltaY;
      categoriesCarouselRef.current.scrollLeft += delta * 1;
    }
  };

  return (
    <CategoriesCarousel ref={categoriesCarouselRef} onWheel={handleScroll}>
      <StyledCategories>
        {CATEGORIES.map((name, index) => (
          <CategoryItem
            active={(name.toLowerCase() === activeCategory.toLowerCase().toString()).toString()}
            key={index}
            onClick={() => setActiveCategory(name)}
          >
            <Text>{text[name as keyof ITranslations]}</Text>
          </CategoryItem>
        ))}
      </StyledCategories>
    </CategoriesCarousel>
  )
}

export default Categories