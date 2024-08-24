import { StyledComponent } from 'nativewind'

import ArrowRight from '@ui/assets/icons/arrow-right.svg'
import BookBold from '@ui/assets/icons/book-bold.svg'
import Book from '@ui/assets/icons/book.svg'
import BookMarck from '@ui/assets/icons/bookmark.svg'
import Calendar from '@ui/assets/icons/calendar.svg'
import ChevronLeft from '@ui/assets/icons/chevron-left.svg'
import ClockTimeMenu from '@ui/assets/icons/clock-time-menu.svg'
import ClockTime from '@ui/assets/icons/clock-time.svg'
import CoffeeCup from '@ui/assets/icons/coffee-cup.svg'
import Edit from '@ui/assets/icons/edit.svg'
import Heart from '@ui/assets/icons/heart.svg'
import House from '@ui/assets/icons/house.svg'
import JellyCake from '@ui/assets/icons/jelly-cake.svg'
import Menu from '@ui/assets/icons/menu.svg'
import Nivel from '@ui/assets/icons/nivel.svg'
import Restaurant from '@ui/assets/icons/restaurant.svg'
import Search from '@ui/assets/icons/search.svg'
import Turkey from '@ui/assets/icons/turkey.svg'
import UserCircle from '@ui/assets/icons/user-circle.svg'
import UserGroup from '@ui/assets/icons/user-group.svg'
import WeightDiet from '@ui/assets/icons/weight-diet.svg'

type IconProps = {
  name: Icons
  className?: string
  testID?: string
}

const Icon = ({ name, ...rest }: IconProps) => {
  const IconComponent = ICONS_LIBRARY[name]

  return (
    <StyledComponent
      testID="icon"
      component={IconComponent}
      className={'text-brand-primary-400 h-6 w-6'}
      {...rest}
    />
  )
}

const ICONS_LIBRARY = {
  ArrowRight,
  BookBold,
  Book,
  BookMarck,
  Calendar,
  ChevronLeft,
  ClockTimeMenu,
  ClockTime,
  CoffeeCup,
  Edit,
  Heart,
  House,
  JellyCake,
  Menu,
  Nivel,
  Restaurant,
  Search,
  Turkey,
  UserCircle,
  UserGroup,
  WeightDiet,
}

type Icons = keyof typeof ICONS_LIBRARY

export { Icon, type Icons }
