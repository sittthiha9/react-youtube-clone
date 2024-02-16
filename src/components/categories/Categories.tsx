import { useAppContext } from "../../context/App.context"
import { Text } from "../../utils/Text.styles"
import { CATEGORIES } from "../../utils/categories"
import { CategoryItem, StyledCategories } from "./Categories.styles"
import { ITranslations } from '../../utils/translations';

const Categories = () => {
  const { text } = useAppContext();

  return (
    <StyledCategories>
      {CATEGORIES.map((name, index) => (
        <CategoryItem key={index}>
          <Text>{text[name as keyof ITranslations]}</Text>
        </CategoryItem>
      ))}
    </StyledCategories>
  )
}

export default Categories